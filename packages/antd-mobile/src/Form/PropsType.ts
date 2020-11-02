import { FormInstance } from 'rc-field-form'
import {
  ValidateMessages,
  Callbacks,
  NamePath,
  EventArgs,
  StoreValue,
  Rule,
} from 'rc-field-form/es/interface'
import { BasePropsType } from '../_internal'

export interface FormPropsType<Values = any> extends BasePropsType {
  initialValues?: any
  form?: FormInstance<Values>
  validateMessages?: ValidateMessages
  onValuesChange?: Callbacks<Values>['onValuesChange']
  onFieldsChange?: Callbacks<Values>['onFieldsChange']
  onFinish?: Callbacks<Values>['onFinish']
  onFinishFailed?: Callbacks<Values>['onFinishFailed']
}

export interface FormGroupPropsType extends BasePropsType {
  renderHeader?: React.ReactNode
  radius?: boolean
  // 无样式 group, 在控件是 checkbox.group 和 radio.group 的时候需要
  unstable_noStyle?: boolean
}

export interface FormItemPropsType extends BasePropsType {
  label?: React.ReactNode
  // 控件位置, 右边， 在 label 前， 第二行， 替换 label
  position?: 'default' | 'thumb' | 'brief' | 'label'
  arrow?: boolean
  extra?: React.ReactNode
  disabled?: boolean

  dependencies?: NamePath[]
  getValueFromEvent?: (...args: EventArgs) => StoreValue
  name?: NamePath
  rules?: Rule[]
  validateFirst?: boolean | 'parallel'
  valuePropName?: string
  initialValue?: any

  // 像 checkbox.group 和 radio.group , terms 这类脱离基本表单布局的时候使用
  unstable_noStyle?: boolean
}
