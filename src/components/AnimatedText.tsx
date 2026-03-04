import { motion, Variants } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

const quote: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, staggerChildren: 0.08 },
  },
}

const singleWord: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center overflow-hidden py-2 text-center sm:py-0">
      <motion.h1
        className={`text-dark dark:text-light inline-block w-full text-8xl font-bold capitalize ${className} xl:text-6xl`}
        variants={quote}
        initial="hidden"
        animate="visible"
      >
        {text.split(' ').map((char, index) => (
          <motion.span className="inline-block" key={char + '-' + index} variants={singleWord}>
            {char}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedText
