import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import React from 'react'
import { useMatch } from 'react-router'
import { Link, NavLink, NavLinkProps } from 'remix'
const ActiveLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        (isActive && `underline underline-offset-2`) || ''
      }
    >
      {children}
    </NavLink>
  )
}

type Props = {}

const NavSecondary = (props: Props) => {
  const isHome = useMatch({ path: '/', end: true })

  const animation: MotionProps = {
    transition: { duration: 0.5, ease: 'easeInOut' },
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {isHome ? null : (
        <motion.nav {...animation} className="sticky top-0 z-10">
          <ul className="flex flex-row items-center justify-center h-9 relative bg-blue-dark text-white divide-x pt-2 pb-2">
            <li className="px-2 sm:px-4 pb-0.5 leading-none">
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li className="px-2 sm:px-4 pb-0.5 leading-none">
              <ActiveLink to="/venue">Venue</ActiveLink>
            </li>
            <li className="px-2 sm:px-4 pb-0.5 leading-none">
              <ActiveLink to="/registry">Registry</ActiveLink>
            </li>
            <li className="px-2 sm:px-4 pb-0.5 leading-none">
              <ActiveLink to="/faq">Q + A</ActiveLink>
            </li>
            <li className="px-2 sm:px-4 pb-0.5 leading-none">
              <ActiveLink to="/#rsvp">RSVP</ActiveLink>
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default NavSecondary
