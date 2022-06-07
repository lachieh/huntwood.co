import type { Song } from '~/routes/api/song'
import type { Guest, RSVPData } from '~/routes/rsvp'
import { google } from 'googleapis'
import * as spotify from '~/utils/spotify'

export interface GoogleApiKey {
  private_key: string
  client_email: string
}

const SHEET_ID = process.env.GOOGLE_SHEET_ID || ''
const key: GoogleApiKey = JSON.parse(
  process.env.GOOGLE_API_KEY || '{}',
) as GoogleApiKey

const getSheetsApi = async () => {
  if (!key.client_email || !key.private_key) {
    throw new Error(
      'Unable to retrieve API Key. Please assign a json token to the GOOGLE_API_KEY environment variable.',
    )
  }

  const auth = new google.auth.GoogleAuth({
    credentials: key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const authClient = await auth.getClient()
  const sheets = google.sheets({ version: 'v4', auth: authClient })
  return sheets
}

const getSheetData = async () => {
  const sheets = await getSheetsApi()
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "'Invite List'!A2:E",
  })
  return res.data.values as string[][]
}

export const getGuests = async (): Promise<Guest[]> => {
  const data = await getSheetData()
  const guests = data.map((row) => ({
    id: row[0] || '',
    names: row[1] || '',
    // guests: Number(row[2]) || 0,
    guest1: row[3] || '',
    guest2: row[4] || '',
  }))
  return guests || []
}

export const addRsvp = async (data: RSVPData): Promise<number> => {
  try {
    const sheets = await getSheetsApi()
    const {
      names,
      email,
      phone,
      guest1Attending,
      guest2Attending,
      shuttle,
      dietary,
      message,
    } = data
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'RSVPs!A2:I',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('en-AU', {
              timeZone: 'Australia/Sydney',
            }),
            names,
            email,
            phone,
            guest1Attending,
            guest2Attending,
            shuttle,
            dietary,
            message,
          ],
        ],
      },
    })
    return response.status
  } catch (e) {
    console.error(e)
    return 500
  }
}

export const addSongs = async (
  songs: Song[],
  guest: string,
): Promise<number> => {
  try {
    const sheets = await getSheetsApi()
    const values = songs.map((song) => [
      spotify.getSheetsLink(song, true),
      song.artists.join(', '),
      song.album,
      guest,
    ])
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "'Playlist Songs'!A2:D",
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    })
    return response.status
  } catch (e) {
    console.error(e)
    return 500
  }
}
