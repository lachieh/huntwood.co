export function trigger(event: string) {
  if (typeof window === 'undefined') return
  try {
    // TODO: Replace with GA or whatever
    // FullStory.event(event, {})
  } catch (e) {
    console.error(e)
  }
}

export function setPage(pageName: string) {
  if (typeof window === 'undefined') return
  try {
    // TODO: Replace with GA or whatever
    // FullStory.setVars('page', {
    //   pageName,
    // })
  } catch (e) {
    console.error(e)
  }
}

export function setUser(user: { id: string; name: string }) {
  if (typeof window === 'undefined') return
  if (!user) return
  try {
    // TODO: Replace with GA or whatever
    // FullStory.identify(user.id, {
    //   displayName: user.name,
    // })
  } catch (e) {
    console.error(e)
  }
}
