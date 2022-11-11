import { useEffect } from 'react'
import Card from '~/components/Card'
import { Markdown } from '~/components/Markdown'
import { setPage } from '~/utils/analytics'

export default function Venue() {
  useEffect(() => {
    setPage('Venue')
  }, [])

  return (
    <div className="mt-8 mb-auto">
      <Card>
        <Markdown>{
          /* md */ `
# Venue

### Wedding
[Bradleys Head Amphitheatre](https://www.google.com/maps/place/Car+Park/@-33.8530468,151.2463833,19z/data=!4m8!1m2!3m1!2sCar+Park!3m4!1s0x6b12ad26b966c791:0xea922b6bba1d28a!8m2!3d-33.8530023!4d151.2463859)<br>
Bradleys Head Rd<br>
Mosman NSW 2088

### Reception
[The Heywood House](https://www.google.com/maps/place/30+Campbell+Ave,+Normanhurst+NSW+2076,+Australia/@-33.7288812,151.0957667,16.55z/data=!4m13!1m7!3m6!1s0x6b12a7a3f824bbd9:0x5017d681632c380!2sNormanhurst+NSW+2076,+Australia!3b1!8m2!3d-33.7244662!4d151.0970389!3m4!1s0x6b12a707d840442f:0xe24337743ba32688!8m2!3d-33.7262862!4d151.0916731)<br>
30 Campbell Ave<br>
Normanhurst NSW 2076

## Backup Wet Weather Venue
The ceremony will be moved to Greenwich Sailing Club in the event of wet weather. We will contact you via text as early as possible if we anticipate a venue change.

## Times
The ceremony will start at Bradley’s Head Amphitheatre in Mosman at 3:00 pm and the reception will follow from 5:30 - 10:00 pm at 30 Campbell Avenue, Normanhurst.

## Parking
Parking is extremely limited at Bradley’s Head and the amphitheatre is a fair walk away from the nearest main road. There is some limited parking nearby at Athol Hall and the Rifle wall, however, this will entail some walking (we recommend Google mapping the trip to get an idea of the distance and terrain). 

To help with this, we will have a shuttle running from the Taronga Zoo car park down to Bradley’s Head Amphitheatre. Further details will be provided closer to the date. 

We have reserved Bradley’s Head from 2 pm, so feel free to arrive early to minimise stress on the day.

## Attire
Cocktail attire. No stilettos (protecting wood floors).

`
        }</Markdown>
      </Card>
    </div>
  )
}
