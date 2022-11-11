import type { MetaFunction, LinksFunction } from '@remix-run/node'
import type { MotionProps } from 'framer-motion'
import { useLocation } from '@remix-run/react'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutlet } from 'react-router'
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
  title: 'Kate & Fletcher',
  viewport: 'width=device-width,initial-scale=1',
})

export const pageAnimation: MotionProps = {
  transition: { duration: 0.5, ease: 'easeInOut' },
  initial: { x: '-100%', rotate: '-10deg', opacity: 0 },
  animate: { x: '0', rotate: '0deg', opacity: 1 },
  exit: { x: '100%', rotate: '10deg', opacity: 0 },
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
      <body className="overflow-x-hidden relative flex flex-col h-screen w-full bg-tan-light">
        <div className="">
          <Nav />
          <aside>
            <Intro />
          </aside>
          <NavSecondary />
        </div>
        <div className="grow relative w-full flex flex-col justify-center items-center bg-white">
          <img
            className="w-full fixed top-0 left-0"
            src="/assets/images/flowers-left.png"
            alt=""
          />
          <img
            className="w-full fixed bottom-0 right-0"
            src="/assets/images/flowers-right.png"
            alt=""
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              {...pageAnimation}
              className="h-full max-w-full flex flex-col items-center justify-center"
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
