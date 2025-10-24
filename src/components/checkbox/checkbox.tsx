import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { forwardRef, useContext, useImperativeHandle } from 'react'
import { devWarning } from '../../utils/dev-log'
import { isDev } from '../../utils/is-dev'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import { CheckIcon } from './check-icon'
import { CheckboxGroupContext } from './group-context'
import { IndeterminateIcon } from './indeterminate-icon'
import { NativeInput } from './native-input'

export type CheckboxValue = string | number

export type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  value?: CheckboxValue
  indeterminate?: boolean
  block?: boolean
  id?: string
  icon?: (checked: boolean, indeterminate: boolean) => ReactNode
  children?: ReactNode
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void
  prefixCls?: string
} & NativeProps<'--icon-size' | '--font-size' | '--gap'>

const defaultProps = {
  defaultChecked: false,
  indeterminate: false,
}

export type CheckboxRef = {
  check: () => void
  uncheck: () => void
  toggle: () => void
}

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((p, ref) => {
  const groupContext = useContext(CheckboxGroupContext)

  const props = mergeProps(defaultProps, p)
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('checkbox', props.prefixCls)

  let [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  }) as [boolean, (v: boolean) => void]
  let disabled = props.disabled

  const { value } = props
  if (groupContext && value !== undefined) {
    if (isDev) {
      if (p.checked !== undefined) {
        devWarning(
          'Checkbox',
          'When used within `Checkbox.Group`, the `checked` prop of `Checkbox` will not work.'
        )
      }
      if (p.defaultChecked !== undefined) {
        devWarning(
          'Checkbox',
          'When used within `Checkbox.Group`, the `defaultChecked` prop of `Checkbox` will not work.'
        )
      }
    }

    checked = groupContext.value.includes(value)
    setChecked = (checked: boolean) => {
      if (checked) {
        groupContext.check(value)
      } else {
        groupContext.uncheck(value)
      }
      props.onChange?.(checked)
    }
    disabled = disabled || groupContext.disabled
  }

  useImperativeHandle(ref, () => ({
    check: () => {
      setChecked(true)
    },
    uncheck: () => {
      setChecked(false)
    },
    toggle: () => {
      setChecked(!checked)
    },
  }))

  const renderIcon = () => {
    if (props.icon) {
      return (
        <div className={`${prefixCls}-custom-icon`}>
          {props.icon(checked, props.indeterminate)}
        </div>
      )
    }

    return (
      <div className={`${prefixCls}-icon`}>
        {props.indeterminate ? <IndeterminateIcon /> : checked && <CheckIcon />}
      </div>
    )
  }

  return withNativeProps(
    props,
    <label
      onClick={props.onClick}
      className={classNames(prefixCls, {
        [`${prefixCls}-checked`]: checked && !props.indeterminate,
        [`${prefixCls}-indeterminate`]: props.indeterminate,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-block`]: props.block,
      })}
    >
      <NativeInput
        type='checkbox'
        checked={checked}
        onChange={setChecked}
        disabled={disabled}
        id={props.id}
      />
      {renderIcon()}
      {props.children && (
        <div className={`${prefixCls}-content`}>{props.children}</div>
      )}
    </label>
  )
})
