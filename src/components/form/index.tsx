import './index.less'
import { Form } from './form'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { FormItem } from './form-item'
import { useForm } from 'rc-field-form'

export type FormLayout = 'vertical' | 'horizontal'

export type { FormProps } from './form'
export type { FormInstance } from 'rc-field-form'

export default attachPropertiesToComponent(Form, {
  Item: FormItem,
  useForm,
})
