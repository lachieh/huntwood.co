import { useEffect } from 'react'
import Card from '~/components/Card'
import { Markdown } from '~/components/Markdown'
import { setPage } from '~/utils/analytics'

export default function Venue() {
  useEffect(() => {
    setPage('Venue')
  }, [])

  return (
    <div className="mt-8 mb-auto w-[954px] max-w-full">
      <Card>
        <Markdown>{`
# Venue

### Location

The Lookout at Glenworth Valley Weddings<br />
Cooks Road, Glenworth Valley, NSW
- [Google Maps](https://goo.gl/maps/pgt63sX9DaAY5asG8)
- [Apple Maps](https://maps.apple.com/?address=Glenworth%20Valley%20NSW%202250,%20Australia&auid=10794275364364797748&ll=-33.399253,151.204218&lsp=7618&q=Dropped%20Pin&_ext=EiYpkIZT5ubDQMAxwsBz72HiYkA5gSOBBpuIQMBB+ie4WFHuYkBQDA%3D%3D)

Continue to the end of Cooks Road and follow the signage to the parking (see below)

### Times

Arrive at 2:30pm, reception to follow, ending by 10:30pm

### Accommodation

The wedding venue is located between Gosford and Hornsby and there are plenty of Air BnBs and hotels around the area.

Glenworth Valley also has Glamping options and camping space available on site.

If you'd like to glamp follow the link below. When booking, advise that you're attending a wedding to ensure all our wedding guests are set up close to the venue and together. 

[Simple Pleasures Camping @ Glenworth Valley](https://simplepleasurescamping.co/glenworth-valley-glamping)

### Wet Weather Plans

If it's raining and we can’t use the Lookout, we will use the Reception building on the property. If there is a light spritz of rain, clear umbrellas will be provided, however they are limited and will have to be shared.

### Parking

There is parking available on the property with a short walk to the venue. The walk is on gravel, so be concious of your choice of footwear

![](/assets/images/map.jpg)

`}</Markdown>
      </Card>
    </div>
  )
}
