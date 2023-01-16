import type { LoaderFunction } from '@remix-run/node'
import { useLocation } from '@remix-run/react'
import { oneLine } from 'common-tags'
import React, { useEffect, useRef, useState } from 'react'
import Button from '~/components/Button'
import Card from '~/components/Card'
import RSVPLookup from '~/components/RSVPLookup'
import { rsvpToken } from '~/cookies'
import close from '~/images/icon-close.svg'
import { setPage } from '~/utils/analytics'

export const loader: LoaderFunction = async ({ request, params }) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await rsvpToken.parse(cookieHeader)) || {}
  return cookie.rsvpToken ?? null
}

export default function Index() {
  const [flipped, setFlipped] = useState(false)
  const location = useLocation()
  const rsvpMarker = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPage('Home')
  }, [])

  useEffect(() => {
    if (location.hash.length && location.hash === '#rsvp') {
      setFlipped(true)
      rsvpMarker.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location, setFlipped])

  return (
    <>
      <div ref={rsvpMarker} />
      <Card
        flipped={flipped}
        color="bg-tan-light text-tan-light"
        front={
          <div className="flex flex-col justify-center items-center h-full">
            <div className="max-w-md mx-auto px-[10%] py-16">
              <img
                src="/assets/images/logo-stack.png"
                alt=""
                className="w-full "
              />
              <div className="mt-8 -mb-8 text-center uppercase font-semibold">
                April 15<sup className="text-[0.6em] font-bold">th</sup>, 2023
              </div>
            </div>
            <div className="mb-8">
              <Button onClick={() => setFlipped(true)}>RSVP</Button>
            </div>
          </div>
        }
        back={
          <>
            <div className="relative">
              <button
                onClick={() => setFlipped(false)}
                className={oneLine`
                  absolute top-0 right-0 overflow-hidden
                  opacity-30 hover:opacity-60 rounded-full
                  outline-green-light outline-offset outline-4 focus-visible:[outline-style:solid] transition-[outline-width]
                `}
              >
                <img src={close} alt="close" className="w-6 h-6" />
              </button>
              <RSVPLookup />
            </div>
          </>
        }
      />
    </>
  )
}
