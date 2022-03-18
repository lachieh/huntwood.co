import { motion } from 'framer-motion'
import hero from '../assets/images/hero.jpg'

type Props = {}

const HeroImage = (props: Props) => {
  return (
    <div className="h-screen">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: 'easeInOut' }}
        src={hero}
        alt="Mitchell and Natalie"
        className="object-cover w-full h-5/6"
      />
    </div>
  )
}

export default HeroImage