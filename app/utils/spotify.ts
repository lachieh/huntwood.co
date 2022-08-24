import type { Song } from '~/routes/api/song'
import NetlifyGraph from 'netlify/functions/netlifyGraph'

export function getSheetsLink(song: Song, nameOnly = false): string {
  const { name, artists, uri } = song

  const contents = (
    nameOnly ? name : `${name} - ${artists.join(', ')}`
  ).replace(/"/g, 'CHAR(34)')
  return `=HYPERLINK("${uriToUrl(uri)}","${contents}")`
}

export function uriToUrl(uri: string): string {
  return uri.replace(/^spotify:(.*?):(.*?)/, 'https://open.spotify.com/$1/$2')
}

export async function addSongsToPlaylist(
  songs: Song[],
  accessToken: string,
): Promise<number> {
  if (!songs.length) return 200
  const response = await NetlifyGraph.executeAddToPlaylist(
    { uris: songs.map((song) => song.uri) },
    { accessToken },
  )
  console.info('added songs to playlist')
  return response.data.spotify.makeRestCall.post.response.statusCode
}
