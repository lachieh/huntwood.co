import type { MotionProps } from 'framer-motion'
import type { MetaFunction, LinksFunction } from 'remix'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutlet } from 'react-router'
import { useLocation } from 'remix'
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from 'remix'
import HeroImage from '~/components/HeroImage'
import Intro from '~/components/Intro'
import Nav from '~/components/Nav'
import NavSecondary from '~/components/NavSecondary'
import fontStyles from '~/styles/fonts.css'
import tailwindStyles from '~/styles/tailwind.css'

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
