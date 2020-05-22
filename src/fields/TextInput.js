import React, {
  useState,
  useEffect,
} from 'react'
import Skeleton from 'react-loading-skeleton'
import Label from './label'
import useLoading from '../common/hooks/useLoading'

const TextInput = (props) => {
  const {
    className, hint, type, label, placeholder, required, field, form: { errors, touched },
  } = props
  const status = touched[field.name] && errors[field.name] ? 'is-invalid' : ''

  const loading = useLoading()

  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint} />
      {loading ? (
        <div className="skeleton">
          <Skeleton height={38} />
        </div>
      ) : (
        <input
          className={`form-control ${status}`}
          {...field}
          placeholder={placeholder}
          type={type}
          required={required}
        />
      )}
      {touched[field.name] && errors[field.name] && (
        <div className="invalid-feedback">{errors[field.name]}</div>
      )}
    </div>
  )
}

export default TextInput
