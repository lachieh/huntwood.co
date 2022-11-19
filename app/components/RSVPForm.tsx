import type { Invite, RSVPData } from '~/routes/rsvp'
import { useFetcher } from '@remix-run/react'
import { useMemo, useState } from 'react'
import Button from '~/components/Button'
import Input from '~/components/Input'
import InputCheckbox from '~/components/InputCheckbox'
import InputRadio from '~/components/InputRadio'
import Text from '~/components/Text'
import Textarea from '~/components/Textarea'

type Props = {
  invite: Invite
  onSuccess: () => void
}

const RSVPForm = ({ invite }: Props) => {
  const rsvp = useFetcher<RSVPData>()
  const initialData = useMemo(
    () => ({
      names: invite?.names,
      email: '',
      phone: '',
      guest1Attending: undefined,
      guest2Attending: undefined,
      guest3Attending: undefined,
      guest4Attending: undefined,
      shuttle: false,
      dietary: '',
      message: '',
      songs: [],
    }),
    [invite],
  )
  const [data, setData] = useState<RSVPData>(rsvp.data ?? initialData)
  const guestsArray = [
    ...[invite?.guest1 ?? null],
    ...[invite?.guest2 ?? null],
    ...[invite?.guest3 ?? null],
    ...[invite?.guest4 ?? null],
  ].filter((x) => x)
  const guestsAnswers = guestsArray.map(
    (_, i) => data[('guest' + (i + 1) + 'Attending') as 'guest1Attending'],
  )
  const many = guestsArray.length > 1
  const pronoun = many ? 'We are' : 'I am'
  const allAnswered = guestsAnswers.every((x) => typeof x !== 'undefined')
  const allAttending = guestsAnswers.every(
    (x) => typeof x !== 'undefined' && x === true,
  )
  const someAttending = guestsAnswers.some(
    (x) => typeof x !== 'undefined' && x === true,
  )
  const noneAttending = guestsAnswers.every((x) => x === false)

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
    <div>
      <p className="text-center">
        <Text size="lg">{invite?.names}</Text>
      </p>
      <Text as="p" size="md" className="text-center mb-6">
        Hi! 👋 We'd love to see you on our special day! Please fill out the form
        below to RSVP.
      </Text>
      <div className="flex flex-col">
        <Text as="p" size="md" className="mb-4">
          Who is attending?
        </Text>
        {guestsArray.map((guest, idx) => {
          const name = 'guest' + (idx + 1) + 'Attending'
          return (
            <div key={guest} className="flex flex-row">
              <Text size="md" className="mr-4">
                {guest}
              </Text>
              <label className="inline-flex flex-row mb-6 items-center">
                <InputRadio
                  name={name}
                  onChange={(e) =>
                    update(
                      name,
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
                  name={name}
                  onChange={(e) =>
                    update(
                      name,
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
          )
        })}
      </div>
      {allAnswered && (allAttending || someAttending) && (
        <>
          <div className="mb-2">
            <Text size="md">
              If there is enough interest, we will organise a shuttle bus from
              Gosford Station to the venue
            </Text>
          </div>
          <label className="inline-flex flex-row mb-6 items-center">
            <InputCheckbox
              onChange={(e) => update('shuttle', e.target.checked)}
              value="true"
            />
            <Text size="md" className="ml-2">
              {pronoun} interested in the shuttle bus
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
        </>
      )}
      {noneAttending && (
        <>
          <Text as="p" size="md" className="mb-6">
            We're sorry you can't make it! Thanks for letting us know.
          </Text>
        </>
      )}
      {allAnswered && (
        <>
          <label className="flex flex-col mb-6 w-full">
            <Text size="md">
              Would you like to tell us anything else or leave us a message?
              (optional)
            </Text>
            <Textarea onChange={(e) => update('message', e.target.value)} />
          </label>
          <rsvp.Form action={`/rsvp/${invite?.id}`} method="post">
            <input
              type="hidden"
              name="json"
              value={JSON.stringify({ ...data })}
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
        </>
      )}
    </div>
  )
}

export default RSVPForm
