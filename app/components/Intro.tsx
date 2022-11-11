import { motion } from 'framer-motion'

type Props = {}

const Intro = (props: Props) => {
  const ssr = typeof window === 'undefined'
  if (ssr) return null

  return (
    <motion.div
      initial={{ opacity: 1, visibility: 'visible' }}
      animate={{ opacity: 0, visibility: 'hidden' }}
      transition={{ duration: 1, delay: 3, visibility: { delay: 4 } }}
      className="flex items-center justify-center absolute top-0 left-0 h-screen w-full bg-white z-20 opacity-1"
    >
      <motion.span
        style={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img
          src="/assets/images/logo-stack.png"
          alt="Kate & Fletcher"
          className="max-w-md w-full"
          width={800}
        />
      </motion.span>
    </motion.div>
  )
}

export default Intro
