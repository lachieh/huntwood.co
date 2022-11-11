import { useEffect } from 'react'
import Card from '~/components/Card'
import { Markdown } from '~/components/Markdown'
import { setPage } from '~/utils/analytics'

export default function FAQ() {
  useEffect(() => {
    setPage('FAQs')
  }, [])

  return (
    <div className="mt-8 mb-auto">
      <Card>
        <Markdown>{
          /* md */ `
# Q + A
### What should I wear?
Cocktail attire, no stiletto shoes.

### How do i get there? 
Parking is very limited at Bradley’s Head Amphitheatre. We recommend carpooling or ridesharing (where possible) and parking at Taronga Zoo (or nearby). We will have a shuttle run trips between Taronga Zoo and Bradley’s Head Amphitheatre. More details will be provided closer to the date. Please allow ample time for travel.

### Is the wedding indoors or outdoors? 

The ceremony will be at Bradley’s Head Amphitheatre which is an outdoor venue.

The reception will be at Julie and Tony Heywood’s home where we will have a hybrid indoor-outdoor setting. Please bring a jacket or overcoat to make sure we can all stay warm. 

### Are kids invited?
Although we love your little nuggets, we request that you keep them safe at home due to limited space. (Newborns welcome) 

### Where do the gifts on the registry go? 

We have set up the gift registry to deliver everything to us after wedding is done and dusted. (Saves you lugging gifts around during this lovely day).


`
        }</Markdown>
      </Card>
    </div>
  )
}
