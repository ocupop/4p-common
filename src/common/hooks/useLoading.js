import { useState, useEffect } from 'react'

export const useLoading = () => {
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {}
  }, [])

  return { loading, setLoading }
}
