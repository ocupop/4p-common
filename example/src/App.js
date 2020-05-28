import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
// Exported Components
import {TextInput, TextArea, RichEditor, NumberInput, SwitchInput, SelectInput, CreateSelect, EmailInput, PhoneInput, CurrencyInput} from '4p-common'
import FormikDebug from './components/FormikDebug'
import { convertToRaw } from 'draft-js'

const validationSchema = Yup.object().shape({
  textInput: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
})

const App = () => {
  const initialValues = {
    textInput: '',
    textArea: '',
    switchInput: false
  }
  return (
    <section>
      <div className="container">
      <h1>Form Sandbox</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          resetForm()
        }}>
        {({ values, setFieldValue }) => (
          <Form>
            <Field
              name="textInput"
              type="text"
              hint="This is a hint"
              component={TextInput}
              onChange={value => setFieldValue('textInput', value)}
              placeholder="Enter Text..."
              label="Text Input"
            />
            <Field
              name="textArea"
              type="text"
              hint="This is a hint"
              component={TextArea}
              onChange={value => setFieldValue('textArea', value)}
              placeholder="Enter Text..."
              label="Text Area"
            />
            <Field
              name="switchInput"
              type="checkbox"
              hint="This is a hint"
              component={SwitchInput}
              onChange={(e, value) => setFieldValue('switchInput', value.checked)}
              label="Switch Input"
            />
            <Field
              name="selectInput"
              type="text"
              hint="This is a hint"
              component={SelectInput}
              options={[
                {label: "label 1", value: "l1"},
                {label: "label 2", value: "l2"},
                {label: "label 3", value: "l3"}
              ]}
              onChange={value => setFieldValue("selectInput", value)}
              label="Select Input"
            />
            <Field
              name="createSelect"
              type="text"
              component={CreateSelect}
              options={[
                {label: "label 1", value: "l1"},
                {label: "label 2", value: "l2"},
                {label: "label 3", value: "l3"}
              ]}
              isMulti
              isSearchable
              onChange={(value) => setFieldValue('createSelect', value)}
              label="Create Select"
            />
            <Field
              name="richInput"
              type="text"
              hint="This is a hint"
              component={RichEditor}
              placeholder="Enter Text..."
              onChange={value => setFieldValue("richInput", convertToRaw(value.getCurrentContent()))}
              label="Rich Text Input"
            />
            <Field
              className="mb-0"
              name="numberInput"
              label="Number Input"
              type="number"
              component={NumberInput}
              onChange={value => setFieldValue("numberInput", value)}
              placeholder="0"
              maskOptions={{ allowDecimal: false, requireDecimal: false }}
            />
            <Field
              className="mb-0"
              name="currencyInput"
              label="Currency Input"
              type="text"
              placeholder="$0.00"
              component={CurrencyInput}
              onChange={value => setFieldValue("currencyInput", value)}
              maskOptions={{ allowDecimal: false, requireDecimal: false }}
            />
            <Field
              name="emailInput"
              type="text"
              hint="This is a hint"
              component={EmailInput}
              placeholder="___@___.___"
              label="Email Input"
            />
            <Field
              name="phoneInput"
              type="text"
              hint="This is a hint"
              component={PhoneInput}
              placeholder="(___) ___-____"
              label="Phone Input"
            />
            <FormikDebug />
          </Form>
        )}
      </Formik>
    </div>
    </section>
  )
}

export default App
