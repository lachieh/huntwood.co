import { Link } from '@remix-run/react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className="z-20 flex flex-col items-center justify-center h-16 relative bg-green-darker">
      <h1 className="text-[32px] leading-none flex justify-center items-center">
        <Link to="/">
          <img
            src="/assets/images/logo-wide.png"
            className="h-10 [filter:contrast(0)_brightness(3)]"
            alt="Kate & Fletcher"
          />
        </Link>
      </h1>
    </div>
  )
}

export default Nav
