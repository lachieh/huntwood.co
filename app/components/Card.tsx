import React from 'react'
import topLeft from '~/images/corner-top-left.svg'
import topRight from '~/images/corner-top-right.svg'
import flourishLeft from '~/images/flourish-left.svg'
import flourishRight from '~/images/flourish-right.svg'
import { motion, MotionProps } from 'framer-motion'

type Props = {
  flourish?: boolean
  flipped?: boolean
  front: React.ReactNode
  back?: React.ReactNode
}

const Card = ({ front, back, flourish = false, flipped = false }: Props) => {
  const baseImageClasses = 'w-[56.5%]'
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
    <div className="mb-12 relative max-w-[954px] w-[95%] mx-auto [perspective:400vw]">
      <motion.main
        {...frontAnimationProps}
        animate={flipped ? 'hidden' : 'visible'}
        className="bg-white shadow-xl shadow-black/50 rounded-lg relative"
      >
        <div
          className={`p-4 ${
            back ? 'min-h-[94vw] lg:min-h-[954px]' : ''
          } flex flex-col justify-center`}
        >
          {flourish && (
            <>
              <img className="w-full sm:hidden" src={flourishLeft} alt="" />
              <div className="pointer-events-none hidden sm:flex absolute top-4 left-4 w-[calc(100%_-_2em)]">
                <img
                  src={topLeft}
                  alt=""
                  className={`${baseImageClasses} -mr-[6.5%]`}
                />
                <img
                  src={topRight}
                  alt=""
                  className={`${baseImageClasses} -ml-[6.5%]`}
                />
              </div>
            </>
          )}
          <div
            className={`${
              flourish ? 'py-[10%] sm:px-[20%] sm:py-[28%]' : 'p-4'
            }`}
          >
            {front}
          </div>
          {flourish && (
            <>
              <img className="w-full sm:hidden" src={flourishRight} alt="" />
              <div className="hidden sm:flex pointer-events-none rotate-180 absolute bottom-4 left-4 w-[calc(100%_-_2em)]">
                <img
                  src={topLeft}
                  alt=""
                  className={`${baseImageClasses} -mr-[6.5%]`}
                />
                <img
                  src={topRight}
                  alt=""
                  className={`${baseImageClasses} -ml-[6.5%]`}
                />
              </div>
            </>
          )}
        </div>
      </motion.main>
      <motion.aside
        {...frontAnimationProps}
        style={{
          rotateY: '180deg',
          backfaceVisibility: 'hidden',
        }}
        animate={flipped ? 'visible' : 'hidden'}
        className="bg-blue-dark text-white shadow-xl shadow-black/50 rounded-lg absolute top-0 w-full h-full flex flex-col justify-center items-center"
      >
        <div className="p-4">{back}</div>
      </motion.aside>
    </div>
  )
}

export default Card
