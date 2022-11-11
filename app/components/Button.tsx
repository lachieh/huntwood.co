import type { ButtonHTMLAttributes } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  color?:
    | 'green-dark'
    | 'green'
    | 'green-light'
    | 'tan'
    | 'tan-light'
    | 'tan-lighter'
    | 'white'
    | 'copy'
  variant?: 'solid' | 'outline'
  link?: boolean
  to?: string
}
// this is here to make sure purge-css doesn't remove the button colors
// [--button-color:blue-dark]
// [--button-color:blue-mid]
// [--button-color:blue-light]
// [--button-color:green-dark]
// [--button-color:green-mid]
// [--button-color:green-light]
// [--button-color:copy]
// outline-blue-dark/50
// outline-blue-mid/50
// outline-blue-light/50
// outline-green-dark/50
// outline-green-mid/50
// outline-green-light/50
// outline-copy/50

const Button = ({
  color = 'green-dark',
  variant = 'outline',
  children,
  link = false,
  to = '',
  ...props
}: Props) => {
  const buttonColor = {
    'green-dark': '[--button-color:#434134]',
    green: '[--button-color:#636b53]',
    'green-light': '[--button-color:#929880]',
    tan: '[--button-color:#aa8478]',
    'tan-light': '[--button-color:#ddc7b3]',
    'tan-lighter': '[--button-color:#fff5ec]',
    white: '[--button-color:rgb(255_255_255)]',
    copy: '[--button-color:#6C6E70]',
  }[color]

  const buttonStyle = {
    outline:
      'text-[color:var(--button-color)] hover:text-white rounded border border-[color:var(--button-color)] hover:bg-[color:var(--button-color)]',
    solid:
      'text-white hover:text-[color:var(--button-color)] rounded border border-[color:var(--button-color)] bg-[color:var(--button-color)] hover:bg-white',
  }[variant]
  const outline = `outline-offset outline-4 outline-${color}/50 focus-visible:[outline-style:solid] transition-[outline-width]`

  const spacing = 'inline-block text-center py-2 px-5'

  if (link) {
    return (
      <Link
        className={`${buttonColor} ${buttonStyle} ${outline} ${spacing} transition-colors`}
        {...(props as LinkProps)}
        to={to}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`${buttonColor} ${buttonStyle} ${outline} ${spacing} transition-colors`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
