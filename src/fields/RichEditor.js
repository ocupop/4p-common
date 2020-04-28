import React from 'react'
import PropTypes from 'prop-types'
import Label from './label'
// import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const RichEditor = ({ label, hint, onChange, className }) => {
  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint} />

      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="wysiwyg-editor"
        toolbarClassName="wysiwyg-toolbar-absolute"
        onEditorStateChange={onChange}
        // onContentStateChange={onChange}
        // onChange={onChange}
        toolbarOnFocus
        toolbar={{
          options: ['inline', 'blockType'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
            bold: { className: 'bordered-option-classname' },
            italic: { className: 'bordered-option-classname' },
            underline: { className: 'bordered-option-classname' },
            strikethrough: { className: 'bordered-option-classname' },
            code: { className: 'bordered-option-classname' }
          },
          blockType: {
            className: 'bordered-option-classname'
          }
        }}
      />
    </div>
  )
}

RichEditor.propTypes = {
  field: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  hint: PropTypes.string,
  onChange: PropTypes.func
}

export default RichEditor
