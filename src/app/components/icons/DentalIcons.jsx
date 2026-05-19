/**
 * DentalIcons — inline SVG icons for each dental service.
 * Each icon is a self-contained React component that accepts className prop.
 * Usage: <RootCanalIcon className="w-20 h-20 text-primary-blue" />
 */

export function RootCanalIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8C20 8 14 10 14 20C14 26 16 30 18 34L20 52C20 54.2 21.8 56 24 56C26.2 56 28 54.2 28 52V36H36V52C36 54.2 37.8 56 40 56C42.2 56 44 54.2 44 52L46 34C48 30 50 26 50 20C50 10 44 8 44 8H20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 8V22M32 8V22M40 8V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 22H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="30" r="4" fill="currentColor" opacity="0.3"/>
      <path d="M30 30H34M32 28V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function ImplantIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 10C22 10 16 12 16 22C16 28 18 32 20 36L22 50C22 52.2 23.8 54 26 54C28.2 54 30 52.2 30 50V40H34V50C34 52.2 35.8 54 38 54C40.2 54 42 52.2 42 50L44 36C46 32 48 28 48 22C48 12 42 10 42 10H22Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="28" y="6" width="8" height="4" rx="1" fill="currentColor" opacity="0.8"/>
      <path d="M32 10V38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2"/>
      <path d="M28 18H36M28 22H36M28 26H36M28 30H36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <circle cx="32" cy="40" r="3" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

export function WhiteningIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10C20 10 14 12 14 22C14 28 16 32 18 36L20 52C20 54.2 21.8 56 24 56C26.2 56 28 54.2 28 52V38H36V52C36 54.2 37.8 56 40 56C42.2 56 44 54.2 44 52L46 36C48 32 50 28 50 22C50 12 44 10 44 10H20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M32 4L33.5 8H37.5L34.5 10.5L35.5 14.5L32 12L28.5 14.5L29.5 10.5L26.5 8H30.5L32 4Z" fill="currentColor" opacity="0.7"/>
      <path d="M46 6L47 9H50L47.5 10.8L48.5 14L46 12.2L43.5 14L44.5 10.8L42 9H45L46 6Z" fill="currentColor" opacity="0.5"/>
      <path d="M18 6L19 9H22L19.5 10.8L20.5 14L18 12.2L15.5 14L16.5 10.8L14 9H17L18 6Z" fill="currentColor" opacity="0.5"/>
      <path d="M22 32C25 30 32 30 42 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

export function BracesIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 10C19 10 13 12 13 22C13 28 15 32 17 36L19 52C19 54.2 20.8 56 23 56C25.2 56 27 54.2 27 52V38H37V52C37 54.2 38.8 56 41 56C43.2 56 45 54.2 45 52L47 36C49 32 51 28 51 22C51 12 45 10 45 10H19Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="19" y="23" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15"/>
      <rect x="28.5" y="23" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15"/>
      <rect x="38" y="23" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15"/>
      <path d="M13 26H19M26 26H28.5M35.5 26H38M45 26H51" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function SmileDesignIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10C20 10 14 12 14 22C14 28 16 32 18 36L20 52C20 54.2 21.8 56 24 56C26.2 56 28 54.2 28 52V38H36V52C36 54.2 37.8 56 40 56C42.2 56 44 54.2 44 52L46 36C48 32 50 28 50 22C50 12 44 10 44 10H20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M22 28C24 32 40 32 42 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M50 8L52 6M54 12H57M52 16L54 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="51" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M27 20C27 20 29 18 32 18C35 18 37 20 37 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function KidsDentistryIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 14C24 14 18 16 18 24C18 29 20 32 22 35L24 47C24 48.7 25.3 50 27 50C28.7 50 30 48.7 30 47V37H34V47C34 48.7 35.3 50 37 50C38.7 50 40 48.7 40 47L42 35C44 32 46 29 46 24C46 16 40 14 40 14H24Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="32" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M30 8C30 8 28 6 26 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M34 8C34 8 36 6 38 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M26 28C27.5 30 36.5 30 38 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="24" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="36" cy="24" r="1.5" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

export function ExtractionIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12C20 12 14 14 14 24C14 30 16 33 18 37L20 50C20 52.2 21.8 54 24 54C26.2 54 28 52.2 28 50V40H36V50C36 52.2 37.8 54 40 54C42.2 54 44 52.2 44 50L46 37C48 33 50 30 50 24C50 14 44 12 44 12H20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeDasharray="4 2"/>
      <path d="M39 6L25 20M25 6L39 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="13" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
    </svg>
  );
}

export function GumTreatmentIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10C20 10 14 12 14 22C14 28 16 32 18 36L20 52C20 54.2 21.8 56 24 56C26.2 56 28 54.2 28 52V38H36V52C36 54.2 37.8 56 40 56C42.2 56 44 54.2 44 52L46 36C48 32 50 28 50 22C50 12 44 10 44 10H20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M14 28C18 24 22 26 26 24C30 22 34 22 38 24C42 26 46 24 50 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.15"/>
      <path d="M14 28C18 24 22 26 26 24C30 22 34 22 38 24C42 26 46 24 50 28" fill="currentColor" fillOpacity="0.1"/>
      <path d="M22 34C24 32 28 33 32 32C36 31 40 32 42 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function EmergencyIcon({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10C20 10 14 12 14 22C14 28 16 32 18 36L20 52C20 54.2 21.8 56 24 56C26.2 56 28 54.2 28 52V38H36V52C36 54.2 37.8 56 40 56C42.2 56 44 54.2 44 52L46 36C48 32 50 28 50 22C50 12 44 10 44 10H20Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M32 16V28M32 32V34" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="32" cy="22" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.15"/>
    </svg>
  );
}

export const DENTAL_ICONS = {
  "root-canal":   RootCanalIcon,
  "implants":     ImplantIcon,
  "whitening":    WhiteningIcon,
  "braces":       BracesIcon,
  "smile":        SmileDesignIcon,
  "kids":         KidsDentistryIcon,
  "wisdom":       ExtractionIcon,
  "gum":          GumTreatmentIcon,
  "emergency":    EmergencyIcon,
};
