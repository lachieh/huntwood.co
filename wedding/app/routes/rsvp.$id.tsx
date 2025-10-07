import type {
  ActionFunction,
  LoaderFunction,
  LoaderFunctionArgs,
} from '@remix-run/node'
import type { Invite, RSVPData } from '~/routes/rsvp'
import { redirect, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import Card from '~/components/Card'
import RSVPForm from '~/components/RSVPForm'
import { parseRSVPCookie, rsvpToken } from '~/cookies'
import { setUser, setPage } from '~/utils/analytics'
import { rsvpTemplate, sendMail } from '~/.server/mail'
import { addRsvp, getGuests } from '~/utils/sheetsService'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const cookie = await parseRSVPCookie(request.headers.get('Cookie'))
  if (cookie.rsvpToken) return json(cookie.rsvpToken)

  const guests = await getGuests()
  const found = guests.find((g) => g && g.id === params?.id)
  if (!found) return redirect('/#rsvp')

  cookie.rsvpToken = found
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
  const invite = useLoaderData<typeof loader>()

  useEffect(() => {
    setPage('RSVP Form')
    if (!invite) return
    setUser({ id: invite.id, name: invite.names })
  }, [invite])

  return (
    <div className="mt-8 mb-auto w-[954px] max-w-full">
      <Card front={<RSVPForm invite={invite} onSuccess={() => {}} />} />
    </div>
  )
}
