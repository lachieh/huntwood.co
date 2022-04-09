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
import NavSecondary from './components/NavSecondary'
import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import { useLocation } from 'remix'
import { useOutlet } from 'react-router'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: fontStyles },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Mitchalie',
  viewport: 'width=device-width,initial-scale=1',
})

export const pageAnimation: MotionProps = {
  transition: { duration: 0.5, ease: 'easeInOut' },
  initial: { x: '-100%', rotate: '-10deg' },
  animate: { x: '0', rotate: '0deg' },
  exit: { x: '100%', rotate: '10deg' },
}

export default function App() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        <Nav />
        <aside>
          <Intro />
          <HeroImage />
        </aside>
        <NavSecondary />
        <AnimatePresence exitBeforeEnter>
          <motion.div key={location.pathname} {...pageAnimation}>
            {outlet}
          </motion.div>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
