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
Cocktail Attire.

Ladies, wear your comfy heels as there is a short gravelled walk from the ceremony carpark to 'The Lookout.'

Plus, we want you pulling out all your best dance moves on the D-Floor!!

### How do I get there? 

Drive, Uber, Taxi or get yourself a designated driver. If there is enough interest, we will organise a bus to and from Gosford Station, which is a great central meeting point.

### Is the wedding indoors or outdoors? 

Outdoor ceremony (weather permitted), indoor reception.

### Are kids invited?

No, this is a time to get loose and litty with the adults!

### Is there a gift registry?

No. There will be a wishing well provided on the day if you would like to contribute to the newly-weds.
`
        }</Markdown>
      </Card>
    </div>
  )
}
