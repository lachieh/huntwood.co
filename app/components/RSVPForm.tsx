import { useRef, useState } from 'react'
import { useFetcher } from 'remix'
import type { Song } from '~/routes/api/song'
import Button from '~/components/Button'
import SpotifyField from '~/components/SpotifyField'
import type { Guest } from '~/routes/rsvp'
import Text from '~/components/Text'
import Input from './Input'
import InputCheckbox from './InputCheckbox'
import Textarea from './Textarea'
import InputRadio from './InputRadio'

type Props = {
  guest: Guest
  onSuccess: () => void
}

type RSVP = {
  // name	email	phone	attending	shuttle bus	dietary	message	songs
  names: string
  email: string
  phone: string
  attending: number
  shuttle: boolean
  dietary: string
  message: string
  songs: Song[]
}

const RSVPForm = ({ guest }: Props) => {
  const rsvp = useFetcher<RSVP>()
  const [songs, setSongs] = useState<Song[]>()
  const many = guest.guests > 1
  const pronoun = many ? 'We' : 'I'
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = () => {
    if (!formRef.current) return
    const formData = new FormData(formRef.current)
    const submission: RSVP = {
      names: guest.names,
      email: (formData.get('email') as string) || '',
      phone: (formData.get('phone') as string) || '',
      attending: Number(formData.get('guests')) || 0,
      shuttle: (formData.get('shuttle') as string) === 'true',
      dietary: (formData.get('dietary') as string) || '',
      message: (formData.get('message') as string) || '',
      songs: songs || [],
    }
    fetch(`/rsvp/${guest.id}`, {
      method: 'POST',
      body: JSON.stringify(submission),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSongs([])
          formRef.current?.reset()
        }
      })
  }

  return (
    <>
      <form ref={formRef}>
        <p className="text-center">
          <Text size="lg">{guest.names}</Text>
        </p>
        <Text as="p" size="md" className="text-center mb-6">
          Hi! 👋 We'd love to see you on our special day! Please fill out the
          form below to RSVP.
        </Text>
        {many ? (
          <div>
            <Text as="p" size="md">
              How many guests from your party are coming?
            </Text>
            {Array(guest.guests)
              .fill(0)
              .map((_, i) => (
                <label
                  key={i}
                  className="inline-flex flex-row mb-6 items-center"
                >
                  <InputRadio name="guests" value={i + 1} />
                  <Text size="md" className="ml-2 mr-4">
                    {i + 1}
                  </Text>
                </label>
              ))}
          </div>
        ) : (
          <label className="inline-flex flex-row mb-6 items-center">
            <InputCheckbox name="guests" value="1" />
            <Text size="md" className="ml-2">
              I will be attending
            </Text>
          </label>
        )}
        <label className="inline-flex flex-row mb-6 items-center">
          <InputCheckbox name="shuttle" value="true" />
          <Text size="md" className="ml-2">
            {pronoun} will require use of the shuttle bus from the parking lot
            to the venue
          </Text>
        </label>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <label className="flex flex-col mb-6 w-full">
            <Text size="md">Contact Phone</Text>
            <Input name="phone" autoComplete="home tel-national" required />
          </label>
          <label className="flex flex-col mb-6 w-full">
            <Text size="md">Email Address</Text>
            <Input
              name="email"
              type="email"
              required
              autoComplete="home email"
            />
          </label>
        </div>
        <label className="flex flex-col mb-6 w-full">
          <Text size="md">
            {many ? 'Does anyone' : 'Do you'} have any dietary restrictions?{' '}
            {many && 'Please list per guest.'}
          </Text>
          <Textarea name="dietary" />
        </label>
        <label className="flex flex-col mb-6 w-full">
          <Text size="md">
            Would {many ? 'anyone' : 'you'} like to tell us anything else?
            (optional)
          </Text>
          <Textarea name="message" />
        </label>
      </form>
      <Text as="p" size="md" className="mb-6">
        One last thing ☝️. If there is a song you would like to hear played on
        the night, please search for it below. Mitch will curate the list and
        critique your selections for inclusion on our playlist! 🎶💃🏻🕺🏼
      </Text>
      <SpotifyField value={songs || []} onChange={(songs) => setSongs(songs)} />
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
