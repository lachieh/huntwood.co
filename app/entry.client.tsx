import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'
import { changeTitle } from './utils/titleChanger'

hydrate(<RemixBrowser />, document)

changeTitle('Mitch', 'ell & Nat', 'alie')
