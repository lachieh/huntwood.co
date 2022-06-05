import type { HTMLProps } from 'react'
import { oneLine } from 'common-tags'

interface Props extends HTMLProps<HTMLInputElement> {
  bg?: 'light' | 'dark'
}

const Input = ({ bg = 'light', ...props }: Props) => {
  const lightMode = bg === 'dark'
  return (
    <input
      className={oneLine`text-copy px-3 py-2 mt-1 w-full
        shadow-lg shadow-blue-light/10
        rounded border border-blue-light border-opacity-50
        outline-offset-0 outline-4
        ${lightMode ? 'outline-green-light/70' : 'outline-green-light/30'}
        focus-visible:[outline-style:solid]
        transition-[outline-width]
      `}
      {...props}
    />
  )
}

export default Input
