import React, { StyleHTMLAttributes, useState } from 'react'
import {
  motion,
  MotionProps} from 'framer-motion'

type Props = {}

const Intro = (props: Props) => {
  if (typeof document === 'undefined') return null

  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  const baseAnimationProps = {
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 1,
      x: {
        delay: 2,
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }

  const leftProps: MotionProps = {
    ...baseAnimationProps,
    initial: {
      right: '-5em',
      y: '-50%',
    },
    animate: {
      right: '-3.5em',
      y: '-50%',
    },
  }

  const rightProps: MotionProps = {
    ...baseAnimationProps,
    initial: {
      left: '-5.9em',
      y: '-50%',
    },
    animate: {
      left: '-3.81em',
      y: '-50%',
    },
  }

  return (
    <motion.div
      initial={{ height: `${windowHeight}px` }}
      animate={{ height: '40px' }}
      transition={{ duration: 1, delay: 2.5, ease: 'easeInOut' }}
      className="flex flex-col items-center justify-center h-screen relative"
    >
      <motion.h1
        initial={{ fontSize: `${windowWidth * 0.08}px` }}
        animate={{ fontSize: '32px' }}
        transition={{ duration: 1, delay: 2.5, ease: 'easeInOut' }}
        className="text-[8.34vw] leading-none"
      >
        <motion.span className="block absolute top-0 left-0 h-full w-1/2 text-green overflow-hidden">
          <motion.span
            {...leftProps}
            className="absolute pb-[0.1em] top-1/2 -translate-y-1/2 right-[-3.5em] whitespace-nowrap"
          >
            Mitchell &amp; Natalie
          </motion.span>
        </motion.span>
        <motion.span className="block absolute top-0 left-1/2 h-full w-1/2 text-blue overflow-hidden">
          <motion.span
            {...rightProps}
            className="absolute pb-[0.1em] top-1/2 -translate-y-1/2 left-[-3.81em] whitespace-nowrap"
          >
            Mitchell &amp; Natalie
          </motion.span>
        </motion.span>
      </motion.h1>
    </motion.div>
  )
}

export default Intro
