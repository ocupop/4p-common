import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import MaskedInput from 'react-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'
import Label from './label'

const EmailInput = ({
  className, hint, type, label, placeholder, required, field, form: { errors, touched },
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
        <div>
          <Skeleton height={35} />
        </div>
      ) : (
        <div>
          <MaskedInput
            mask={emailMask}
            className={`form-control ${status}`}
            {...field}
            placeholder={placeholder}
            type={type}
            required={required}
          />
        </div>
      )}
      {touched[field.name] && errors[field.name] && (
        <div className="invalid-feedback">{errors[field.name]}</div>
      )}
    </div>
  )
}

export default EmailInput
