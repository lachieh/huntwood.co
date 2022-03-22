import { Link } from 'react-router-dom'
import { Form, useActionData, useFetcher, useTransition } from 'remix'
import Button from '~/components/Button'
import Text from '~/components/Text'
import { Guest } from '~/routes/rsvp'

type Props = {}

const guestIsValid = (
  data: { guest: Guest } | { error: string },
): data is { guest: Guest } => {
  return (
    !(data as { error: string }).error && !!(data as { guest: Guest }).guest
  )
}

const RSVPForm = (props: Props) => {
  const guest = useFetcher<{ guest: Guest } | { error: string }>()
  return (
    <guest.Form
      className="flex flex-col justify-center items-center w-full max-w-xs"
      method="post"
      action="/rsvp"
    >
      <br />
      <div className="text-white">
        <div className="mb-4">
          <div className="text-center">
            <Text as="h2" size="lg">
              RSVP
            </Text>
          </div>
          <Text>
            If you're responding for you and a guest (or your family), you'll be
            able to RSVP for your entire group.
          </Text>
        </div>
        <label className="flex flex-col mb-4 w-full">
          <Text size="sm">Your Name</Text>
          <input
            name="name"
            required
            className="text-copy px-4 py-2 mt-1 w-full outline-offset-2 outline-2 outline-green-light focus-visible:[outline-style:solid]"
          />
        </label>
        {guest.data &&
          (guest.data as { error: string })?.error === 'Guest not found' && (
            <div className="mb-4">
              <Text size="sm">
                Uh oh! We can&rsquo;t find your invite. Give it another go with
                the name on your invite or contact Mitchell or Natalie.
              </Text>
            </div>
          )}
        <Button
          variant="solid"
          color="green-light"
          type="submit"
          style={{ width: '100%' }}
          disabled={guest.state === 'submitting'}
        >
          {guest.state === 'submitting'
            ? 'Searching...'
            : 'Find your invitation'}
        </Button>

        {guest.data && (guest.data as { guest: Guest })?.guest && (
          <>
            <div className="mt-6 text-center">
              <Text size="md">We found your invite!</Text>
              <br />
              <Text size="md">
                {(guest.data as { guest: Guest }).guest.names}
              </Text>
            </div>
            <div className="mt-4">
              <Button
                variant="solid"
                color="green-dark"
                style={{ width: '100%' }}
              >
                <Link to={`/rsvp/${(guest.data as { guest: Guest }).guest.id}`}>
                  Continue
                </Link>
              </Button>
              <div className="text-center mt-4">
                <Text size="sm">
                  Not you? Try again with the name on your invite or contact
                  Mitchell or Natalie.
                </Text>
              </div>
            </div>
          </>
        )}
      </div>
    </guest.Form>
  )
}

export default RSVPForm
