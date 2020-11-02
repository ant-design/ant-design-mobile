import * as React from 'react'
import classnames from 'classnames'
import RcForm, { FormInstance } from 'rc-field-form'
import { withError } from '../rmc'
import { FormPropsType } from './PropsType'

import { useForm } from 'rc-field-form'
import Group from './Group'
import Item from './Item'

import '@ant-design/mobile-styles/lib/Form'

const Form: React.FC<
  FormPropsType & {
    ref?: React.Ref<FormInstance>
  }
> & {
  Group: typeof Group
  Item: typeof Item
  useForm: typeof useForm
} = props => {
  const {
    // @ts-ignore
    forwardRef,
    className,
    ...rest
  } = props

  return (
    <RcForm
      className={classnames(className, 'amd-form')}
      {...rest}
      ref={forwardRef}
    />
  )
}

Form.Group = Group
Form.Item = Item
Form.useForm = useForm

Form.displayName = 'Form'
export default withError(Form, {
  forwardRef: true,
})
