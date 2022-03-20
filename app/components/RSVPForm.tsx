import { useFetcher } from 'remix'
import Button from '~/components/Button'
import type { Guest } from '~/routes/api/invite'
import Text from '~/components/Text'

type Props = {}

const RSVPForm = (props: Props) => {
  const guest = useFetcher<Guest>()
  console.log(guest.data)
  return guest.data?.success ? (
    'Success'
  ) : (
    <guest.Form
      className="flex flex-col justify-center items-center w-80 max-w-full"
      method="get"
      action="/api/invite"
    >
      <br />
      <div className="text-white">
        <>
          <div className="mb-4">
            <Text as="h2" size="lg">
              RSVP
            </Text>
            <Text>
              If you're responding for you and a guest (or your family), you'll
              be able to RSVP for your entire group.
            </Text>
          </div>
          <label className="flex flex-col mb-4 w-full">
            <Text size="sm">Your Name</Text>
            <input
              name="q"
              className="text-copy px-4 py-2 w-full outline-offset-2 outline-2 outline-green-light focus-visible:[outline-style:solid]"
            />
          </label>
          {guest.data?.error && (
            <div className="mb-4">
              <Text size="sm">
                Uh oh! We can&rsquo;t find your invite. Give it another go with
                the name on your invite or contact the couple.
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
        </>
      </div>
    </guest.Form>
  )
}

export default RSVPForm
