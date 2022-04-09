import React from 'react'
import { Link } from 'remix'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className="z-20 flex flex-col items-center justify-center h-16 relative bg-white">
      <h1 className="text-[32px] leading-none">
        <span className="block absolute top-0 left-0 h-full w-1/2 text-green-mid overflow-hidden">
          <span className="absolute pb-[0.1em] top-1/2 -translate-y-1/2 right-[-3.5em] whitespace-nowrap">
            <Link to="/">Mitchell &amp; Natalie</Link>
          </span>
        </span>
        <span className="block absolute top-0 left-1/2 h-full w-1/2 text-blue-mid overflow-hidden">
          <span className="absolute pb-[0.1em] top-1/2 -translate-y-1/2 left-[-3.81em] whitespace-nowrap">
            <Link to="/">Mitchell &amp; Natalie</Link>
          </span>
        </span>
      </h1>
    </div>
  )
}

export default Nav
