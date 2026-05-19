import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorProfile from "../components/DoctorProfile";
import WhatsAppWidget from "../components/WhatsAppWidget";
import clinicConfig from "../lib/clinicConfig";
import HeroHeading from "../components/ui/HeroHeading";
import AboutClient from "../components/AboutClient";
import { SectionGrid } from "../components/ui/SectionGrid";
import { getDoctorSchema } from "@/lib/schemaMarkup";

export const metadata = {
  title: `About Us | ${clinicConfig.name}`,
  description: `Learn about ${clinicConfig.name} — ${clinicConfig.experienceYears}+ years of gentle, expert dental care in ${clinicConfig.doctor.city}.`,
};

const stats = [
  { value: clinicConfig.happyPatients, label: "Happy Patients", iconName: "Users" },
  { value: `${clinicConfig.experienceYears}+`, label: "Years of Practice", iconName: "CalendarDays" },
  { value: clinicConfig.googleRating, label: "Google Rating", iconName: "Star" },
  { value: "15+", label: "Specialist Procedures", iconName: "Stethoscope" },
];

const timeline = [
  { year: "2005", title: "Clinic Founded", desc: `${clinicConfig.name} opened its doors in ${clinicConfig.doctor.city} with a vision to make world-class dental care accessible and painless.` },
  { year: "2009", title: "Digital X-Ray & RVG", desc: "Upgraded to digital radiography, reducing patient radiation exposure by 80% and improving diagnostic accuracy." },
  { year: "2013", title: "Orthodontics Wing Added", desc: "Launched a dedicated orthodontics department offering metal braces, ceramic braces, and Invisalign." },
  { year: "2017", title: "Implantology Centre", desc: "Opened an in-house implantology centre with 3D CBCT scanning and computer-guided implant surgery." },
  { year: "2021", title: "Digital Smile Design", desc: "Introduced digital smile design software allowing patients to preview their smile transformation before treatment begins." },
  { year: "2024", title: `${clinicConfig.happyPatients} Patients Milestone`, desc: `Celebrated serving over ${clinicConfig.happyPatients} patients — a testament to the trust our community places in us.` },
];

const values = [
  { iconName: "Heart", color: "text-rose-500", bg: "bg-rose-50", title: "Patient-First", desc: "Every decision we make starts with your comfort, safety, and wellbeing. We listen before we treat." },
  { iconName: "ShieldCheck", color: "text-primary-blue", bg: "bg-blue-50", title: "Clinical Ethics", desc: "We only recommend what you genuinely need. Transparent treatment plans with no hidden costs." },
  { iconName: "Sparkles", color: "text-primary-teal", bg: "bg-teal-50", title: "Strict Hygiene", desc: "Autoclave sterilisation, single-use instruments, and hospital-grade surface disinfection after every patient." },
  { iconName: "BookOpen", color: "text-violet-500", bg: "bg-violet-50", title: "Patient Education", desc: "We take time to explain your condition and options so you can make confident, informed decisions." },
];

const technology = [
  { label: "Digital OPG & CBCT 3D Scanner", iconName: "ScanLine" },
  { label: "Rotary Endodontics (Root Canal)", iconName: "Drill" },
  { label: "Laser Gum Therapy Unit", iconName: "Zap" },
  { label: "Intraoral Camera & Scanner", iconName: "Camera" },
  { label: "Digital Smile Design Software", iconName: "Monitor" },
  { label: "Autoclave & Ultrasonic Cleaner", iconName: "Wind" },
];

const missionVision = {
  mission: {
    iconName: "Target",
    label: "Mission",
    text: "To deliver gentle, evidence-based dental care that every family can afford, in a welcoming environment where patients feel respected and heard.",
  },
  vision: {
    iconName: "Eye",
    label: "Vision",
    text: `To be ${clinicConfig.doctor.city}'s most trusted dental destination — where advanced technology meets compassionate care, giving every patient a reason to smile.`,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getDoctorSchema()) }}
      />
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <div className="relative h-64 bg-gradient-to-br from-primary-blue to-primary-teal flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/30" />
          <HeroHeading badge="Our Story" title="About Us" subtitle={`Caring for ${clinicConfig.doctor.city} smiles since 2005.`} />
        </div>

        {/* ── All animated sections (client component) ──────────────── */}
        <AboutClient
          stats={stats}
          timeline={timeline}
          values={values}
          technology={technology}
          missionVision={missionVision}
        />

        {/* ── Meet the Doctor ───────────────────────────────────────── */}
        <section className="relative overflow-hidden section-padding bg-white" id="team">
          <SectionGrid />
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <span className="badge mb-3">Meet Your Doctor</span>
              <h2 className="section-title">Expert, Compassionate Care</h2>
            </div>
            <DoctorProfile />
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
