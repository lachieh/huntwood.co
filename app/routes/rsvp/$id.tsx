import { LoaderFunction, redirect, useLoaderData } from 'remix'
import { getGuests } from '~/utils/sheetsService'
import { Guest } from '~/routes/rsvp'
import Card from '~/components/Card'
import SpotifyField from '~/components/SpotifyField'
import { Song } from '~/routes/api/song'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params
  const guests = await getGuests()
  const guest = guests.find((g) => g.id === id)
  if (!guest) return redirect('/')
  return guest
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
