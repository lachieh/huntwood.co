import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  color?:
    | 'green-dark'
    | 'green-mid'
    | 'green-light'
    | 'blue-light'
    | 'blue-mid'
    | 'blue-dark'
    | 'white'
    | 'copy'
  variant?: 'solid' | 'outline'
}
// [--button-color:blue-dark]
// [--button-color:blue-mid]
// [--button-color:blue-light]
// [--button-color:green-dark]
// [--button-color:green-mid]
// [--button-color:green-light]
// [--button-color:copy]

const Button = ({
  color = 'blue-dark',
  variant = 'outline',
  children,
  ...props
}: Props) => {
  const buttonColor = {
    'green-dark': '[--button-color:rgb(6_103_56)]',
    'green-mid': '[--button-color:rgb(61_123_81)]',
    'green-light': '[--button-color:rgb(82_142_128)]',
    'blue-light': '[--button-color:rgb(39_102_116)]',
    'blue-mid': '[--button-color:rgb(40_82_100)]',
    'blue-dark': '[--button-color:rgb(38_62_84)]',
    white: '[--button-color:rgb(255_255_255)]',
    copy: '[--button-color:#6C6E70]',
  }[color]

  const buttonStyle = {
    outline:
      'text-[color:var(--button-color)] hover:text-white border border-[color:var(--button-color)] hover:bg-[color:var(--button-color)]',
    solid:
      'text-white hover:text-[color:var(--button-color)] border border-[color:var(--button-color)] bg-[color:var(--button-color)] hover:bg-white',
  }[variant]
  return (
    <button
      className={`${buttonColor} ${buttonStyle} pt-1 pb-2 px-5 transition-colors`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
