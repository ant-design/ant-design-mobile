import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import { Field, FormInstance } from 'rc-field-form'
import type { FieldProps } from 'rc-field-form/lib/Field'
import FieldContext from 'rc-field-form/lib/FieldContext'
import type { Meta } from 'rc-field-form/lib/interface'

import { FormContext } from './context'
import { toArray } from './utils'
import List, { ListItemProps } from '../list'
import type { FormLayout } from './index'

type RenderChildren<Values = any> = (
  form: FormInstance<Values>
) => React.ReactNode
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode

type RcFieldProps = Omit<FieldProps, 'children'>

const classPrefix = `am-form-item`

type FormItemProps = RcFieldProps &
  ElementProps &
  Pick<ListItemProps, 'style'> & {
    label?: string
    help?: string
    hasFeedback?: boolean
    required?: boolean
    noStyle?: boolean
    disabled?: boolean
    children: ChildrenType
  }

interface MemoInputProps {
  value: any
  update: number
  children: React.ReactNode
}

const MemoInput = React.memo(
  ({ children }: MemoInputProps) => children as JSX.Element,
  (prev, next) => prev.value === next.value && prev.update === next.update
)

type FormItemLayoutProps = Pick<
  FormItemProps,
  | 'className'
  | 'style'
  | 'required'
  | 'hasFeedback'
  | 'disabled'
  | 'label'
  | 'help'
> & {
  htmlFor?: string
  meta?: Meta
  layout?: FormLayout
}

const FormItemLayout: React.FC<FormItemLayoutProps> = props => {
  const {
    className,
    style,
    label,
    help,
    required,
    disabled,
    meta,
    children,
    htmlFor,
  } = props

  const context = useContext(FormContext)

  const hasFeedback = props.hasFeedback || context.hasFeedback
  const layout = props.layout || context.layout

  const formItemLabelClass = classNames(`${classPrefix}-label`, {
    [`${classPrefix}-label-disable`]: disabled,
  })

  const feedback =
    hasFeedback && meta && meta.errors.length > 0 ? meta.errors[0] : null

  const labelElement = (
    <label className={formItemLabelClass} htmlFor={htmlFor}>
      {required && <span className={`${classPrefix}-label-required`}>*</span>}
      {label}
      {help && <span className={`${classPrefix}-label-help`}>{help}</span>}
    </label>
  )

  const descriptionElement = feedback && (
    <div className={`${classPrefix}-footer`}>{feedback}</div>
  )

  return (
    <List.Item
      style={style}
      title={layout === 'vertical' && labelElement}
      prefix={layout === 'horizontal' && labelElement}
      description={descriptionElement}
      className={classNames(classPrefix, className)}
    >
      {children}
    </List.Item>
  )
}

export const FormItem: FC<FormItemProps> = props => {
  const {
    // 样式相关
    className,
    style,
    // FormItem 相关
    label: displayLabel,
    help,
    hasFeedback,
    name,
    required,
    noStyle,
    // Field 相关
    disabled,
    rules,
    children,
    messageVariables,
    trigger = 'onChange',
    validateTrigger,
    ...fieldProps
  } = props

  const { validateTrigger: contextValidateTrigger } =
    React.useContext(FieldContext)
  const mergedValidateTrigger =
    validateTrigger !== undefined ? validateTrigger : contextValidateTrigger

  const updateRef = React.useRef(0)
  updateRef.current += 1

  // 如果 label 未设置，那么尝试使用 name 作为 label
  const label = displayLabel
    ? displayLabel
    : typeof name === 'string'
    ? name
    : undefined

  function renderLayout(
    baseChildren: React.ReactNode,
    fieldId?: string,
    meta?: Meta,
    isRequired?: boolean
  ) {
    if (noStyle) {
      return baseChildren
    }

    return (
      <FormItemLayout
        className={className}
        style={style}
        label={label}
        help={help}
        required={isRequired}
        disabled={disabled}
        hasFeedback={hasFeedback}
        htmlFor={fieldId}
        meta={meta}
      >
        {baseChildren}
      </FormItemLayout>
    )
  }

  const isRenderProps = typeof children === 'function'

  if (!name && !isRenderProps && !props.dependencies) {
    return renderLayout(children) as JSX.Element
  }

  let variables: Record<string, string> = {}
  if (typeof label === 'string') {
    variables.label = label
  }
  if (messageVariables) {
    variables = { ...variables, ...messageVariables }
  }

  return (
    <Field
      {...fieldProps}
      name={name}
      rules={rules}
      trigger={trigger}
      validateTrigger={mergedValidateTrigger}
    >
      {(control, meta, context) => {
        let childNode: React.ReactNode = null

        const isRequired =
          required !== undefined
            ? required
            : !!(
                rules &&
                rules.some(rule => {
                  if (rule && typeof rule === 'object' && rule.required) {
                    return true
                  }
                  return false
                })
              )

        const fieldId = (toArray(name).length && meta ? meta.name : []).join(
          '_'
        )

        if (
          isRenderProps &&
          (props.shouldUpdate || props.dependencies) &&
          !name
        ) {
          childNode = (children as RenderChildren)(context)
        } else if (React.isValidElement(children)) {
          const childProps = { ...children.props, ...control }

          if (!childProps.id) {
            childProps.id = fieldId
          }

          if (disabled) {
            childProps.disabled = disabled
          }

          // We should keep user origin event handler
          const triggers = new Set<string>([
            ...toArray(trigger),
            ...toArray(mergedValidateTrigger),
          ])

          triggers.forEach(eventName => {
            childProps[eventName] = (...args: any[]) => {
              control[eventName]?.(...args)
              children.props[eventName]?.(...args)
            }
          })

          childNode = (
            <MemoInput
              value={control[props.valuePropName || 'value']}
              update={updateRef.current}
            >
              {React.cloneElement(children, childProps)}
            </MemoInput>
          )
        } else {
          childNode = children
        }

        return renderLayout(childNode, fieldId, meta, isRequired)
      }}
    </Field>
  )
}
