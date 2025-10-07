import { motion } from 'framer-motion'

type Props = {}

const Intro = (props: Props) => {
  if (process.env.NODE_ENV === 'development') return null
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        opacity: 1,
        zIndex: 20,
        background: 'rgb(221 199 179)',
      }}
      initial={{ opacity: 1, visibility: 'visible' }}
      animate={{ opacity: 0, visibility: 'hidden' }}
      transition={{ duration: 1, delay: 3, visibility: { delay: 4 } }}
      className="flex items-center justify-center bg-tan-light"
    >
      <img
        src="/assets/images/logo-stack.png"
        alt="Kate & Fletcher"
        className="max-w-md w-full p-4"
      />
    </motion.div>
  )
}

export default Intro
