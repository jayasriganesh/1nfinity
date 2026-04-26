import { google } from 'googleapis'

export async function logToSheet(sheetName: string, values: string[]) {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!privateKey || !clientEmail || !sheetId) return

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: clientEmail, private_key: privateKey },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const sheets = google.sheets({ version: 'v4', auth })
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'RAW',
      requestBody: { values: [[new Date().toISOString(), ...values]] },
    })
  } catch (err) {
    console.error('Sheets logging error:', err)
  }
}
