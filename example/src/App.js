import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
// Exported Components
import {TextInput, TextArea, SwitchInput, SelectInput} from '4p-common'
import FormikDebug from './components/FormikDebug'
//import { TextInput } from '4p-common'

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
    <div>
      <h1>hello world</h1>
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
            <FormikDebug />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default App
