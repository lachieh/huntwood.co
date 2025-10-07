import type { PropsWithChildren } from 'react'

type Props = {
  as?: keyof JSX.IntrinsicElements
  size?: 'sm' | 'md' | 'lg'
  color?:
    | 'text-green-dark'
    | 'text-green-mid'
    | 'text-green-light'
    | 'text-blue-light'
    | 'text-blue-mid'
    | 'text-blue-dark'
    | 'text-white'
    | 'text-copy'
  className?: string
}

const Text = ({
  as = 'span',
  size = 'md',
  className = '',
  color,
  children,
}: PropsWithChildren<Props>) => {
  const Tag = as
  const textSize = {
    sm: 'text-xs md:text-md',
    md: 'text-sm md:text-lg',
    lg: 'text-md md:text-2xl',
  }[size]

  const extraClasses = size === 'lg' ? 'uppercase tracking-widest' : ''

  return (
    <Tag className={`${color ?? ''} ${textSize} ${extraClasses} ${className}`}>
      {children}
    </Tag>
  )
}

export default Text
