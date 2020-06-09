import TextInput from './fields/TextInput'
import TextArea from './fields/TextArea'
import SwitchInput from './fields/SwitchInput'
import SelectInput from './fields/SelectInput'
import CreateSelect from './fields/CreateSelect'
// TODO: We're seeing an error with RichEditor around react-draft-wysiwyg
// See here for more information: https://github.com/ocupop/4p-common/issues/14
// import RichEditor from './fields/RichEditor'
import NumberInput from './fields/NumberInput'
import PhoneInput from './fields/PhoneInput'
import EmailInput from './fields/EmailInput'
import CurrencyInput from './fields/CurrencyInput'
import SentryTransport from './common/logger/SentryTransport'

export {
  TextInput,
  TextArea,
  SwitchInput,
  SelectInput,
  CreateSelect,
  // RichEditor,
  NumberInput,
  PhoneInput,
  EmailInput,
  CurrencyInput,
  SentryTransport,
}
