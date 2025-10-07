import { createCookie } from '@remix-run/node'
import { Invite } from '~/routes/rsvp'

export const rsvpToken = createCookie('rsvpToken', {
  maxAge: 220_752_000, // one week
})

export type RSVPCookieData = {
  rsvpToken: Invite
}

export async function parseRSVPCookie(cookieHeader: string | null) {
  return ((await rsvpToken.parse(cookieHeader)) as RSVPCookieData) || {}
}
