import type { MotionProps } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { oneLine } from 'common-tags'
import { motion } from 'framer-motion'

type Props = {
  color?: string
  flipped?: boolean
  front?: React.ReactNode
  back?: React.ReactNode
}

const Card = ({
  front,
  back,
  children,
  color,
  flipped = false,
}: PropsWithChildren<Props>) => {
  const frontAnimationProps: MotionProps = {
    variants: {
      visible: {
        rotateY: '0deg',
        backfaceVisibility: 'hidden',
      },
      hidden: {
        rotateY: '180deg',
        backfaceVisibility: 'hidden',
      },
    },
    transition: {
      duration: 1,
      ease: 'backInOut',
    },
  }

  return (
    <div className="my-12 relative max-w-[954px] w-[95%] mx-auto [perspective:100vw]">
      <motion.main
        {...frontAnimationProps}
        animate={flipped ? 'hidden' : 'visible'}
        className={oneLine`
          ${color || 'bg-tan-lighter text-tan-light'} 
          shadow-xl shadow-black/50 rounded-[5em] relative z-10 [transform-style:preserve-3d] [backface-visibility:hidden]
          [boxShadow:0_5px_5px_3px_rgb(0_0_0_/_50%),inset_0_0_0_4px_currentColor,inset_0_0_0_6px_white]
          xs:[boxShadow:0_10px_10px_5px_rgb(0_0_0_/_50%),inset_0_0_0_10px_currentColor,inset_0_0_0_15px_white]
        `}
      >
        <div
          className={`p-4 flex flex-col justify-center text-green-dark
          ${back ? 'min-h-[500px]' : ''}
        `}
        >
          <div className={`p-[5%] relative`}>{children ?? front ?? ''}</div>
        </div>
      </motion.main>
      <motion.aside
        {...frontAnimationProps}
        style={{
          rotateY: '180deg',
          backfaceVisibility: 'hidden',
        }}
        animate={flipped ? 'visible' : 'hidden'}
        className={oneLine`
          bg-green-dark text-white shadow-xl shadow-black/50 rounded-[5em] absolute top-0 w-full h-full flex flex-col justify-center items-center [transform-style:preserve-3d] [backface-visibility:hidden]
        `}
      >
        <div className="p-8 relative">{back}</div>
      </motion.aside>
    </div>
  )
}

export default Card
