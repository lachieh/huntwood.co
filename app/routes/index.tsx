import Intro from '~/components/Intro'
import HeroImage from '~/components/HeroImage'
import ContentHome from '~/components/ContentHome'
import { useTransition } from 'remix'
export default function Index() {
  const transition = useTransition()
  console.log(transition)
  return (
    <>
      <ContentHome />
    </>
  )
}
