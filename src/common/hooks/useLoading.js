import { useState, useEffect } from 'react'

const useLoading = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {}
  }, [])

  return [loading, setLoading]
}

export default useLoading
