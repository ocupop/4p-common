import { useState, useEffect } from 'react'

const useLoading = (useSkeleton) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    switch (useSkeleton) {
      case 'false':
        setLoading(false)
        break
      case 'infinite':
        setLoading(true)
        break
      default:
        setLoading(true)

        setTimeout(() => {
          setLoading(false)
        }, 1000)
        return () => { }
    }
  }, [])

  return [loading, setLoading]
}

export default useLoading
