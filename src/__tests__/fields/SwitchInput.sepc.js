import React from "react";
import { create } from "react-test-renderer";
import SwitchInput from '../../fields/SwitchInput'

const mockFieldObject = {
  name: 'switchInput',
  onChange: () => {

  },
  value: '',
}

const mockFormObject = {
  dirty: false,
  errors: {},
  touched: false,
}
describe("SwitchInput component", () => {
  test("Matches the snapshot", () => {
    const switchInput = create(<SwitchInput
      className="switchInput"
      hint="this is a hint"
      type="checkbo"
      field={mockFieldObject}
      form={mockFormObject}
    />);
    expect(switchInput.toJSON()).toMatchSnapshot();
  });
});