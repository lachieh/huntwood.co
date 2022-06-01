import type { LoaderFunction } from 'remix'
import { json } from 'remix'
import * as netlifyGraph from '../../../netlify/functions/netlifyGraph'

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

  const { errors, data } = await netlifyGraph.fetchFindTracks(
    { query },
    { accessToken: context.netlifyGraphToken },
  )

  if (errors) {
    return json({ error: errors }, 500)
  }

  return json(
    data.spotify.search.tracks.map(
      (song): Song => ({
        uri: song.uri,
        name: song.name,
        artists: song.artists.map((artist) => artist.name),
        album: song.album.name,
        image: song.album.images[0].url,
      }),
    ),
    200,
  )
}
