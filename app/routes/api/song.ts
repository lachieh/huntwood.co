import type { LoaderFunction } from 'remix'
import { json } from 'remix'
import { searchTracks } from '~/utils/spotify'

export interface Song {
  uri: string
  name: string
  artists: string[]
  album: string
  image: string
}

export const loader: LoaderFunction = async ({ request, context }) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')

  if (!query) return json([], 404)

  try {
    const response = await searchTracks(query)
    return json(
      response.tracks?.items.map(
        (song): Song => ({
          uri: song.uri ?? '',
          name: song.name ?? '',
          artists:
            (song.artists ?? []).map((artist) => artist.name ?? '') ?? '',
          album: song.album?.name ?? '',
          image: song.album?.images?.[0].url ?? '',
        }),
      ),
      200,
    )
  } catch (error) {
    return json({ error }, 500)
  }
}
