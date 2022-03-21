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

  return isHome ? null : (
    <nav className="sticky top-0 z-10">
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
    </nav>
  )
}

export default NavSecondary
