import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { oneLine } from 'common-tags'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  bg?: 'light' | 'dark'
}

const InputCheckbox = ({ bg = 'light', ...props }: Props) => {
  const lightMode = bg === 'dark'
  return (
    <input
      type="checkbox"
      className={oneLine`
        h-6 w-6
        appearance-none
        flex-shrink-0
        shadow-lg shadow-blue-light/10
        rounded border border-blue-light border-opacity-50
        outline-offset-0 outline-4
        ${lightMode ? 'outline-green-light/70' : 'outline-green-light/30'}
        focus-visible:[outline-style:solid]
        transition-[outline-width]
        text-green-light
        checked:bg-current checked:border-transparent
      `}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
      }}
      {...props}
    />
  )
}

export default InputCheckbox
