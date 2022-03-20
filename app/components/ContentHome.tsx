import React, { useState } from 'react'
import Text from '~/components/Text'
import Card from '~/components/Card'
import Button from '~/components/Button'

type Props = {}

const ContentHome = (props: Props) => {
  const [flipped, setFlipped] = useState(false)
  return (
    <Card
      flourish
      flipped={flipped}
      front={
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-center leading-[1em] mb-8">
            <Text>Celebrating the wedding of</Text>
            <br />
            <Text size="lg">
              Natalie Michelle Roberts
              <br />
              &amp;
              <br />
              Mitchell William Heywood
            </Text>
            <br />
            <Text>
              September 24<sup>th</sup>, 2022
            </Text>
          </h2>
          <Button onClick={() => setFlipped(true)}>
            <Text>Find your Invite</Text>
          </Button>
        </div>
      }
      back={<>hello</>}
    />
  )
}

export default ContentHome
