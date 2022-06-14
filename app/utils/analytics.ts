import type { Guest } from '~/routes/rsvp'
import * as FullStory from '@fullstory/browser'

export function trigger(event: string) {
  if (typeof window === 'undefined') return
  try {
    FullStory.event(event, {})
  } catch (e) {
    console.error(e)
  }
}

export function setPage(pageName: string) {
  if (typeof window === 'undefined') return
  try {
    FullStory.setVars('page', {
      pageName,
    })
  } catch (e) {
    console.error(e)
  }
}

export function setUser(guest: Guest) {
  if (typeof window === 'undefined') return
  if (!guest) return
  try {
    FullStory.identify(guest.id, {
      displayName: guest.names,
    })
  } catch (e) {
    console.error(e)
  }
}
