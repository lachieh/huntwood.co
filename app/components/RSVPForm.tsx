import type { Song } from '~/routes/api/song'
import type { Guest, RSVPData } from '~/routes/rsvp'
import { useMemo, useState } from 'react'
import { useFetcher } from 'remix'
import Button from '~/components/Button'
import Input from '~/components/Input'
import InputCheckbox from '~/components/InputCheckbox'
import InputRadio from '~/components/InputRadio'
import SpotifyField from '~/components/SpotifyField'
import Text from '~/components/Text'
import Textarea from '~/components/Textarea'

type Props = {
  guest: Guest
  onSuccess: () => void
}

const RSVPForm = ({ guest }: Props) => {
  const rsvp = useFetcher<RSVPData>()
  const initialData = useMemo(
    () => ({
      names: guest?.names,
      email: '',
      phone: '',
      guest1Attending: undefined,
      guest2Attending: undefined,
      shuttle: false,
      dietary: '',
      message: '',
      songs: [],
    }),
    [guest],
  )
  const [data, setData] = useState<RSVPData>(rsvp.data ?? initialData)
  const [songs, setSongs] = useState<Song[]>()
  const many = !!guest?.guest2
  const pronoun = many ? 'We' : 'I'
  const allAnswered = many
    ? typeof data.guest1Attending !== 'undefined' &&
      typeof data.guest2Attending !== 'undefined'
    : typeof data.guest1Attending !== 'undefined'
  const allAttending = many
    ? data.guest1Attending === true && data.guest2Attending === true
    : data.guest1Attending === true
  const someAttending = many
    ? allAnswered &&
      (data.guest1Attending === true || data.guest2Attending === true)
    : data.guest1Attending === true
  const noneAttending = many
    ? data.guest1Attending === false && data.guest2Attending === false
    : data.guest1Attending === false

  const update = (key: string, value: any) => {
    setData({ ...data, [key]: value })
  }

  if (rsvp.data?.success) {
    if (allAttending || someAttending) {
      return (
        <>
          <p className="text-center">
            <Text size="lg">Thank you</Text>
          </p>
          <Text as="p" size="md" className="text-center">
            We're looking forward to seeing you there!
          </Text>
        </>
      )
    }
    if (noneAttending) {
      return (
        <>
          <p className="text-center">
            <Text size="lg">Thanks</Text>
          </p>
          <Text as="p" size="md" className="text-center">
            We'll miss you on the dance floor!
          </Text>
        </>
      )
    }
  }

  return (
    <>
      <p className="text-center">
        <Text size="lg">{guest?.names}</Text>
      </p>
      <Text as="p" size="md" className="text-center mb-6">
        Hi! 👋 We'd love to see you on our special day! Please fill out the form
        below to RSVP.
      </Text>
      <div className="flex flex-col">
        <Text as="p" size="md" className="mb-4">
          Who is attending?
        </Text>
        <div className="flex flex-row">
          <Text size="md" className="mr-4">
            {guest?.guest1}
          </Text>
          <label className="inline-flex flex-row mb-6 items-center">
            <InputRadio
              name="guest1Attending"
              onChange={(e) =>
                update(
                  'guest1Attending',
                  (e.target as HTMLInputElement).value === 'true',
                )
              }
              value="true"
            />
            <Text size="md" className="ml-2 mr-4">
              Yes
            </Text>
          </label>
          <label className="inline-flex flex-row mb-6 items-center">
            <InputRadio
              name="guest1Attending"
              onChange={(e) =>
                update(
                  'guest1Attending',
                  (e.target as HTMLInputElement).value === 'true',
                )
              }
              value="false"
            />
            <Text size="md" className="ml-2 mr-4">
              No
            </Text>
          </label>
        </div>
        {many && (
          <div className="flex flex-row">
            <Text size="md" className="mr-4">
              {guest?.guest2}
            </Text>
            <label className="inline-flex flex-row mb-6 items-center">
              <InputRadio
                name="guest2Attending"
                onChange={(e) =>
                  update(
                    'guest2Attending',
                    (e.target as HTMLInputElement).value === 'true',
                  )
                }
                value="true"
              />
              <Text size="md" className="ml-2 mr-4">
                Yes
              </Text>
            </label>
            <label className="inline-flex flex-row mb-6 items-center">
              <InputRadio
                name="guest2Attending"
                onChange={(e) =>
                  update(
                    'guest2Attending',
                    (e.target as HTMLInputElement).value === 'true',
                  )
                }
                value="false"
              />
              <Text size="md" className="ml-2 mr-4">
                No
              </Text>
            </label>
          </div>
        )}
      </div>
      {(allAttending || someAttending) && (
        <>
          <label className="inline-flex flex-row mb-6 items-center">
            <InputCheckbox
              onChange={(e) => update('shuttle', e.target.value)}
              value="true"
            />
            <Text size="md" className="ml-2">
              {pronoun} will require use of the shuttle bus from the parking lot
              to the venue
            </Text>
          </label>
          <div>
            <Text size="md">Contact Information (in case of wet weather)</Text>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <label className="flex flex-col mb-6 w-full">
              <Text size="md">Mobile Number</Text>
              <Input
                onChange={(e) => update('phone', e.target.value)}
                autoComplete="home tel-national"
                required
              />
            </label>
            <label className="flex flex-col mb-6 w-full">
              <Text size="md">Email Address</Text>
              <Input
                onChange={(e) => update('email', e.target.value)}
                type="email"
                required
                autoComplete="home email"
              />
            </label>
          </div>
          <label className="flex flex-col mb-6 w-full">
            <Text size="md">
              {many ? 'Does anyone' : 'Do you'} have any dietary restrictions?{' '}
              {many && 'Please list per guest.'} (optional)
            </Text>
            <Textarea onChange={(e) => update('dietary', e.target.value)} />
          </label>
          <label className="flex flex-col mb-6 w-full">
            <Text size="md">
              Would you like to tell us anything else or leave us a message?
              (optional)
            </Text>
            <Textarea onChange={(e) => update('message', e.target.value)} />
          </label>
          <Text as="p" size="md" className="mb-6">
            One last thing ☝️. If there is a song you would like to hear played
            on the night, please search for it below. Mitch will curate the list
            and critique your selections for inclusion on our playlist! 🎶💃🏻🕺🏼
          </Text>
          <SpotifyField
            value={songs || []}
            onChange={(songs) => setSongs(songs)}
          />
        </>
      )}
      {noneAttending && (
        <>
          <Text as="p" size="md" className="mb-6">
            Thanks for letting us know. We'd still love if you could contribute
            to our day 🤗 so if there is a song you would like us to play on the
            night, please search for it below. 🎶💃🏻🕺🏼
          </Text>
          <SpotifyField
            value={songs || []}
            onChange={(songs) => setSongs(songs)}
          />
        </>
      )}
      {allAnswered && (
        <rsvp.Form action={`/rsvp/${guest?.id}`} method="post">
          <input
            type="hidden"
            name="json"
            value={JSON.stringify({ ...data, songs })}
          />
          <Button
            variant="solid"
            color="green-light"
            type="submit"
            style={{ width: '100%' }}
            disabled={!allAnswered || rsvp.state === 'submitting'}
          >
            {rsvp.state === 'submitting' ? 'Submitting...' : 'Submit'}
          </Button>
        </rsvp.Form>
      )}
    </>
  )
}

export default RSVPForm
