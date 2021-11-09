import React, { FC, useContext, useCallback, useState } from 'react'
import classNames from 'classnames'
import { NativeProps } from '../../utils/native-props'
import { Field, FormInstance } from 'rc-field-form'
import type { FieldProps } from 'rc-field-form/lib/Field'
import FieldContext from 'rc-field-form/lib/FieldContext'
import type { Meta, InternalNamePath } from 'rc-field-form/lib/interface'
import { devWarning } from '../../utils/dev-log'

import { FormContext, NoStyleItemContext } from './context'
import { toArray } from './utils'
import List, { ListItemProps } from '../list'
import type { FormLayout } from './index'

const NAME_SPLIT = '__SPLIT__'

type RenderChildren<Values = any> = (
  form: FormInstance<Values>
) => React.ReactNode
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode

type RcFieldProps = Omit<FieldProps, 'children'>

const classPrefix = `adm-form-item`

export type FormItemProps = RcFieldProps &
  NativeProps &
  Pick<ListItemProps, 'style' | 'onClick' | 'extra'> & {
    label?: string
    help?: string
    hasFeedback?: boolean
    required?: boolean
    noStyle?: boolean
    disabled?: boolean
    hidden?: boolean
    layout?: FormLayout
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
  | 'onClick'
  | 'hidden'
  | 'layout'
  | 'extra'
> & {
  htmlFor?: string
  errors?: string[]
}

const FormItemLayout: React.FC<FormItemLayoutProps> = props => {
  const {
    className,
    style,
    extra,
    label,
    help,
    required,
    disabled,
    children,
    htmlFor,
    hidden,
    errors,
  } = props

  const context = useContext(FormContext)

  const hasFeedback = props.hasFeedback || context.hasFeedback
  const layout = props.layout || context.layout

  const feedback = hasFeedback && errors && errors.length > 0 ? errors[0] : null

  const labelElement = label ? (
    <label className={`${classPrefix}-label`} htmlFor={htmlFor}>
      {label}
      {required && <span className={`${classPrefix}-label-required`}>*</span>}
      {help && <span className={`${classPrefix}-label-help`}>{help}</span>}
    </label>
  ) : null

  const descriptionElement = feedback && (
    <div className={`${classPrefix}-footer`}>{feedback}</div>
  )

  return (
    <List.Item
      style={style}
      title={layout === 'vertical' && labelElement}
      prefix={layout === 'horizontal' && labelElement}
      extra={extra}
      description={descriptionElement}
      className={classNames(classPrefix, className, {
        [`${classPrefix}-hidden`]: hidden,
      })}
      disabled={disabled}
      onClick={props.onClick}
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
    label,
    help,
    extra,
    hasFeedback,
    name,
    required,
    noStyle,
    hidden,
    layout,
    // Field 相关
    disabled,
    rules,
    children,
    messageVariables,
    trigger = 'onChange',
    validateTrigger,
    onClick,
    shouldUpdate,
    dependencies,
    ...fieldProps
  } = props

  const { validateTrigger: contextValidateTrigger } =
    React.useContext(FieldContext)
  const mergedValidateTrigger =
    validateTrigger !== undefined ? validateTrigger : contextValidateTrigger

  const updateRef = React.useRef(0)
  updateRef.current += 1

  const [subMetas, setSubMetas] = useState<Record<string, Meta>>({})
  const onSubMetaChange = useCallback(
    (subMeta: Meta & { destroy?: boolean }, namePath: InternalNamePath) => {
      setSubMetas(prevSubMetas => {
        const nextSubMetas = { ...prevSubMetas }
        const nameKey = namePath.join(NAME_SPLIT)
        if (subMeta.destroy) {
          delete nextSubMetas[nameKey]
        } else {
          nextSubMetas[nameKey] = subMeta
        }
        return nextSubMetas
      })
    },
    [setSubMetas]
  )

  function renderLayout(
    baseChildren: React.ReactNode,
    fieldId?: string,
    meta?: Meta,
    isRequired?: boolean
  ) {
    if (noStyle && !hidden) {
      return baseChildren
    }

    const curErrors = meta?.errors ?? []
    const errors = Object.keys(subMetas).reduce(
      (subErrors: string[], key: string) => {
        const errors = subMetas[key]?.errors ?? []
        if (errors.length) {
          subErrors = [...subErrors, ...errors]
        }
        return subErrors
      },
      curErrors
    )

    return (
      <FormItemLayout
        className={className}
        style={style}
        label={label}
        extra={extra}
        help={help}
        required={isRequired}
        disabled={disabled}
        hasFeedback={hasFeedback}
        htmlFor={fieldId}
        errors={errors}
        onClick={onClick}
        hidden={hidden}
        layout={layout}
      >
        <NoStyleItemContext.Provider value={onSubMetaChange}>
          {baseChildren}
        </NoStyleItemContext.Provider>
      </FormItemLayout>
    )
  }

  const isRenderProps = typeof children === 'function'

  if (!name && !isRenderProps && !props.dependencies) {
    return renderLayout(children) as JSX.Element
  }

  let Variables: Record<string, string> = {}
  if (typeof label === 'string') {
    Variables.label = label
  }
  if (messageVariables) {
    Variables = { ...Variables, ...messageVariables }
  }

  const notifyParentMetaChange = useContext(NoStyleItemContext)
  const onMetaChange = (meta: Meta & { destroy?: boolean }) => {
    if (noStyle && notifyParentMetaChange) {
      const namePath = meta.name
      notifyParentMetaChange(meta, namePath)
    }
  }

  return (
    <Field
      {...fieldProps}
      name={name}
      shouldUpdate={shouldUpdate}
      dependencies={dependencies}
      rules={rules}
      trigger={trigger}
      validateTrigger={mergedValidateTrigger}
      onMetaChange={onMetaChange}
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

        if (shouldUpdate && dependencies) {
          devWarning(
            'Form.Item',
            "`shouldUpdate` and `dependencies` shouldn't be used together."
          )
        }

        if (isRenderProps) {
          if ((shouldUpdate || dependencies) && !name) {
            childNode = (children as RenderChildren)(context)
          } else {
            if (!(shouldUpdate || dependencies)) {
              devWarning(
                'Form.Item',
                '`children` of render props only work with `shouldUpdate` or `dependencies`.'
              )
            }
            if (name) {
              devWarning(
                'Form.Item',
                "Do not use `name` with `children` of render props since it's not a field."
              )
            }
          }

          // not render props
        } else if (dependencies && !name) {
          devWarning(
            'Form.Item',
            'Must set `name` or use render props when `dependencies` is set.'
          )
        } else if (React.isValidElement(children)) {
          if (children.props.defaultValue) {
            devWarning(
              'Form.Item',
              '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.'
            )
          }
          const childProps = { ...children.props, ...control }

          if (!childProps.id) {
            childProps.id = fieldId
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
          if (name) {
            devWarning(
              'Form.Item',
              '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.'
            )
          }
          childNode = children
        }

        return renderLayout(childNode, fieldId, meta, isRequired)
      }}
    </Field>
  )
}
