import { useState } from 'react'
import { useFetcher } from 'remix'
import type { Song } from '~/routes/api/song'
import Button from '~/components/Button'
import SpotifyField from '~/components/SpotifyField'
import type { Guest } from '~/routes/rsvp'

type Props = {
  guest: Guest
  onSuccess: () => void
}

type RSVP = {
  // name	email	phone	attending	shuttle bus	dietary	message	songs
  names: string
  email: string
  phone: string
  attending: boolean
  shuttle: boolean
  dietary: string
  message: string
  songs: Song[]
}

const RSVPForm = ({ guest }: Props) => {
  const rsvp = useFetcher<RSVP>()
  const [data, setData] = useState<RSVP>()

  const handleSubmit = () => {
    fetch(`/rsvp/${guest.id}`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(undefined)
        }
      })
  }

  const handleChange = (name: string, value: any) => {
    setData({
      ...(data as RSVP),
      [name]: value,
    })
  }

  return (
    <>
      <SpotifyField
        value={data?.songs || []}
        onChange={(songs) => handleChange('songs', songs)}
      />
      <Button
        variant="solid"
        color="green-light"
        type="submit"
        style={{ width: '100%' }}
        disabled={rsvp.state === 'submitting'}
        onClick={() => handleSubmit()}
      >
        {rsvp.state === 'submitting' ? 'Submitting...' : 'Submit'}
      </Button>
    </>
  )
}

export default RSVPForm
