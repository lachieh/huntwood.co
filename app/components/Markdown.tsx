import { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface Props {
  children: string
}

/**
 * Markdown renderer. This is a wrapper around the ReactMarkdown component.
 * @param strings the strings to be formatted
 * @param values the values to be inserted into the strings
 * @returns A ReactMarkdown component
 */
export const Markdown = ({ children }: Props): ReactElement => {
  return (
    <div className="prose max-w-4xl mx-auto prose-strong:font-medium">
      {/* @ts-expect-error */}
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
