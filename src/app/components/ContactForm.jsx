"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import clinicConfig from "../lib/clinicConfig";

/* ── Time slots: 9am–8pm, 30-min intervals ────────────────────────────────── */
const TIME_SLOTS = Array.from({ length: 23 }, (_, i) => {
  const totalMins = i * 30;
  const h = Math.floor(totalMins / 60) + 9;
  const m = totalMins % 60;
  const hh = h.toString().padStart(2, "0");
  const mm = m.toString().padStart(2, "0");
  const suffix = h < 12 ? "AM" : "PM";
  const h12 = h > 12 ? h - 12 : h;
  return { value: `${hh}:${mm}`, label: `${h12}:${mm} ${suffix}` };
});

/* ── Helpers ──────────────────────────────────────────────────────────────── */
const today = () => { const d = new Date(); d.setHours(0,0,0,0); return d; };

function formatDate(d) {
  if (!d) return "";
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
}

function validate(form, selectedDate, selectedTime) {
  const errors = {};
  if (!form.name || form.name.trim().length < 3)
    errors.name = "Name must be at least 3 characters.";
  const mobileRe = /^[6-9]\d{9}$/;
  if (!form.mobile || !mobileRe.test(form.mobile.replace(/\s/g, "")))
    errors.mobile = "Enter a valid 10-digit Indian mobile number (starts 6–9).";
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address.";
  if (!selectedDate)
    errors.date = "Please select an appointment date.";
  if (!selectedTime)
    errors.time = "Please select a time slot.";
  return errors;
}

const EMPTY = { name: "", mobile: "", email: "", service: "", complaint: "", isNewPatient: false };

/* ── Sub-components ───────────────────────────────────────────────────────── */
function FieldWrapper({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-danger ml-0.5" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-danger font-medium">{error}</p>}
    </div>
  );
}

const inputCls = (err) =>
  `w-full px-4 py-2.5 border rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors ${err ? "border-danger bg-red-50" : "border-gray-200"}`;

function Toast({ message, onDismiss }) {
  return (
    <div role="status" aria-live="polite" className="fixed bottom-24 right-4 z-50 flex items-center gap-3 bg-success text-white px-5 py-3 rounded-2xl shadow-xl animate-fade-in-up">
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onDismiss} className="ml-2 text-white/70 hover:text-white" aria-label="Dismiss notification">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────────────────────── */
export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form, selectedDate, selectedTime);
    if (Object.keys(errs).length) {
      setErrors(errs);
      const first = Object.keys(errs)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setLoading(true);

    const dateStr = selectedDate
      ? selectedDate.toLocaleDateString("en-IN", { day: "2-digit", month: "2-digit", year: "numeric" })
      : "";

    const payload = {
      timestamp: new Date().toISOString(),
      name: form.name.trim(),
      mobile: form.mobile.trim(),
      email: form.email.trim(),
      date: dateStr,
      time: selectedTime,
      service: form.service,
      complaint: form.complaint.trim(),
      isNewPatient: form.isNewPatient,
    };

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      } catch { /* non-blocking */ }
    }

    const wa = clinicConfig.whatsapp.replace(/[^0-9]/g, "");
    const msg = [
      `*New Appointment Request*`,
      `Name: ${payload.name}`,
      `Mobile: ${payload.mobile}`,
      payload.email ? `Email: ${payload.email}` : null,
      `Preferred Date: ${dateStr}`,
      `Preferred Time: ${selectedTime}`,
      payload.service ? `Service: ${payload.service}` : null,
      payload.complaint ? `Notes: ${payload.complaint}` : null,
      `New Patient: ${payload.isNewPatient ? "Yes" : "No"}`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, "_blank");

    setLoading(false);
    setForm(EMPTY);
    setSelectedDate(undefined);
    setSelectedTime("");
    setErrors({});
    setToast("Appointment request sent! We'll confirm shortly.");
  }

  return (
    <>
      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}

      <form onSubmit={handleSubmit} noValidate aria-label="Appointment booking form"
        className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-5">

        <div>
          <h3 className="text-xl font-bold text-neutral-dark">Book an Appointment</h3>
          <p className="text-sm text-gray-500 mt-1">Fields marked <span className="text-danger font-semibold">*</span> are required.</p>
        </div>

        {/* Row 1 — Name + Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FieldWrapper id="name" label="Full Name" required error={errors.name}>
            <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange}
              placeholder="Rahul Sharma" aria-required="true" className={inputCls(errors.name)} />
          </FieldWrapper>
          <FieldWrapper id="mobile" label="Mobile Number" required error={errors.mobile}>
            <input id="mobile" name="mobile" type="tel" inputMode="numeric" autoComplete="tel" maxLength={10}
              value={form.mobile} onChange={handleChange} placeholder="98765 43210" aria-required="true" className={inputCls(errors.mobile)} />
          </FieldWrapper>
        </div>

        {/* Row 2 — Email + Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FieldWrapper id="email" label="Email" error={errors.email}>
            <input id="email" name="email" type="email" inputMode="email" autoComplete="email" value={form.email}
              onChange={handleChange} placeholder="rahul@email.com" className={inputCls(errors.email)} />
          </FieldWrapper>
          <FieldWrapper id="service" label="Service Required">
            <select id="service" name="service" value={form.service} onChange={handleChange} className={inputCls(false)}>
              <option value="">Select a service</option>
              {clinicConfig.services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </FieldWrapper>
        </div>

        {/* Calendar + Time slots */}
        <div>
          <p className="block text-sm font-medium text-gray-700 mb-2">
            Select Date &amp; Time <span className="text-danger ml-0.5">*</span>
          </p>
          <div className={`rounded-xl border overflow-hidden flex flex-col sm:flex-row ${errors.date || errors.time ? "border-danger" : "border-gray-200"}`}>
            {/* Calendar */}
            <div className="flex-1 flex items-start justify-center p-3 border-b sm:border-b-0 sm:border-r border-gray-100">
              <style>{`
                .rdp { --rdp-accent-color: #0369a1; --rdp-background-color: #e0f2fe; margin: 0; }
                .rdp-day_selected, .rdp-day_selected:hover { background-color: #0369a1; color: #fff; border-radius: 8px; }
                .rdp-day:hover:not(.rdp-day_selected) { background-color: #e0f2fe; border-radius: 8px; }
                .rdp-button:focus-visible { outline: 2px solid #0369a1; }
                .rdp-day_disabled { opacity: 0.3; }
              `}</style>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(d) => { setSelectedDate(d); setErrors((p) => ({ ...p, date: undefined })); }}
                disabled={{ before: today() }}
                showOutsideDays={false}
                formatters={{ formatWeekdayName: (d) => d.toLocaleString("en-US", { weekday: "short" }) }}
              />
            </div>
            {/* Time slots */}
            <div className="w-full sm:w-44 flex flex-col">
              <p className="text-xs font-semibold text-gray-500 px-3 pt-3 pb-1 uppercase tracking-wide">Time Slot</p>
              <div className="flex-1 overflow-y-auto max-h-64 sm:max-h-72 px-2 pb-2 space-y-1">
                {TIME_SLOTS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => { setSelectedTime(value); setErrors((p) => ({ ...p, time: undefined })); }}
                    className={`w-full text-sm px-3 py-2 rounded-lg text-left transition-colors font-medium
                      ${selectedTime === value
                        ? "bg-primary-blue text-white shadow-sm"
                        : "bg-gray-50 hover:bg-primary-blue/10 text-gray-700 hover:text-primary-blue"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {(errors.date || errors.time) && (
            <p role="alert" className="mt-1 text-xs text-danger font-medium">{errors.date || errors.time}</p>
          )}
          {/* Booking summary */}
          {selectedDate && selectedTime && (
            <div className="mt-2 flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              <svg className="w-4 h-4 flex-shrink-0 stroke-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <span className="font-semibold">{formatDate(selectedDate)}</span> at <span className="font-semibold">{TIME_SLOTS.find(t => t.value === selectedTime)?.label}</span>
              </span>
            </div>
          )}
        </div>

        {/* Complaint / Notes */}
        <FieldWrapper id="complaint" label="Complaint / Notes">
          <textarea id="complaint" name="complaint" rows={3} value={form.complaint} onChange={handleChange}
            placeholder="Describe your dental concern, pain, or any special requirements..."
            className={`${inputCls(false)} resize-none`} />
        </FieldWrapper>

        {/* New patient checkbox */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input id="isNewPatient" name="isNewPatient" type="checkbox" checked={form.isNewPatient} onChange={handleChange}
            className="w-4 h-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue cursor-pointer" />
          <span className="text-sm text-gray-700 group-hover:text-neutral-dark transition-colors">
            I&apos;m a new patient at {clinicConfig.name}
          </span>
        </label>

        {/* Submit */}
        <button type="submit" disabled={loading}
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          aria-busy={loading}>
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Book Appointment via WhatsApp
            </>
          )}
        </button>
      </form>
    </>
  );
}
