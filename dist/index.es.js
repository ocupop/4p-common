import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Checkbox } from 'semantic-ui-react';

var FieldHint = function FieldHint(_ref) {
  var content = _ref.content;

  return React.createElement(
    'div',
    { className: 'pt-1 ml-1 d-inline-block' },
    React.createElement(Popup, {
      trigger: React.createElement('i', { className: 'ri-question-fill text-mid' }),
      content: content,
      position: 'right center',
      inverted: true,
      size: 'tiny'
    })
  );
};

FieldHint.propTypes = {
  content: PropTypes.string
};

var label = function label(_ref) {
  var hint = _ref.hint,
      label = _ref.label;

  return React.createElement(
    'label',
    { className: label ? '' : 'sr-only' },
    React.createElement(
      'span',
      { className: 'mr-2' },
      label
    ),
    hint && React.createElement(FieldHint, { content: hint })
  );
};

label.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var TextInput = function TextInput(_ref) {
  var className = _ref.className,
      hint = _ref.hint,
      type = _ref.type,
      label$$1 = _ref.label,
      placeholder = _ref.placeholder,
      required = _ref.required,
      field = _ref.field,
      _ref$form = _ref.form,
      errors = _ref$form.errors,
      touched = _ref$form.touched;

  var status = touched[field.name] && errors[field.name] ? 'is-invalid' : '';
  return React.createElement(
    'div',
    { className: 'form-group ' + className },
    React.createElement(label, { label: label$$1, hint: hint }),
    React.createElement('input', _extends({
      className: 'form-control ' + status
    }, field, {
      placeholder: placeholder,
      type: type,
      required: required
    })),
    touched[field.name] && errors[field.name] && React.createElement(
      'div',
      { className: 'invalid-feedback' },
      errors[field.name]
    )
  );
};

var TextArea = function TextArea(_ref) {
  var className = _ref.className,
      label$$1 = _ref.label,
      hint = _ref.hint,
      rows = _ref.rows,
      placeholder = _ref.placeholder,
      type = _ref.type,
      field = _ref.field,
      _ref$form = _ref.form,
      errors = _ref$form.errors,
      touched = _ref$form.touched;

  var status = touched[field.name] && errors[field.name] ? 'is-invalid' : '';
  return React.createElement(
    'div',
    { className: 'form-group ' + className },
    React.createElement(label, { label: label$$1, hint: hint }),
    React.createElement('textarea', _extends({
      className: 'form-control ' + status
    }, field, {
      placeholder: placeholder,
      rows: rows,
      type: type })),
    touched[field.name] && errors[field.name] && React.createElement(
      'span',
      { className: 'invalid-feedback' },
      errors[field.name]
    )
  );
};

var SwitchInput = function SwitchInput(_ref) {
  var className = _ref.className,
      hint = _ref.hint,
      type = _ref.type,
      label = _ref.label,
      field = _ref.field,
      onChange = _ref.onChange,
      toggle = _ref.toggle,
      _ref$form = _ref.form,
      errors = _ref$form.errors,
      touched = _ref$form.touched;

  // deleting field.value, this throws an error with the Checkbox Element.
  delete field.value;
  return React.createElement(
    'div',
    { className: 'form-group ' + className },
    React.createElement(Checkbox, _extends({}, field, { type: type, checked: field.checked, label: label, onChange: onChange, toggle: toggle })),
    hint && React.createElement(FieldHint, { content: hint })
  );
};

export { TextInput, TextArea, SwitchInput };
//# sourceMappingURL=index.es.js.map
