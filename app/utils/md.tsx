import { stripIndent } from 'common-tags'

/**
 * Markdown renderer. This is a wrapper around the ReactMarkdown component.
 * @param strings the strings to be formatted
 * @param values the values to be inserted into the strings
 * @returns A ReactMarkdown component
 */
function md(strings: TemplateStringsArray, ...values: string[]): string {
  return stripIndent(
    strings.reduce((acc, str, i) => acc + str + (values[i] || ''), ''),
  )
}

export default md
