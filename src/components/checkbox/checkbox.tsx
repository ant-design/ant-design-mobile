import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { forwardRef, useContext, useImperativeHandle } from 'react'
import { devWarning } from '../../utils/dev-log'
import { isDev } from '../../utils/is-dev'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { CheckIcon } from './check-icon'
import { CheckboxGroupContext } from './group-context'
import { IndeterminateIcon } from './indeterminate-icon'
import { NativeInput } from './native-input'

const classPrefix = `adm-checkbox`

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

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const groupContext = useContext(CheckboxGroupContext)

  const mergedProps = mergeProps(defaultProps, props)

  let [checked, setChecked] = usePropsValue({
    value: mergedProps.checked,
    defaultValue: mergedProps.defaultChecked,
    onChange: mergedProps.onChange,
  }) as [boolean, (v: boolean) => void]
  let disabled = mergedProps.disabled

  const { value } = mergedProps
  if (groupContext && value !== undefined) {
    if (isDev) {
      if (props.checked !== undefined) {
        devWarning(
          'Checkbox',
          'When used within `Checkbox.Group`, the `checked` prop of `Checkbox` will not work.'
        )
      }
      if (props.defaultChecked !== undefined) {
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
      mergedProps.onChange?.(checked)
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
    if (mergedProps.icon) {
      return (
        <div className={`${classPrefix}-custom-icon`}>
          {mergedProps.icon(checked, mergedProps.indeterminate)}
        </div>
      )
    }

    return (
      <div className={`${classPrefix}-icon`}>
        {mergedProps.indeterminate ? (
          <IndeterminateIcon />
        ) : (
          checked && <CheckIcon />
        )}
      </div>
    )
  }

  return withNativeProps(
    mergedProps,
    <label
      onClick={mergedProps.onClick}
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked && !mergedProps.indeterminate,
        [`${classPrefix}-indeterminate`]: mergedProps.indeterminate,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: mergedProps.block,
      })}
    >
      <NativeInput
        type='checkbox'
        checked={checked}
        onChange={setChecked}
        disabled={disabled}
        id={mergedProps.id}
      />
      {renderIcon()}
      {mergedProps.children && (
        <div className={`${classPrefix}-content`}>{mergedProps.children}</div>
      )}
    </label>
  )
})
