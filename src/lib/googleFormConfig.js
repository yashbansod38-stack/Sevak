/**
 * ============================================================
 *  DHARMA THREADS — GOOGLE FORM CONFIG
 * ============================================================
 *
 *  HOW TO SET UP YOUR GOOGLE FORM:
 *  ─────────────────────────────────────────────────────────
 *  1. Go to forms.google.com and create a new form
 *
 *  2. Add these fields (Short Answer type):
 *     - Full Name
 *     - Phone Number
 *     - Email Address
 *     - Full Address
 *     - City
 *     - Pincode
 *     - State
 *     - T-Shirt Size
 *     - Order Details
 *     - Total Amount
 *     - Special Instructions
 *
 *  3. Get the form's POST URL:
 *     - Click the 3-dot menu → "Get pre-filled link"
 *     - Fill dummy values → click "Get Link"
 *     - The URL will look like:
 *       https://docs.google.com/forms/d/e/XXXXXXXXXXXX/viewform?...
 *     - Change "viewform" → "formResponse" → that's your FORM_ACTION_URL
 *
 *  4. Get entry IDs for each field:
 *     - Open the pre-filled link in a new tab
 *     - Right-click → Inspect → find input fields
 *     - Each input has a name like "entry.1234567890"
 *     - Copy those numbers into the FIELD_IDS below
 *
 *  5. Save this file — the form will automatically work!
 * ============================================================
 */

export const GOOGLE_FORM_CONFIG = {
  /**
   * Replace with your Google Form action URL
   * Format: https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
   */
  FORM_ACTION_URL: 'YOUR_GOOGLE_FORM_ACTION_URL',

  /**
   * Replace each value with the actual entry ID from your Google Form
   * Format: 'entry.XXXXXXXXXX'
   */
  FIELD_IDS: {
    name:         'entry.XXXXXXXXX1',   // Full Name
    phone:        'entry.XXXXXXXXX2',   // Phone Number
    email:        'entry.XXXXXXXXX3',   // Email Address
    address:      'entry.XXXXXXXXX4',   // Full Address
    city:         'entry.XXXXXXXXX5',   // City
    pincode:      'entry.XXXXXXXXX6',   // Pincode
    state:        'entry.XXXXXXXXX7',   // State
    size:         'entry.XXXXXXXXX8',   // T-Shirt Size
    orderDetails: 'entry.XXXXXXXXX9',   // Order Details (auto-filled)
    totalAmount:  'entry.XXXXXXXXX10',  // Total Amount (auto-filled)
    notes:        'entry.XXXXXXXXX11',  // Special Instructions
  },
}
