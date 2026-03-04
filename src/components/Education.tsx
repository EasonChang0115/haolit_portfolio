import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import AboutIcon from './LiIcon'

interface DetailsProps {
  type: string
  time: string
  place: string
  info: string
}

const Details = ({ type, time, place, info }: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null)
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="xs:text-lg text-2xl font-bold capitalize sm:text-xl">{type}</h3>
        <span className="text-dark/75 dark:text-light/50 xs:text-sm font-medium capitalize">
          {time} | {place}
        </span>
        <p className="w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="xs:text-4xl mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl">
        Education
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] md:w-full lg:w-[90%]">
        <motion.div
          className="xs:left-5 bg-dark dark:bg-primaryDark dark:shadow-3xl absolute top-0 left-9 h-full w-1 origin-top rounded-full md:left-7.5 md:w-0.5"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <Details
            type="應用數學學士"
            time="2016-2020"
            place="國立清華大學 南大校區"
            info="相關課程包括數據結構和算法、工程數學以及數據統計等。"
          />
          <Details
            type="Technical Support Fundamentals"
            time="2021.06.25"
            place="Coursera"
            info="入門級 IT 工作的基本技能，從計算機組裝和無線網絡到客戶服務和故障排除。"
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
