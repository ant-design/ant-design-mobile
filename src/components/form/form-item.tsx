import React, { FC, useContext, useCallback, useState, useRef } from 'react'
import classNames from 'classnames'
import { NativeProps } from '../../utils/native-props'
import { Field, FormInstance } from 'rc-field-form'
import type { FieldProps } from 'rc-field-form/lib/Field'
import FieldContext from 'rc-field-form/lib/FieldContext'
import type { Meta, InternalNamePath } from 'rc-field-form/lib/interface'
import { devWarning } from '../../utils/dev-log'
import { FormContext, NoStyleItemContext } from './context'
import { toArray, isSafeSetRefComponent } from './utils'
import List, { ListItemProps } from '../list'
import type { FormLayout } from './index'
import Popover from '../popover'
import { QuestionCircleOutline } from 'antd-mobile-icons'
import { useConfig } from '../config-provider'
import { undefinedFallback } from '../../utils/undefined-fallback'

const NAME_SPLIT = '__SPLIT__'

type RenderChildren<Values = any> = (
  form: FormInstance<Values>
) => React.ReactNode
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode

type RcFieldProps = Omit<FieldProps, 'children'>

const classPrefix = `adm-form-item`

export type FormItemProps = Pick<
  RcFieldProps,
  | 'dependencies'
  | 'valuePropName'
  | 'name'
  | 'rules'
  | 'messageVariables'
  | 'trigger'
  | 'validateTrigger'
  | 'shouldUpdate'
  | 'initialValue'
> &
  Pick<
    ListItemProps,
    'style' | 'extra' | 'clickable' | 'arrow' | 'description'
  > & {
    label?: React.ReactNode
    help?: React.ReactNode
    hasFeedback?: boolean
    required?: boolean
    noStyle?: boolean
    disabled?: boolean
    hidden?: boolean
    layout?: FormLayout
    childElementPosition?: 'normal' | 'right'
    children?: ChildrenType
    onClick?: (
      e: React.MouseEvent,
      widgetRef: React.MutableRefObject<any>
    ) => void
  } & NativeProps

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
  | 'hidden'
  | 'layout'
  | 'extra'
  | 'clickable'
  | 'arrow'
  | 'description'
  | 'childElementPosition'
> & {
  onClick?: (e: React.MouseEvent) => void
  htmlFor?: string
  errors: string[]
  warnings: string[]
  children: React.ReactNode
}

const FormItemLayout: React.FC<FormItemLayoutProps> = props => {
  const {
    className,
    style,
    extra,
    label,
    help,
    required,
    children,
    htmlFor,
    hidden,
    arrow,
    childElementPosition = 'normal',
  } = props

  const context = useContext(FormContext)

  const { locale } = useConfig()

  const hasFeedback =
    props.hasFeedback !== undefined ? props.hasFeedback : context.hasFeedback
  const layout = props.layout || context.layout
  const disabled = props.disabled ?? context.disabled

  const requiredMark = (() => {
    const { requiredMarkStyle } = context
    switch (requiredMarkStyle) {
      case 'asterisk':
        return (
          required && (
            <span className={`${classPrefix}-required-asterisk`}>*</span>
          )
        )
      case 'text-required':
        return (
          required && (
            <span className={`${classPrefix}-required-text`}>
              ({locale.Form.required})
            </span>
          )
        )
      case 'text-optional':
        return (
          !required && (
            <span className={`${classPrefix}-required-text`}>
              ({locale.Form.optional})
            </span>
          )
        )
      default:
        return null
    }
  })()

  const labelElement = label ? (
    <label className={`${classPrefix}-label`} htmlFor={htmlFor}>
      {label}
      {requiredMark}
      {help && (
        <Popover content={help} mode='dark' trigger='click'>
          <span
            className={`${classPrefix}-label-help`}
            onClick={e => {
              e.preventDefault()
            }}
          >
            <QuestionCircleOutline />
          </span>
        </Popover>
      )}
    </label>
  ) : null

  const description =
    props.description || hasFeedback ? (
      <>
        {props.description}
        {hasFeedback && (
          <>
            {props.errors.map((error, index) => (
              <div
                key={`error-${index}`}
                className={`${classPrefix}-feedback-error`}
              >
                {error}
              </div>
            ))}
            {props.warnings.map((warning, index) => (
              <div
                key={`warning-${index}`}
                className={`${classPrefix}-feedback-warning`}
              >
                {warning}
              </div>
            ))}
          </>
        )}
      </>
    ) : null

  return (
    <List.Item
      style={style}
      title={layout === 'vertical' && labelElement}
      prefix={layout === 'horizontal' && labelElement}
      extra={extra}
      description={description}
      className={classNames(
        classPrefix,
        className,
        `${classPrefix}-${layout}`,
        {
          [`${classPrefix}-hidden`]: hidden,
          [`${classPrefix}-has-error`]: props.errors.length,
        }
      )}
      disabled={disabled}
      onClick={props.onClick}
      clickable={props.clickable}
      arrow={arrow}
    >
      <div
        className={classNames(
          `${classPrefix}-child`,
          `${classPrefix}-child-position-${childElementPosition}`
        )}
      >
        <div className={classNames(`${classPrefix}-child-inner`)}>
          {children}
        </div>
      </div>
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
    childElementPosition,
    description,
    // Field 相关
    disabled,
    rules,
    children,
    messageVariables,
    trigger = 'onChange',
    validateTrigger = trigger,
    onClick,
    shouldUpdate,
    dependencies,
    clickable,
    arrow,
    ...fieldProps
  } = props

  const { name: formName } = useContext(FormContext)
  const { validateTrigger: contextValidateTrigger } = useContext(FieldContext)

  const mergedValidateTrigger = undefinedFallback(
    validateTrigger,
    contextValidateTrigger,
    trigger
  )

  const widgetRef = useRef<any>(null)

  const updateRef = useRef(0)
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
    const curWarnings = meta?.warnings ?? []
    const warnings = Object.keys(subMetas).reduce(
      (subWarnings: string[], key: string) => {
        const warnings = subMetas[key]?.warnings ?? []
        if (warnings.length) {
          subWarnings = [...subWarnings, ...warnings]
        }
        return subWarnings
      },
      curWarnings
    )

    return (
      <FormItemLayout
        className={className}
        style={style}
        label={label}
        extra={extra}
        help={help}
        description={description}
        required={isRequired}
        disabled={disabled}
        hasFeedback={hasFeedback}
        htmlFor={fieldId}
        errors={errors}
        warnings={warnings}
        onClick={onClick && (e => onClick(e, widgetRef))}
        hidden={hidden}
        layout={layout}
        childElementPosition={childElementPosition}
        clickable={clickable}
        arrow={arrow}
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
  Variables.label = typeof label === 'string' ? label : ''
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
      messageVariables={Variables}
    >
      {(control, meta, context) => {
        let childNode: React.ReactNode = null

        const isRequired =
          required !== undefined
            ? required
            : rules &&
              rules.some(
                rule => !!(rule && typeof rule === 'object' && rule.required)
              )

        const nameList = toArray(name).length && meta ? meta.name : []
        const fieldId = (
          nameList.length > 0 && formName ? [formName, ...nameList] : nameList
        ).join('_')

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

          if (isSafeSetRefComponent(children)) {
            childProps.ref = (instance: any) => {
              const originRef = (children as any).ref
              if (originRef) {
                if (typeof originRef === 'function') {
                  originRef(instance)
                }
                if ('current' in originRef) {
                  originRef.current = instance
                }
              }
              widgetRef.current = instance
            }
          }

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
