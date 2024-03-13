import AnimatedText from '@/components/AnimatedText'
import { HireMe } from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>HAO Lit | Portfolio</title>
        <meta
          name="description"
          content="HAO Lit 是位於台灣的全端網站開發工程師，熱衷於構建優秀的應用程式或網頁來改善周圍人的生活。為個人和小型企業、大型企業公司等客戶創造價值。"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex items-center text-dark dark:text-light sm:items-start w-screen flex-1`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16 !py-0 max-w-[1800px] mx-auto flex-1">
          <div className="flex w-full items-start justify-between md:flex-col md:items-center md:gap-1">
            <div className="flex justify-center items-center w-1/2 md:flex md:w-[204px] lg:hidden">
              <div className="relative w-full max-w-[408px] aspect-2/3">
                <Image
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 !top-1/2 !left-1/2  max-h-[612px] max-w-[408px]"
                  src="/images/profile/developer-pic-3.png"
                  alt="CodeBucks"
                  layout="fill"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="透過程式及前端技術，將願景變成現實"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                身為一位前端工程師，我致力於將想像的藍圖轉換為創新的網頁應用.透過我最近的專案或是文章，可以了解到我對於前端技術的熱情。
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="https://www.cakeresume.com/pdf/s--U6uhiSquaeQ6lApniwhZpA--/BmQjb.pdf"
                  target={'_blank'}
                  className={`
                    flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base
             
                  `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:s8710606@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </article>
    </>
  )
}
