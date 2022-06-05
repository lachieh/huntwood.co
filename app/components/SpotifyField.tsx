import type { Song } from '~/routes/api/song'
import { useRef, useState } from 'react'
import { useFetcher } from 'remix'
import Input from '~/components/Input'
import Text from '~/components/Text'

type Props = {
  onChange: (songs: Song[]) => void
  value?: Song[]
}

const responseIsValid = (data: Song[] | { error: string }): data is Song[] => {
  return !(data as { error: string }).error
}

const SpotifyField = ({ onChange, value = [] }: Props) => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState('')
  const ref = useRef<number>()
  const formRef = useRef<HTMLFormElement>(null)
  const songs = useFetcher<Song[] | { error: string }>()

  const handleSearch = (form: HTMLFormElement | null) => {
    if (ref.current) clearTimeout(ref.current)
    const input = (form?.elements?.namedItem('q') as HTMLInputElement) || null
    setCurrentSearchTerm(input.value)
    ref.current = setTimeout(
      () => input.value && songs.submit(form),
      500,
    ) as unknown as number
  }

  const getNewSongs = (song: Song) => {
    if (value.includes(song)) {
      return value.filter((s) => s.uri !== song.uri)
    }
    return [...value, song]
  }

  const toggleSelection = (song: Song) => {
    const newSongs = getNewSongs(song)
    onChange(newSongs)
  }

  const SongCard = ({
    song,
    selected = false,
  }: {
    song: Song
    selected: boolean
  }) => {
    return (
      <div
        key={song.uri}
        className={`flex flex-col mb-4 w-full p-2 ${
          selected ? 'bg-green-light' : ''
        }`}
        onClick={() => toggleSelection(song)}
      >
        <div className="flex">
          <img
            src={song?.image}
            className="w-16 h-16 mr-2"
            alt={`Album art for ${song?.name} by ${song?.artists?.join(', ')}`}
          />
          <div className="flex flex-col justify-center leading-tight">
            <Text size="sm">{song?.name}</Text>
            <Text size="sm">{song?.artists?.join(', ')}</Text>
            <Text size="sm">{song?.album}</Text>
          </div>
        </div>
      </div>
    )
  }

  return (
    <songs.Form action="/api/song" method="get" ref={formRef}>
      <div className="flex flex-col">
        <label className="flex flex-col mb-4 w-full">
          <Text>Search Spotify</Text>
          <Input name="q" onChange={(e) => handleSearch(formRef.current)} />
        </label>
      </div>
      {songs.data &&
        (responseIsValid(songs.data) ? (
          !songs.data.length ? (
            currentSearchTerm ? (
              'No songs found'
            ) : (
              'Please enter a song title'
            )
          ) : (
            <div className="flex flex-col">
              {songs.data
                .slice(0, 3)
                .map((song) =>
                  !value.includes(song) ? (
                    <SongCard key={song.uri} song={song} selected={false} />
                  ) : null,
                )}
            </div>
          )
        ) : (
          'Something went wrong, try a different search'
        ))}
      {value?.length > 0 && (
        <div className="flex flex-col">
          <Text>Selected Songs</Text>
          {value.map((song) => (
            <SongCard key={song.uri} song={song} selected={true} />
          ))}
        </div>
      )}
    </songs.Form>
  )
}

export default SpotifyField
