import type { Song } from '~/routes/api/song'
import SpotifyWebApi from 'spotify-web-api-node'

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://www.example.com/callback',
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
})
export async function searchTracks(query: string) {
  const response = await spotifyApi.searchTracks(query, { limit: 3 })
  return response.body
}

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
  const response = await spotifyApi.addTracksToPlaylist(
    '3w6tofcv8p4M9ryTGKukT7',
    songs.map((song) => song.uri),
  )
  console.info('added songs to playlist')
  return response.statusCode
}
