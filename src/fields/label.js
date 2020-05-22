import React from 'react'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import useLoading from '../common/hooks/useLoading'
import Hint from './hint'

const label = ({ hint, label }) => {

  const loading = useLoading()

  const skeletonStyles = {
    marginBottom: '100px',
  }

  return (
    <div>
      {loading ? (
        <div style={skeletonStyles}>
          <Skeleton height={22} width={130} />
        </div>
      ) : (
        <div>
          <label className={label ? 'test' : 'sr-only'}>
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
