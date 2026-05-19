/**
 * Google Sheets logging via a deployed Apps Script Web App.
 *
 * Setup:
 *  1. Create a Google Sheet with columns:
 *     Timestamp | Name | Mobile | Email | Date | Time | Service | Complaint | IsNewPatient
 *  2. Extensions → Apps Script → paste the doPost() function below:
 *
 *     function doPost(e) {
 *       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *       var data = JSON.parse(e.postData.contents);
 *       sheet.appendRow([
 *         data.timestamp, data.name, data.mobile, data.email,
 *         data.date, data.time, data.service, data.complaint, data.isNewPatient
 *       ]);
 *       return ContentService
 *         .createTextOutput(JSON.stringify({ success: true }))
 *         .setMimeType(ContentService.MimeType.JSON);
 *     }
 *
 *  3. Deploy → New deployment → Web App → Execute as: Me, Who has access: Anyone
 *  4. Copy the deployment URL → set NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL in .env.local
 */

/**
 * Send form submission data to the Google Sheets Apps Script endpoint.
 *
 * @param {{ name: string, mobile: string, email?: string, date: string, time: string, service: string, complaint?: string, isNewPatient?: boolean }} formData
 * @returns {Promise<{ success: boolean, error?: unknown }>}
 */
export async function logToGoogleSheets(formData) {
  const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL;

  if (!scriptURL) {
    console.warn("NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL is not set. Skipping Sheets log.");
    return { success: false, error: "Script URL not configured" };
  }

  const data = {
    timestamp: new Date().toISOString(),
    name: formData.name,
    mobile: formData.mobile,
    email: formData.email || "",
    date: formData.date,
    time: formData.time,
    service: formData.service,
    complaint: formData.complaint || "",
    isNewPatient: formData.isNewPatient || false,
  };

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return { success: true };
  } catch (error) {
    console.error("Google Sheets error:", error);
    return { success: false, error };
  }
}
