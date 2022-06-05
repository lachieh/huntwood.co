import Card from '~/components/Card'
import { Markdown } from '~/components/Markdown'

export default function Venue() {
  return (
    <div className="mt-8">
      <Card>
        <Markdown>{
          /* md */ `
# Venue

[Bradleys Head Amphitheatre](https://www.google.com/maps/place/Car+Park/@-33.8530468,151.2463833,19z/data=!4m8!1m2!3m1!2sCar+Park!3m4!1s0x6b12ad26b966c791:0xea922b6bba1d28a!8m2!3d-33.8530023!4d151.2463859)<br>
Bradleys Head Rd<br>
Mosman NSW 2088
`
        }</Markdown>
      </Card>
    </div>
  )
}
