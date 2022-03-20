import React, { useState } from 'react'
import Text from '~/components/Text'
import Card from '~/components/Card'
import Button from '~/components/Button'
import RSVPForm from './RSVPForm'
import { Link } from 'remix'

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
          <nav className="divide-x divide-copy text-center mb-8">
            <Link className="pt-1 pb-2 px-4 underline " to="/venue">
              <Text>Venue</Text>
            </Link>
            <Link className="pt-1 pb-2 px-4 underline " to="/registry">
              <Text>Registry</Text>
            </Link>
            <Link className="pt-1 pb-2 px-4 underline " to="/faq">
              <Text>Q + A</Text>
            </Link>
          </nav>
          <div className="mb-4">
            <Button onClick={() => setFlipped(true)}>
              <Text>Find your Invite</Text>
            </Button>
          </div>
        </div>
      }
      back={
        <>
          <button
            onClick={() => setFlipped(false)}
            className="font-sans absolute top-4 right-4"
          >
            X
          </button>
          <RSVPForm />
        </>
      }
    />
  )
}

export default ContentHome
