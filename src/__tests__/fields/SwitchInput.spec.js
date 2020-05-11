import React from 'react'
import SwitchInput from '../../fields/SwitchInput'

const labelValue = 'im a label!'
const hintValue = 'im the hint!'

const mockFormObject = {
  dirty: false,
  errors: {},
  touched: {},
}

const mockFieldObject = {
  name: 'switchInput',
  onChange: () => {

  },
  value: '',
}

describe('SwitchInput component', () => {
  it('Uses semantic Checkbox Component', () => {
    const wrapper = shallow(<SwitchInput
      className="textInput"
      hint={hintValue}
      label={labelValue}
      type="checkbox"
      placeholder="foobar"
      field={mockFieldObject}
      form={mockFormObject}
    />)

    expect(wrapper.children('Checkbox')).toHaveLength(1)
  })

  it('removes the value field', () => {
    const wrapper = mount(<SwitchInput
      className="textInput"
      hint={hintValue}
      label={labelValue}
      type="checkbox"
      placeholder="foobar"
      field={{
        name: 'switchInput',
        onChange: () => {

        },
        value: 'I SHOULD NOT EXIST',
      }}
      form={mockFormObject}
    />)

    expect(wrapper.props().field.value).toEqual(undefined)
  })
})
