import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import Label from './label'

const TextArea = ({
  className, label, hint, rows, placeholder, type, field, form: { errors, touched },
}) => {
  const [loading, setLoading] = useState()
  const status = touched[field.name] && errors[field.name] ? 'is-invalid' : ''

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {}
  }, [])

  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint} />
      {loading ? (
        <Skeleton height={77} />
      ) : (
        <textarea
          className={`form-control ${status}`}
          {...field}
          placeholder={placeholder}
          rows={rows}
          type={type}
        />
      )}
      {touched[field.name] && errors[field.name] && (
        <span className="invalid-feedback">{errors[field.name]}</span>
      )}
    </div>
  )
}

export default TextArea
