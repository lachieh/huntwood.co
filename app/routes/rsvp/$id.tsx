import type { ActionFunction, LoaderFunction } from 'remix'
import type { RSVPData } from '~/routes/rsvp'
import type { Guest } from '~/routes/rsvp'
import { json } from 'remix'
import { useLoaderData } from 'remix'
import Card from '~/components/Card'
import RSVPForm from '~/components/RSVPForm'
import { rsvpToken } from '~/cookies'
import { rsvpTemplate, sendMail } from '~/utils/mailService'
import { addRsvp, addSongs } from '~/utils/sheetsService'
import { addSongsToPlaylist } from '~/utils/spotify'

export const loader: LoaderFunction = async ({ request, params }) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await rsvpToken.parse(cookieHeader)) || {}
  return cookie.rsvpToken ?? null
}

export const action: ActionFunction = async ({ request, params, context }) => {
  const submission = JSON.parse(
    ((await request.formData()).get('json') as string) || '{}',
  ) as RSVPData
  console.log(typeof submission.guest1Attending, submission.guest1Attending)
  const statusCode = await addRsvp(submission)
  if (submission.songs.length) {
    try {
      await addSongs(submission.songs, submission.names)
    } catch (e) {
      console.error('Error adding songs to sheet', e)
    }
    try {
      await addSongsToPlaylist(submission.songs, context.netlifyGraphToken)
    } catch (e) {
      console.error('Error adding songs to playlist', e)
    }
  }
  try {
    const html = rsvpTemplate(submission)
    await sendMail(html, 'New RSVP from ' + submission.names)
    console.info('Email sent:' + submission.email ?? submission.names)
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
  const data = useLoaderData<Guest>()
  return (
    <div className="mt-8">
      <Card front={<RSVPForm guest={data} onSuccess={() => {}} />} />
    </div>
  )
}
