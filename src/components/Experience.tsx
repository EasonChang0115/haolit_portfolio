import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

interface DetailsProps {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

const Details = ({ position, company, companyLink, time, address, work }: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null)
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="xs:text-lg text-2xl font-bold capitalize sm:text-xl">
          {position}{' '}
          <a
            className="text-primary dark:text-primaryDark capitalize"
            href={companyLink}
            target="_blank"
            rel="noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="text-dark/75 dark:text-light/50 xs:text-sm font-medium capitalize">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="xs:text-4xl mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl">
        Experience
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] md:w-full lg:w-[90%]">
        <motion.div
          className="xs:left-5 bg-dark dark:bg-primaryDark dark:shadow-3xl absolute top-0 left-9 h-full w-1 origin-top md:left-7.5 md:w-0.5"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="xs:ml-2 ml-4 flex w-full flex-col items-start justify-between">
          <Details
            position="資深軟體工程師"
            company="台達電子工業股份有限公司"
            companyLink="https://www.deltaww.com/zh-TW/"
            time="Oct 2022 ~ Present"
            address="Taipei, Taiwan"
            work="知識管理系統開發，使用 React.js、Next.js、Node.js、Express.js、MongoDB 等技術，協助公司內部知識管理系統的開發與維護。協助專案系統架構，客製系統、前後台專案開發。Sass 產品架構，WebSocket、WebRTC 應用系統等, 開發LLM 相關專案，使用 OpenAI API、LangChain 等技術，協助公司內部 LLM 相關專案的開發與維護。"
          />

          <Details
            position="前端工程師"
            companyLink="https://alion.tw/"
            company="阿利恩股份有限公司"
            time="Feb 2021 ~ Oct 2022"
            address="Taipei, Taiwan"
            work="協助專案系統架構，客製系統、前後台專案開發。Sass 產品架構，WebSocket、WebRTC 應用，串接第三方 Agora P2P 系統等"
          />

          <Details
            position="前端工程師"
            company="版騰信息科技"
            companyLink="https://alion.tw/"
            time="Feb 2019 ~ Oct 2021"
            address="Taipei, Taiwan"
            work="開發打版系統，使用 vue-cli 作為開發工具，fabric.js 處理 canvas 邏輯。開發會員登入、官網平台，使用 Nuxt.js 作為 SSR 工具，主要還是 B2B，提供企業進行服裝版型維護、簽核流程管理、金流串接、 權限管理等等。透過 Vue component 打包工具，以及 Lerna 專案管理工具開發公司企業識別 UI library，並透過 verdaccio 建構企業內部的 npm 套件管理系統。透過 gitlab-runner 跑自動化測試以及部署。CI / CD、Docker 基本操作"
          />

          <Details
            position="前端工程師"
            company="良師塾企業股份有限公司"
            companyLink="https://literaticafe.liangshishu.com/"
            time="May 2018 ~ Jan 2019"
            address="Taipei, Taiwan"
            work="與後端工程師(.net)、美工討論，一同建立後台建題系統、員工排班簽核系統、編卷管理系統等。"
          />

          <Details
            position="前端工程師,"
            company="風尚數位"
            companyLink="https://www.fashionguide.com.tw/"
            time="May 2018"
            address="Taipei, Taiwan"
            work="官方網站維護及改版，公司引進新技術(vue, laravel)，採用前後端分離的方式建立網站。活動網頁撰寫：公司會定期舉辦活動，例如母親節、兒童節等。以季為單位，非別推出不同的活動頁面。"
          />

          <Details
            position="PHP 網站工程師"
            company="泛科知識股分有限公司"
            companyLink="https://panmedia.asia/"
            time="Aug 2017"
            address="Taipei, Taiwan"
            work="活動網頁撰寫，公司有一部份是屬於接案活動。偶爾會利用新技術來寫，例如車客松第一屆網頁。後台系統開發，開發廣告管理系統、員工工時系統等"
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
