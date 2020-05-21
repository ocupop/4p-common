import React, {
  useState,
  useEffect,
} from 'react'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import Hint from './hint'

const label = ({ hint, label }) => {
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {}
  }, [])

  const skeletonStyles = {
    marginBottom: '5px',
  }

  return (
    <div>
      {loading ? (
        <div style={skeletonStyles}>
          <Skeleton height={22} width={130} />
        </div>
      ) : (
        <div>
          <label className={label ? '' : 'sr-only'}>
            <span>{label}</span>
            {hint && <Hint content={hint} />}
          </label>
        </div>
      )}
    </div>
  )
}

label.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
}

export default label
