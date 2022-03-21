import { LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = ({ request }) => {
  return {}
}

export default function RSVP() {
  const data = useLoaderData()
  return <div>RSVP</div>
}
