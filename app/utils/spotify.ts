import type { Song } from '~/routes/api/song'

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
