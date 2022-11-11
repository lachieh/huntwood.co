import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

export type Guest = GuestSuccess | GuestError

interface GuestSuccess {
  success: true
  id: string
  names: string[]
}

interface GuestError {
  success: false
  error: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')
  if (query === 'nope') {
    return json<Guest>({
      success: false,
      error: 'Not Found',
    })
  }
  return json<Guest>(
    {
      id: '1',
      success: true,
      names: [query ?? 'Guest A'],
    },
    200,
  )
}
