import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { TextInput } from '../fields'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

const mockFieldObject = {
  name: 'textInput',
  onChange: () => {

  },
  value: '',
}

const mockFormObject = {
  dirty: false,
  errors: {},
  touched: false,
}

// className, hint, type, label, placeholder, required, field, form: { errors, touched },

describe('TextInput Component', () => {
  test('It shows a text input field', () => {
    act(() => {
      ReactDOM.render(
        <TextInput
          className="textInput"
          hint="this is a hint"
          type="text"
          placeholder="foobar"
          required
          field={mockFieldObject}
          form={mockFormObject}
        />,
        container,
      )
    })
  })
})
