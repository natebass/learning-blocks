import { useEffect, useState } from 'react'

const useDemo = () => {
  const [isDemoMode, setIsDemoMode] = useState<boolean>(() => {
    const savedState = localStorage.getItem('demo_enabled')
    return savedState === 'true'
  })

  useEffect(() => {
    localStorage.setItem('demo_enabled', JSON.stringify(isDemoMode))
  }, [isDemoMode])

  const toggleDemoMode = () => {
    setIsDemoMode((prev) => !prev)
  }

  return {
    isDemoMode,
    setIsDemoMode,
    toggleDemoMode,
  }
}

export const isDemoMode = () => {
  return localStorage.getItem('demo_enabled') === 'true'
}

export default useDemo
