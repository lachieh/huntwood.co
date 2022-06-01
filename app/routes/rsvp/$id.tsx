import { useState } from 'react'
import type { ActionFunction, LoaderFunction } from 'remix'
import { json } from 'remix'
import { redirect } from 'remix'
import { useLoaderData } from 'remix'
import Card from '~/components/Card'
import RSVPForm from '~/components/RSVPForm'
import { rsvpToken } from '~/cookies'
import type { Guest } from '~/routes/rsvp'

export const loader: LoaderFunction = async ({ request, params }) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await rsvpToken.parse(cookieHeader)) || {}
  return cookie.rsvpToken ?? null
}

export const action: ActionFunction = async ({ request, params }) => {
  console.log(await request.json())
  return json({ success: true })
}

export default function RSVP() {
  const data = useLoaderData<Guest>()
  return (
    <div className="mt-8">
      <Card front={<RSVPForm guest={data} onSuccess={() => {}} />} />
    </div>
  )
}
