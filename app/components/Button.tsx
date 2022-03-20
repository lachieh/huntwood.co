import React, { HTMLAttributes, PropsWithChildren } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  as?: keyof JSX.IntrinsicElements
  size?: 'sm' | 'md' | 'lg'
  color?:
    | 'green-dark'
    | 'green-mid'
    | 'green-light'
    | 'blue-light'
    | 'blue-mid'
    | 'blue-dark'
    | 'copy'
}
// [--button-color:blue-dark]
// [--button-color:blue-mid]
// [--button-color:blue-light]
// [--button-color:green-dark]
// [--button-color:green-mid]
// [--button-color:green-light]
// [--button-color:copy]

const Button = ({
  as = 'button',
  color = 'blue-dark',
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const buttonColor = {
    'green-dark': '[--button-color:rgb(6_103_56)]',
    'green-mid': '[--button-color:rgb(61_123_81)]',
    'green-light': '[--button-color:rgb(82_142_128)]',
    'blue-light': '[--button-color:rgb(39_102_116)]',
    'blue-mid': '[--button-color:rgb(40_82_100)]',
    'blue-dark': '[--button-color:rgb(38_62_84)]',
    copy: '[--button-color:#6C6E70]',
  }[color]

  return (
    <button
      className={`${buttonColor} text-[color:var(--button-color)] border border-[color:var(--button-color)] pt-1 pb-2 px-5 hover:bg-[color:var(--button-color)] hover:text-white transition-colors`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
