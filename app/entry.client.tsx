import * as FullStory from '@fullstory/browser'
import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { changeTitle } from './utils/titleChanger'

try {
  FullStory.init({
    orgId: 'o-1B4G99-na1',
    devMode: process.env.NODE_ENV === 'development' ? true : false,
  })
} catch (e) {
  console.error('Failed to init FullStory', e)
}

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}

changeTitle('Hunt', 'er & Hey', 'wood')
