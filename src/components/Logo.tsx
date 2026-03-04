import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <MotionLink
        href="/"
        className="bg-dark dark:border-light flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white dark:border-2 dark:border-solid"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        HL
      </MotionLink>
    </div>
  )
}

export default Logo
