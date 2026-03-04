import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div
      className={`bg-light dark:bg-dark z-0 inline-block h-full w-full p-32 sm:p-8 md:p-12 lg:p-16 xl:p-24 ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout
