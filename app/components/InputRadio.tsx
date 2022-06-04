import { oneLine } from 'common-tags'
import type { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLInputElement> {
  bg?: 'light' | 'dark'
}

const InputRadio = ({ bg = 'light', ...props }: Props) => {
  const lightMode = bg === 'dark'
  return (
    <input
      type="radio"
      className={oneLine`
        h-6 w-6
        appearance-none
        flex-shrink-0
        shadow-lg shadow-blue-light/10
        rounded-full border border-blue-light border-opacity-50
        outline-offset-0 outline-4
        ${lightMode ? 'outline-green-light/70' : 'outline-green-light/30'}
        focus-visible:[outline-style:solid]
        transition-[outline-width]
        text-green-light
        checked:bg-current checked:border-transparent
      `}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
      }}
      {...props}
    />
  )
}

export default InputRadio
