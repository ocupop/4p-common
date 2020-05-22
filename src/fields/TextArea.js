import React from 'react'
import Skeleton from 'react-loading-skeleton'
import useLoading from '../common/hooks/useLoading'
import Label from './label'

const TextArea = ({
  className, label, hint, rows, placeholder, type, field, form: { errors, touched },
}) => {
  const status = touched[field.name] && errors[field.name] ? 'is-invalid' : ''

  const [loading] = useLoading()

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
