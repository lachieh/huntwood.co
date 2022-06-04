import { oneLine } from 'common-tags'
import type { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLInputElement> {
  bg?: 'light' | 'dark'
}

const Input = ({ bg = 'light', ...props }: Props) => {
  const lightMode = bg === 'dark'
  return (
    <input
      id="comments"
      name="comments"
      type="checkbox"
      className={oneLine`
        h-4 w-4
        outline-offset outline-4
        ${lightMode ? 'outline-green-light/70' : 'outline-green-light/30'}
        focus-visible:[outline-style:solid]
        text-green-mid
        border-blue-light border-opacity-50 rounded
      `}
      {...props}
    />
  )
}

export default Input
