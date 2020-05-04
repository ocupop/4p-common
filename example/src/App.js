import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
// Exported Components
import * as Fields4P from '4p-common'
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
              component={Fields4P.TextInput}
              onChange={value => setFieldValue('textInput', value)}
              placeholder="Enter Text..."
              label="Text Input"
            />
            <Field
              name="textArea"
              type="text"
              hint="This is a hint"
              component={Fields4P.TextArea}
              onChange={value => setFieldValue('textArea', value)}
              placeholder="Enter Text..."
              label="Text Area"
            />
            <Field
              name="switchInput"
              type="checkbox"
              hint="This is a hint"
              component={Fields4P.SwitchInput}
              onChange={(e, value) => setFieldValue('switchInput', value.checked)}
              label="Switch Input"
            />
            <FormikDebug />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default App
