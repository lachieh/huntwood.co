import * as FullStory from '@fullstory/browser'
import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'
import { changeTitle } from './utils/titleChanger'

FullStory.init({
  orgId: 'o-1B4G99-na1',
  devMode: process.env.NODE_ENV === 'development' ? true : false,
})

hydrate(<RemixBrowser />, document)

changeTitle('Mitch', 'ell & Nat', 'alie')
