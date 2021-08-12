import { Form } from './form'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { FormItem } from './form-item'
import { useForm } from 'rc-field-form'

export default attachPropertiesToComponent(Form, {
  Item: FormItem,
  useForm,
})
