import { oneLine } from 'common-tags'
import type { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLTextAreaElement> {
  bg?: 'light' | 'dark'
}

const Textarea = ({ bg = 'light', ...props }: Props) => {
  const lightMode = bg === 'dark'
  return (
    <textarea
      className={oneLine`text-copy px-3 py-2 mt-1 w-full
        shadow-lg shadow-blue-light/10
        rounded border border-blue-light border-opacity-50
        outline-offset-0 outline-4
        ${lightMode ? 'outline-green-light/70' : 'outline-green-light/30'}
        focus-visible:[outline-style:solid]
        transition-[outline-width]
      `}
      {...props}
    ></textarea>
  )
}

export default Textarea
