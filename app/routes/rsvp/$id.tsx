import { LoaderFunction, useLoaderData } from 'remix'
import { Guest } from '~/routes/rsvp'
import Card from '~/components/Card'
import SpotifyField from '~/components/SpotifyField'
import { Song } from '~/routes/api/song'
import { rsvpToken } from '~/cookies'

export const loader: LoaderFunction = async ({ request, params }) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await rsvpToken.parse(cookieHeader)) || {}
  return cookie.rsvpToken ?? null
}

export default function RSVP() {
  const data = useLoaderData<Guest>()
  return (
    <div>
      {data?.names}
      <Card
        front={
          <SpotifyField
            onChange={function (songs: Song[]): void {
              throw new Error('Function not implemented.')
            }}
          />
        }
      />
    </div>
  )
}
