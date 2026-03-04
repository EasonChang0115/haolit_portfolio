import Link from 'next/link'
import { CircularText } from './Icons'

export const HireMe = () => {
  return (
    <div className="fixed bottom-4 left-4 z-20 flex flex-col items-center justify-center overflow-hidden sm:right-0 md:absolute md:top-0 md:right-8 md:bottom-auto md:left-auto">
      <div className="relative flex h-auto w-48 items-center justify-center md:w-24">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow duration-200" />
        <Link
          href="mailto:s8710606@gmail.com"
          className="bg-dark hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:shadow-light/25 absolute top-[50%] left-[50%] flex h-20 w-20 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full border border-solid text-center font-semibold text-white shadow-md md:h-12 md:w-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}
