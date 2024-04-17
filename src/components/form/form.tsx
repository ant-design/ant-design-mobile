import classNames from 'classnames'
import merge from 'deepmerge'
import type {
  FormInstance as RCFormInstance,
  FormProps as RcFormProps,
} from 'rc-field-form'
import RcForm from 'rc-field-form'
import type { ForwardedRef, ReactNode } from 'react'
import React, { forwardRef, useMemo } from 'react'
import { NativeProps } from '../../utils/native-props'
import { traverseReactNode } from '../../utils/traverse-react-node'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import List, { ListProps } from '../list'
import { FormContext, FormContextType, defaultFormContext } from './context'
import { FormArray } from './form-array'
import { Header } from './header'

const classPrefix = 'adm-form'

export type FormInstance = Pick<
  RCFormInstance,
  | 'getFieldValue'
  | 'getFieldsValue'
  | 'getFieldError'
  | 'getFieldsError'
  | 'isFieldTouched'
  | 'isFieldsTouched'
  | 'resetFields'
  | 'setFields'
  | 'setFieldValue'
  | 'setFieldsValue'
  | 'submit'
  | 'validateFields'
>

export type FormProps = Pick<
  RcFormProps,
  | 'form'
  | 'initialValues'
  | 'name'
  | 'preserve'
  | 'validateMessages'
  | 'validateTrigger'
  | 'onFieldsChange'
  | 'onFinish'
  | 'onFinishFailed'
  | 'onValuesChange'
  | 'children'
> &
  NativeProps<
    '--border-inner' | '--border-top' | '--border-bottom' | '--prefix-width'
  > &
  Partial<FormContextType> & {
    footer?: ReactNode
    mode?: ListProps['mode']
  }

const defaultProps = defaultFormContext

export const Form = forwardRef<FormInstance, FormProps>((props, ref) => {
  const mergedProps = mergeProps(defaultProps, props)
  const {
    className,
    style,
    hasFeedback,
    children,
    layout,
    footer,
    mode,
    disabled,
    requiredMarkStyle,
    ...formProps
  } = mergedProps

  const { locale } = useConfig()

  const validateMessages = useMemo(
    () =>
      merge(
        locale.Form.defaultValidateMessages,
        formProps.validateMessages || {}
      ),
    [locale.Form.defaultValidateMessages, formProps.validateMessages]
  )

  const lists: ReactNode[] = []

  let currentHeader: ReactNode = null
  let items: ReactNode[] = []
  let count = 0
  function collect() {
    if (items.length === 0) return
    count += 1
    lists.push(
      <List header={currentHeader} key={count} mode={mode}>
        {items}
      </List>
    )
    items = []
  }
  traverseReactNode(mergedProps.children as ReactNode, child => {
    if (React.isValidElement(child)) {
      if (child.type === Header) {
        collect()
        currentHeader = child.props.children
        return
      }
      if (child.type === FormArray) {
        collect()
        lists.push(child)
        return
      }
    }
    items.push(child)
  })
  collect()

  return (
    <RcForm
      className={classNames(classPrefix, className)}
      style={style}
      ref={ref as ForwardedRef<RCFormInstance>}
      {...formProps}
      validateMessages={validateMessages}
    >
      <FormContext.Provider
        value={{
          name: formProps.name,
          hasFeedback,
          layout,
          requiredMarkStyle,
          disabled,
        }}
      >
        {lists}
      </FormContext.Provider>
      {footer && <div className={`${classPrefix}-footer`}>{footer}</div>}
    </RcForm>
  )
})
