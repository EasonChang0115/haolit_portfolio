import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import { useThemeSwitch } from './Hooks/useThemeSwitch'

interface CustomLinkProps {
  href: string
  title: string
  className?: string
}

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
  const router = useRouter()

  return (
    <Link
      href={href}
      className={`${className} group lg:text-light lg:dark:text-dark relative rounded`}
    >
      {title}
      <span
        className={`bg-dark ease dark:bg-light absolute -bottom-0.5 left-0 inline-block h-px transition-[width] duration-300 group-hover:w-full ${router.asPath === href ? 'w-full' : 'w-0'} lg:bg-light lg:dark:bg-dark`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

interface CustomMobileLinkProps {
  href: string
  title: string
  className?: string
  toggle: () => void
}

const CustomMobileLink = ({ href, title, className = '', toggle }: CustomMobileLinkProps) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      className={`${className} group lg:text-light lg:dark:text-dark relative rounded`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`bg-dark ease dark:bg-light absolute -bottom-0.5 left-0 inline-block h-px transition-[width] duration-300 group-hover:w-full ${router.asPath === href ? 'w-full' : 'w-0'} lg:bg-light lg:dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="dark:text-light relative z-10 flex w-full items-center justify-between px-32 py-8 font-medium sm:px-8 md:px-12 lg:px-16">
      <button
        type="button"
        className="hidden flex-col items-center justify-center lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          } my-0.5`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
          }`}
        />
      </button>

      <div className="flex w-full items-center justify-between lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink className="mr-4" href="/" title="Home" />
          <CustomLink className="mx-4" href="/about" title="About" />
          <CustomLink className="mx-4" href="/projects" title="Projects" />
          <CustomLink className="ml-4" href="/articles" title="Articles" />
        </nav>
        <nav className="flex flex-wrap items-center justify-center lg:mt-2">
          <motion.a
            target="_blank"
            className="mx-3 w-6"
            href="https://github.com/EasonChang0115"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my github profile"
            rel="noreferrer"
          >
            <GithubIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ease ml-3 flex h-6 w-6 items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            aria-label="theme-switcher"
          >
            {mode === 'light' ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          className="bg-dark/90 dark:bg-light/75 fixed top-1/2 left-1/2 z-50 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg py-32 backdrop-blur-md sm:min-w-[90vw]"
          initial={{ scale: 0, x: '-50%', y: '-50%', opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              toggle={handleClick}
              className="mr-4 lg:m-0 lg:my-2"
              href="/"
              title="Home"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-2"
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-2"
              href="/projects"
              title="Projects"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-2"
              href="/articles"
              title="Articles"
            />
          </nav>
          <nav className="mt-2 flex items-center justify-center">
            <motion.a
              target="_blank"
              className="bg-light dark:bg-dark m-1 mx-3 w-6 rounded-full sm:mx-1"
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my github profile"
              rel="noreferrer"
            >
              <GithubIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ease m-1 ml-3 flex h-6 w-6 items-center justify-center rounded-full p-1 sm:mx-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
              aria-label="theme-switcher"
            >
              {mode === 'light' ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute top-2 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
