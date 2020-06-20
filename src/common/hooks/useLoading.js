import { useState, useEffect } from 'react'

const useLoading = (useSkeleton) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (useSkeleton === 'false') {
      setLoading(false)
    } else if (useSkeleton === 'infinite') {
      setLoading(true)
    } else {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
      }, 1000)
      return () => {}
    }
  }, [])

  return [loading, setLoading]
}

export default useLoading
