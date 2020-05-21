import React, {
  useState,
  useEffect,
} from 'react'
import Skeleton from 'react-loading-skeleton'
import Label from './label'

const TextInput = (props) => {
  const [loading, setLoading] = useState()
  const {
    className, hint, type, label, placeholder, required, field, form: { errors, touched },
  } = props
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
