import Intro from '~/components/Intro'
import HeroImage from '~/components/HeroImage'
import ContentHome from '~/components/ContentHome'
export default function Index() {
  return (
    <>
      <header>
        <Intro />
      </header>
      <HeroImage />
      <ContentHome />
    </>
  )
}
