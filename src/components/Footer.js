import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <div className="py-8 flex items-center justify-between lg:flex-col lg:py-6 px-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Built with{' '}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825; </span>{' '}
          by&nbsp;
          <Link href="https://hoalit.cc" target="_blank" className="underline underline-offset-2">
            Eason Chang
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
