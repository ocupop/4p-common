import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Checkbox } from 'semantic-ui-react'
import Hint from './hint'

const SwitchInput = ({
  className, hint, type, label, field, onChange, toggle, form: {
    errors,
    touched,
  },
}) => {
  // deleting field.value, this throws an error with the Checkbox Element.
  delete field.value
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {}
  }, [])

  return (
    <div className={`form-group ${className}`}>
      {loading ? (
        <Skeleton height={60} width={80} />
      ) : (
        <Checkbox
          {...field}
          type={type}
          checked={field.checked}
          label={label}
          onChange={onChange}
          toggle={toggle}
        />
      )}
      {hint && <Hint content={hint} />}
    </div>
  )
}

export default SwitchInput
