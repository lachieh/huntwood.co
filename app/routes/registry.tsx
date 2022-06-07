import Card from '~/components/Card'
import { Markdown } from '~/components/Markdown'

export default function Registry() {
  return (
    <div className="mt-8">
      <Card>
        <Markdown>{
          /* md */ `
# Registry
Your presence on our day is more than enough of a gift. However, we have set up a registry if you would like to gift us something extra. 

[David Jones Registry](https://www.davidjones.com/default.aspx?Z=giftregistry&action=view&id=105AC060-D92D-415A-BA31-C9A8FD1C1D42&order=0)
`
        }</Markdown>
      </Card>
    </div>
  )
}
