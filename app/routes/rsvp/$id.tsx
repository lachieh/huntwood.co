import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import type { RSVPData } from '~/routes/rsvp'
import type { Guest } from '~/routes/rsvp'
import { redirect, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import Card from '~/components/Card'
import { Markdown } from '~/components/Markdown'
import RSVPForm from '~/components/RSVPForm'
import { rsvpToken } from '~/cookies'
import { setUser, setPage } from '~/utils/analytics'
import { rsvpTemplate, sendMail } from '~/utils/mailService'
import { addRsvp, getGuests } from '~/utils/sheetsService'

export const loader: LoaderFunction = async ({ request, params }) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await rsvpToken.parse(cookieHeader)) || {}
  if (cookie.rsvpToken) return json(cookie.rsvpToken)
  const guests = await getGuests()
  const found = guests.find((g) => g.id === params?.id)
  cookie.rsvpToken = found
  if (!found) redirect('/#rsvp')
  return json(found, {
    headers: { 'Set-Cookie': await rsvpToken.serialize(cookie) },
    status: 200,
  })
}

export const action: ActionFunction = async ({ request, params, context }) => {
  const submission = JSON.parse(
    ((await request.formData()).get('json') as string) || '{}',
  ) as RSVPData
  const statusCode = await addRsvp(submission)
  try {
    console.info('Email from: ' + submission.names)
    const html = rsvpTemplate(submission)
    const mailResult = await sendMail(html, 'New RSVP from ' + submission.names)
    console.info('Sendgrid: ' + mailResult)
  } catch (e) {
    console.error('Failed to send email', e, submission)
  }
  if (statusCode === 200) {
    return json({ success: true })
  }
  return json(
    {
      ...submission,
      error: 'Something went wrong, please try again',
    },
    500,
  )
}

export default function RSVP() {
  const guest = useLoaderData<Guest>()
  useEffect(() => {
    setPage('RSVP Form')
    setUser(guest)
  }, [guest])
  return (
    <div className="mt-8 mb-auto w-[954px] max-w-full">
      <Card front={<RSVPForm guest={guest} onSuccess={() => {}} />} />
    </div>
  )
}
