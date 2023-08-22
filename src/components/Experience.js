import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{' '}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={'_blank'}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="前端工程師"
            company="阿利恩股份有限公司"
            companyLink="https://alion.tw/"
            time="Feb 2021 ~ Present"
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
