import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className="border-dark dark:text-light dark:border-light w-full border-t-2 border-solid text-lg font-medium sm:text-base">
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Built with{' '}
          <span className="text-primary dark:text-primaryDark px-1 text-2xl">&#9825; </span>
          by&nbsp;
          <Link href="https://hoalit.cc" target="_blank" className="underline underline-offset-2">
            Eason Chang
          </Link>
        </div>

        <Link href="/about" target="_blank" className="underline underline-offset-2">
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
