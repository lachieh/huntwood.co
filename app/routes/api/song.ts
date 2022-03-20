import { json, LoaderFunction } from 'remix'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')
  return json(
    [
      {
        id: 1,
        title: query,
        artist: 'Artist 1',
        album: 'Album 1',
        year: '2000',
        cover: 'https://picsum.photos/200/300/?random',
      },
    ],
    200,
  )
}
