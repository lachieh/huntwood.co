import React, { PropsWithChildren } from 'react'

type Props = {
  as?: keyof JSX.IntrinsicElements
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
}

const Text = ({
  as = 'span',
  size = 'md',
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
    <Tag
      className={`${
        color ? 'text-' + color : ''
      } ${textSize} ${extraClasses} leading-6`}
    >
      {children}
    </Tag>
  )
}

export default Text
