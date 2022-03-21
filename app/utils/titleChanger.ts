export function changeTitle(pre: string, middle: string, post: string) {
  if (typeof document === 'undefined') return
  let step = 0
  let direction = 1
  const increment = (): void => {
    let delay = 300
    step += direction
    const midStart = Math.floor(middle.length / 2)
    const midEnd = Math.ceil(middle.length / 2)
    const chunkStart = midStart - step
    const chunkEnd = midEnd + step
    const middleChunk = middle.slice(chunkStart, chunkEnd)
    const newTitle = pre + middleChunk + post
    if (step >= midStart || step < 0) {
      direction = -direction
      delay = 3000
    }
    window.document.title = newTitle
    setTimeout(increment, delay)
  }
  increment()
}
