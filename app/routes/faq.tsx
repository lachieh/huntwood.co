import { useEffect } from 'react'
import Card from '~/components/Card'
import { Markdown } from '~/components/Markdown'
import { setPage } from '~/utils/analytics'

export default function FAQ() {
  useEffect(() => {
    setPage('FAQs')
  }, [])

  return (
    <div className="mt-8 mb-auto w-[954px] max-w-full">
      <Card>
        <Markdown>{
          /* md */ `
# Q + A

### What should I wear?
Cocktail dresses and suits

### How do I get there? 

Drive or uber.

If there is enough interest we will organise a bus to and from GOSSY STAYSH

### Is the wedding indoors or outdoors? 

Ceremony outdoors, reception indoors

### Are kids invited?

No, this is a time to get loose with the adults.

### Where do the gifts on the registry go? 

dont gimme gifts, gimme money - Cards on the day or PayID 0402028518
`
        }</Markdown>
      </Card>
    </div>
  )
}
