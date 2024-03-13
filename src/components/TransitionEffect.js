import { motion } from 'framer-motion'
import React from 'react'

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        id="loader-wrapper"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light dark:bg-dark"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      >
        <div class="loader-main">
          <div class="animation-container">
            <div class="lightning-container">
              <div class="lightning white"></div>
              <div class="lightning red"></div>
            </div>
            <div class="boom-container">
              <div class="shape circle big white"></div>
              <div class="shape circle white"></div>
              <div class="shape triangle big yellow"></div>
              <div class="shape disc white"></div>
              <div class="shape triangle blue"></div>
            </div>
            <div class="boom-container second">
              <div class="shape circle big white"></div>
              <div class="shape circle white"></div>
              <div class="shape disc white"></div>
              <div class="shape triangle blue"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default TransitionEffect
