import { LoaderFunction, redirect, useLoaderData } from 'remix'
import { getGuests } from '../../utils/sheetsService'
import { Guest } from '../../routes/rsvp'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params
  const guests = await getGuests()
  const guest = guests.find((g) => g.id === id)
  if (!guest) return redirect('/')
  return guest
}

export default function RSVP() {
  const data = useLoaderData<Guest>()
  return <div>{data?.names}</div>
}
