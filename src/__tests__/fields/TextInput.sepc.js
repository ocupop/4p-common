import React from 'react'
import TextInput from '../../fields/TextInput'

const mockFieldObject = {
  name: 'textInput',
  onChange: () => {

  },
  value: '',
}

const mockFormObject = {
  dirty: false,
  errors: {},
  touched: {},
}

const labelValue = 'im a label!'
const hintValue = 'im the hint!'

describe('TextInput component', () => {
  it('should render an input filed', () => {
    const wrapper = shallow(<TextInput
      className="textInput"
      hint={hintValue}
      label={labelValue}
      type="text"
      placeholder="foobar"
      required
      field={mockFieldObject}
      form={mockFormObject}
    />)
    expect(wrapper.children('input')).toHaveLength(1)
  })

  it('renders the correct input and hint value', () => {
    const wrapper = shallow(<TextInput
      className="textInput"
      hint={hintValue}
      label={labelValue}
      type="text"
      placeholder="foobar"
      required
      field={mockFieldObject}
      form={mockFormObject}
    />)

    expect(wrapper.find('label').prop('hint')).toEqual(hintValue)
    expect(wrapper.find('label').prop('label')).toEqual(labelValue)
  })

  it('simulates a touched trigger', () => {
    const wrapper = shallow(<TextInput
      className="textInput"
      hint={hintValue}
      label={labelValue}
      type="text"
      placeholder="foobar"
      required
      field={mockFieldObject}
      form={mockFormObject}
    />)
    expect(wrapper.find('.is-invalid')).toHaveLength(0)

    wrapper.setProps({
      form: {
        dirty: false,
        errors: { textInput: 'Required' },
        touched: { textInput: true },
      },
    })

    expect(wrapper.find('.is-invalid')).toHaveLength(1)
  })
})
