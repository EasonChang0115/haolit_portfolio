import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>HAO Lit 前端 Portfolio Website | 404 Page </title>
        <meta
          name="description"
          content="HAO Lit 是位於台灣的全端網站開發工程師，熱衷於構建優秀的應用程式或網頁來改善周圍人的生活。為個人和小型企業、大型企業公司等客戶創造價值。"
        />
      </Head>
      <TransitionEffect />
      <main className="h-[75vh] w-full dark:bg-dark ">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="404" className=" " />
          <AnimatedText text="Page Not Found." className=" !text-7xl " />
          <Link
            href="/"
            className="self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
          >
            Go To Home
          </Link>
        </Layout>
      </main>
    </>
  )
}

export default NotFound
