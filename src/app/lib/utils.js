/**
 * Conditionally join class names together.
 * @param  {...string} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a phone number for display.
 * @param {string} phone
 * @returns {string}
 */
export function formatPhone(phone) {
  return phone.replace(/[^\d+\-()\s]/g, "");
}

/**
 * Truncate a string to a given max length with ellipsis.
 * @param {string} str
 * @param {number} max
 * @returns {string}
 */
export function truncate(str, max = 120) {
  if (!str || str.length <= max) return str;
  return str.slice(0, max).trimEnd() + "…";
}
