import { useState } from 'react'
import { useFetcher } from 'remix'
import type { Song } from '~/routes/api/song'
import Button from '~/components/Button'
import SpotifyField from '~/components/SpotifyField'
import type { Guest } from '~/routes/rsvp'
import Text from '~/components/Text'
import Input from './Input'

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
      <p className="text-center">
        <Text size="lg">{guest.names}</Text>
      </p>
      <Text as="p" size="md" className="text-center mb-6">
        Hi! 👋 We'd love to see you on our special day! Please fill out the form
        below to RSVP.
      </Text>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <label className="flex flex-col mb-4 w-full">
          <Text size="md">Phone</Text>
          <Input name="phone" autoComplete="home tel-national" required />
        </label>
        <label className="flex flex-col mb-4 w-full">
          <Text size="md">Email</Text>
          <Input name="email" type="email" required autoComplete="home email" />
        </label>
      </div>
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
