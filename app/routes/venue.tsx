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

### Attire

Cocktail Attire

### Location

The Lookout at Glenworth Valley Weddings<br />
Cooks Road, Glenworth Valley, NSW
- [Google Maps](https://goo.gl/maps/pgt63sX9DaAY5asG8)
- [Apple Maps](https://maps.apple.com/?address=Glenworth%20Valley%20NSW%202250,%20Australia&auid=10794275364364797748&ll=-33.399253,151.204218&lsp=7618&q=Dropped%20Pin&_ext=EiYpkIZT5ubDQMAxwsBz72HiYkA5gSOBBpuIQMBB+ie4WFHuYkBQDA%3D%3D)

Continue to the end of Cooks Road and follow the signage to the parking (see below)

### Times

Arrive at 2:30pm, reception to follow, ending by 10:30pm

### Accommodation

The wedding venue is located between Gosford and Hornsby and there are plenty of AirBnBs and hotels around the area.

Glenworth Valley also has Glamping tents and cabins available. For the night of the wedding, we have booked 4 of their cabins, of which, we will be using one of them. They are 2 bedrooms each, and if you would like to stay in one of them, please let us know and we will distribute them as fairly as possible. (they’re not free)

### Wet Weather Plans

What, you’re scared of a little sky water?

If it's raining and we can’t use the lookout, we will use the Reception building on the property

### Parking

There is parking available on the property with a short walk to the venue. The walk is on gravel, so be concious of your choice of footwear

![](/assets/images/map.jpg)

`}</Markdown>
      </Card>
    </div>
  )
}
