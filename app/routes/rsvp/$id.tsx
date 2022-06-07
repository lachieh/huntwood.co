import type { RSVPData } from '../rsvp'
import type { ActionFunction, LoaderFunction } from 'remix'
import type { Guest } from '~/routes/rsvp'
import { json } from 'remix'
import { useLoaderData } from 'remix'
import Card from '~/components/Card'
import RSVPForm from '~/components/RSVPForm'
import { rsvpToken } from '~/cookies'
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
  const statusCode = await addRsvp(submission)
  await addSongs(submission.songs, submission.names)
  await addSongsToPlaylist(submission.songs, context.netlifyGraphToken)
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
