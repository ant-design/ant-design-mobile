import './index.less'
import { Form } from './form'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { FormItem } from './form-item'
import { Header } from './header'
import { useWatch, useForm } from 'rc-field-form'
import { FormSubscribe } from './form-subscribe'
import { FormArray } from './form-array'

export type FormLayout = 'vertical' | 'horizontal'
export type { FormProps, FormInstance } from './form'
export type { FormItemProps } from './form-item'
export type { FormSubscribeProps } from './form-subscribe'
export type {
  ValidateMessages,
  FieldData,
  NamePath,
} from 'rc-field-form/es/interface'
export type {
  FormArrayField,
  FormArrayOperation,
  FormArrayProps,
} from './form-array'

export default attachPropertiesToComponent(Form, {
  Item: FormItem,
  Subscribe: FormSubscribe,
  Header,
  Array: FormArray,
  useForm,
  useWatch,
})
