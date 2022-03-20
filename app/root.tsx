import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'
import tailwindStyles from './styles/tailwind.css'
import fontStyles from './styles/fonts.css'
import Nav from '~/components/Nav'
import Intro from '~/components/Intro'
import HeroImage from '~/components/HeroImage'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: fontStyles },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Mitchalie',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <aside>
          <Intro />
          <HeroImage />
        </aside>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
