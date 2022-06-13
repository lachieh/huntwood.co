import type { Guest } from '~/routes/rsvp'
import * as FullStory from '@fullstory/browser'

export function trigger(event: string) {
  if (typeof window === 'undefined') return
  FullStory.event(event, {})
}

export function setPage(pageName: string) {
  if (typeof window === 'undefined') return
  FullStory.setVars('page', {
    pageName,
  })
}

export function setUser(guest: Guest) {
  if (typeof window === 'undefined') return
  if (!guest) return
  FullStory.identify(guest.id, {
    displayName: guest.names,
  })
}
