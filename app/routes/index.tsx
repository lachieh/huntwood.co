import React, { useEffect, useRef, useState } from 'react'
import Text from '~/components/Text'
import Card from '~/components/Card'
import Button from '~/components/Button'
import RSVPForm from '~/components/RSVPForm'
import { Link, useLocation } from 'remix'
import { motion } from 'framer-motion'
import { pageAnimation } from '~/root'

export default function Index() {
  const [flipped, setFlipped] = useState(false)
  const location = useLocation()
  const rsvpMarker = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (location.hash.length && location.hash === '#rsvp') {
      setFlipped(true)
      rsvpMarker.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location, setFlipped])

  return (
    <div className="mt-[80vh]">
      <div ref={rsvpMarker} />
      <Card
        flourish
        flipped={flipped}
        front={
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-center leading-loose mb-4">
              <Text>Celebrating the wedding of</Text>
              <br />
              <Text size="lg">
                Natalie Michelle Roberts &amp;
                <br />
                Mitchell William Heywood
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
              <Button onClick={() => setFlipped(true)}>Click to RSVP</Button>
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
    </div>
  )
}
