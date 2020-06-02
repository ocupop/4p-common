import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertFromRaw } from 'draft-js'
// import commonjs from 'rollup-plugin-commonjs'
import useLoading from '../common/hooks/useLoading'
import Label from './label'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const RichEditor = ({
  className, label, hint, onEditorStateChange, field,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [loading] = useLoading()

  // commonjs({
  //   namedExports: {
  //     // https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module
  //     // https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
  //     // left-hand side can be an absolute path, a path
  //     // relative to the current directory, or the name
  //     // of a module in node_modules
  //     'draft-js': ['EditorState', 'convertFromRaw'],
  //   },
  // })

  useEffect(() => {
    if (field.value) {
      const contentState = convertFromRaw(field.value)
      setEditorState(EditorState.createWithContent(contentState))
    }
  }, [field.value])

  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint} />
      {loading ? (
        <div>
          <Skeleton height={110} />
        </div>
      ) : (
        <Editor
          editorClassName="border pl-3 form-control-lg"
          toolbarClassName="wysiwyg-toolbar-absolute"
          placeholder="Write something here..."
          onEditorStateChange={onEditorStateChange}
          stripPastedStyles
          editorState={editorState}
          toolbar={{
            options: ['inline', 'blockType'],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough'],
              bold: { className: 'bordered-option-classname' },
              italic: { className: 'bordered-option-classname' },
              underline: { className: 'bordered-option-classname' },
              strikethrough: { className: 'bordered-option-classname' },
            },
            blockType: {
              className: 'bordered-option-classname',
            },
          }}
        />
      )}
    </div>
  )
}

RichEditor.propTypes = {
  field: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  hint: PropTypes.string,
  onChange: PropTypes.func,
}

export default RichEditor
