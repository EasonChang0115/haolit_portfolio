import { motion, useScroll } from 'framer-motion'
import type { RefObject } from 'react'

interface LiIconProps {
  reference: RefObject<HTMLLIElement | null>
  time?: string
}

const LiIcon = ({ reference }: LiIconProps) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
    layoutEffect: false,
  })

  return (
    <figure className="stroke-dark dark:stroke-light absolute left-0">
      <svg
        className="xs:w-10 xs:h-10 -rotate-90 md:h-15 md:w-15"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="stroke-primary dark:stroke-primaryDark fill-none stroke-1"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="fill-light dark:fill-dark stroke-[5px]"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          pathLength="1"
          className="fill-primary dark:fill-primaryDark animate-pulse stroke-1"
        />
      </svg>
    </figure>
  )
}

export default LiIcon
