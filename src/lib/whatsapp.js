import clinicConfig from "@/app/lib/clinicConfig";

const waNumber = clinicConfig.whatsapp.replace(/[^0-9]/g, "");

/**
 * Build a wa.me URL from a raw message string.
 * @param {string} message
 * @returns {string}
 */
function buildUrl(message) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Open WhatsApp with a pre-filled message from clinicConfig.messages.
 *
 * @param {'consultation'|'appointment'} messageType
 * @param {string} [patientName]
 */
export function openWhatsApp(messageType = "consultation", patientName = "") {
  let message = clinicConfig.messages[messageType] ?? clinicConfig.messages.consultation;

  if (patientName && message.includes("[PATIENT_NAME]")) {
    message = message.replace("[PATIENT_NAME]", patientName);
  }

  message = message.replace("[SERVICE]", "dental treatment");

  window.open(buildUrl(message), "_blank", "noopener,noreferrer");
}

/**
 * Open WhatsApp with a fully-formed appointment summary.
 *
 * @param {{ name: string, date: string, time: string, service: string, mobile: string, complaint?: string }} formData
 */
export function openWhatsAppAppointment(formData) {
  const complaint = formData.complaint ? ` Issue: ${formData.complaint}` : "";
  const message =
    `Hello, my name is ${formData.name}. I would like to book an appointment on ` +
    `${formData.date} (${formData.time}) for ${formData.service}. ` +
    `Mobile: ${formData.mobile}.${complaint}`;

  window.open(buildUrl(message), "_blank", "noopener,noreferrer");
}

/**
 * Build a wa.me URL without opening it (useful for <a href=...>).
 *
 * @param {string} [messageType]
 * @returns {string}
 */
export function getWhatsAppUrl(messageType = "consultation") {
  const message = clinicConfig.messages[messageType] ?? clinicConfig.messages.consultation;
  return buildUrl(message);
}
