import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import proj1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import proj2 from '../../public/images/projects/nft-collection-website-cover-image.jpg'
import proj3 from '../../public/images/projects/fashion-studio-website.jpg'
import proj4 from '../../public/images/projects/portfolio-cover-image.jpg'
import proj5 from '../../public/images/projects/agency-website-cover-image.jpg'
import proj6 from '../../public/images/projects/devdreaming.jpg'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

interface FeaturedProjectProps {
  type: string
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}

const FeaturedProject = ({ type, title, summary, img, link, github }: FeaturedProjectProps) => {
  return (
    <article className="border-dark bg-light dark:border-light dark:bg-dark xs:rounded-2xl xs:rounded-br-3xl xs:p-4 relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid p-12 shadow-2xl lg:flex-col lg:p-8">
      <div className="bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-3xl absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          unoptimized
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pt-6 lg:pl-0">
        <span className="text-primary dark:text-primaryDark xs:text-base text-xl font-medium">
          {type}
        </span>
        <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
          <h2 className="xs:text-2xl my-2 w-full text-left text-4xl font-bold lg:text-3xl">
            {title}
          </h2>
        </Link>
        <p className="text-dark dark:text-light my-2 rounded-md font-medium sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10" aria-label={`${title} github link`}>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="bg-dark text-light dark:bg-light dark:text-dark ml-4 rounded-lg p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
            aria-label={title}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

interface ProjectProps {
  title: string
  type: string
  img: StaticImageData
  link: string
  github: string
}

const Project = ({ title, type, img, link, github }: ProjectProps) => {
  return (
    <article className="border-dark bg-light dark:border-light dark:bg-dark xs:p-4 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid p-6 shadow-2xl">
      <div className="bg-dark dark:bg-light xs:h-[102%] xs:rounded-3xl absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-4xl rounded-br-3xl md:-right-2 md:w-[101%]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-primary dark:text-primaryDark text-xl font-medium md:text-base lg:text-lg">
          {type}
        </span>

        <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded text-lg font-medium underline md:text-base"
            aria-label={title}
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6" aria-label={title}>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>HAO Lit | Projects</title>
        <meta
          name="description"
          content="HAO Lit 是位於台灣的全端網站開發工程師，熱衷於構建優秀的應用程式或網頁來改善周圍人的生活。為個人和小型企業、大型企業公司等客戶創造價值。"
        />
      </Head>

      <TransitionEffect />
      <main className="dark:text-light mb-16 flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="xs:text-4xl! mb-16 text-8xl! leading-tight! sm:mb-8 sm:text-6xl! lg:text-7xl!"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 sm:gap-x-0 md:gap-y-24 lg:gap-x-8 xl:gap-x-16">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                img={proj1}
                link="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                github="https://github.com/codebucks27/CryptoBucks-Final-Code"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                title="NFT collection Website"
                img={proj2}
                link="https://devdreaming.com/videos/create-nft-collection-website-reactjs"
                github="https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Fashion Studio Website"
                img={proj3}
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Portfolio Website"
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={proj4}
                link="https://devdreaming.com/videos/build-stunning-portfolio-website-react-js-framer-motion"
                github="https://github.com/codebucks27/react-portfolio-final"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                img={proj5}
                title="Agency Website Template"
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={proj6}
                title="DevDreaming"
                link="https://devdreaming.com"
                github="https://github.com/codebucks27"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
