import { motion } from 'framer-motion'
import hero from '../images/hero.jpg'

type Props = {
  fade?: boolean
}

const HeroImage = ({ fade }: Props) => {
  return (
    <picture className="h-screen w-full fixed -z-10 top-0">
      <motion.img
        key="heroimage"
        initial={{ opacity: fade ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: 'easeInOut' }}
        src={hero}
        alt="Mitchell and Natalie"
        className="object-cover w-full h-screen"
      />
    </picture>
  )
}

export default HeroImage
