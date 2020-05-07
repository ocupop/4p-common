import React from "react";
import { create } from "react-test-renderer";
import TextArea from '../../fields/TextArea'

const mockFieldObject = {
  name: 'textArea',
  onChange: () => {

  },
  value: '',
}

const mockFormObject = {
  dirty: false,
  errors: {},
  touched: false,
}
describe("TextArea component", () => {
  test("Matches the snapshot", () => {
    const textArea = create(<TextArea
      className="textArea"
      hint="this is a hint"
      type="text"
      placeholder="foobar"
      required
      field={mockFieldObject}
      form={mockFormObject}
    />);
    expect(textArea.toJSON()).toMatchSnapshot();
  });
});
