import { createCookie } from '@remix-run/node'

export const rsvpToken = createCookie('rsvpToken', {
  maxAge: 220_752_000, // one week
})
