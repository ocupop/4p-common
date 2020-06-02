import React from 'react'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import { Editor } from 'react-draft-wysiwyg'
import useLoading from '../common/hooks/useLoading'
import Label from './label'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const RichEditor = ({
  className, label, hint, onChange, value,
}) => {
  const [loading] = useLoading()
  const editorState = value

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
          onEditorStateChange={onChange}
          stripPastedStyles
          editorState={editorState}
          // onContentStateChange={onChange}
          // onChange={onChange}
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
