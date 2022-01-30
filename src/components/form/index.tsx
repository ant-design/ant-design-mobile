import './index.less'
import { Form } from './form'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { FormItem } from './form-item'
import { Header } from './header'
import { useForm } from 'rc-field-form'

export type FormLayout = 'vertical' | 'horizontal'
export type { FormProps, FormInstance } from './form'
export type { FormItemProps } from './form-item'
export type {
  ValidateMessages,
  FieldData,
  NamePath,
} from 'rc-field-form/es/interface'

export default attachPropertiesToComponent(Form, {
  Item: FormItem,
  Header,
  useForm,
})
