import { useEffect } from 'react'
import Card from '~/components/Card'
import Text from '~/components/Text'
import { setPage } from '~/utils/analytics'

export default function Thanks() {
  useEffect(() => {
    setPage('Thank You')
  })

  return (
    <div className="mt-8">
      <Card
        flourish
        front={
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-center leading-loose mb-4">
              <Text size="lg">Thank you!</Text>
            </h2>
          </div>
        }
      />
    </div>
  )
}
