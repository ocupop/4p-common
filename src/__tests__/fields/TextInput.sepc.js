import React from "react";
import { create } from "react-test-renderer";
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
  touched: false,
}
describe("TextInput component", () => {
  test("Matches the snapshot", () => {
    const textInput = create(<TextInput
      className="textInput"
      hint="this is a hint"
      type="text"
      placeholder="foobar"
      required
      field={mockFieldObject}
      form={mockFormObject}
    />);
    expect(textInput.toJSON()).toMatchSnapshot();
  });
});
