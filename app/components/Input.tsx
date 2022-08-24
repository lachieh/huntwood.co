import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { oneLine } from 'common-tags'
import Spinner from './Spinner'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  bg?: 'light' | 'dark'
  loading?: boolean
}

const Input = ({ bg = 'light', loading = false, ...props }: Props) => {
  const lightMode = bg === 'dark'
  return (
    <div className="w-full relative mt-1">
      <input
        className={oneLine`text-copy px-3 py-2 w-full
        shadow-lg shadow-blue-light/10
        rounded border border-blue-light border-opacity-50
        outline-offset-0 outline-4
        ${lightMode ? 'outline-green-light/70' : 'outline-green-light/30'}
        focus-visible:[outline-style:solid]
        transition-[outline-width]
      `}
        {...props}
      />
      <div className="absolute top-1/2 -translate-y-1/2 right-2">
        {loading && <Spinner />}
      </div>
    </div>
  )
}

export default Input
