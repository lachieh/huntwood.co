import type { Guest } from '~/routes/rsvp'
import { useFetcher, useLoaderData } from 'remix'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Text from '~/components/Text'

type Props = {}

const RSVPForm = (props: Props) => {
  const guestFetcher = useFetcher<{ guest: Guest } | { error: string }>()
  const existingGuest = useLoaderData<Guest | undefined>()
  const guestInfo =
    (guestFetcher.data as { guest: Guest })?.guest ?? existingGuest
  const guestError = (guestFetcher?.data as { error: string })?.error

  return (
    <guestFetcher.Form
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
            If you're responding for you and a guest, you'll be able to RSVP for
            your whole party.
          </Text>
        </div>
        <label className="flex flex-col mb-4 w-full">
          <Text size="sm">Your Name</Text>
          <Input
            name="name"
            required
            bg="dark"
            defaultValue={existingGuest?.names || ''}
          />
        </label>
        {guestError === 'Guest not found' && (
          <div className="mb-4">
            <Text size="sm">
              Uh oh! We can&rsquo;t find your invite! Give it another go with
              the name on your invite or contact Mitchell or Natalie.
            </Text>
          </div>
        )}
        {guestError === 'Name not unique' && (
          <div className="mb-4">
            <Text size="sm">
              Looks like we found a few guests with that name. Give it another
              go with the name on your invite or contact Mitchell or Natalie.
            </Text>
          </div>
        )}
        <Button
          variant="solid"
          color="green-light"
          type="submit"
          style={{ width: '100%' }}
          disabled={guestFetcher.state === 'submitting'}
        >
          {guestFetcher.state === 'submitting'
            ? 'Searching...'
            : 'Find your invitation'}
        </Button>

        {guestInfo && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  FS.identify('${guestInfo.id}', {
                    displayName: '${guestInfo.names}',
                    reviewsWritten_int: 14
                  });
                `,
              }}
            />
            <div className="mt-6 text-center">
              <Text size="md">We found your invite!</Text>
              <br />
              <Text size="md">{guestInfo.names}</Text>
            </div>
            <div className="mt-4">
              <Button
                variant="solid"
                color="green-dark"
                style={{ width: '100%' }}
                to={`/rsvp/${guestInfo.id}`}
                link
              >
                Continue
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
    </guestFetcher.Form>
  )
}

export default RSVPForm
