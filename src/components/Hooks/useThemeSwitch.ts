import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Theme = 'light' | 'dark'

export function useThemeSwitch(): [Theme, Dispatch<SetStateAction<Theme>>] {
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const [mode, setMode] = useState<Theme>('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme') as Theme | null

    const handleChange = () => {
      if (userPref) {
        const check: Theme = userPref === 'dark' ? 'dark' : 'light'
        setMode(check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        const systemTheme: Theme = mediaQuery.matches ? 'dark' : 'light'
        setMode(systemTheme)
        window.localStorage.setItem('theme', systemTheme)
        if (mediaQuery.matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    handleChange()
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    }
    if (mode === 'light') {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [mode])

  return [mode, setMode]
}
