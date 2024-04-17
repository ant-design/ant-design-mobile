import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React, { useContext } from 'react'
import { devWarning } from '../../utils/dev-log'
import { isDev } from '../../utils/is-dev'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { CheckIcon } from '../checkbox/check-icon'
import { NativeInput } from '../checkbox/native-input'
import { RadioGroupContext } from './group-context'

const classPrefix = `adm-radio`

export type RadioValue = string | number

export type RadioProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  value?: RadioValue
  block?: boolean
  id?: string
  icon?: (checked: boolean) => ReactNode
  children?: ReactNode
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void
} & NativeProps<'--icon-size' | '--font-size' | '--gap'>

const defaultProps = {
  defaultChecked: false,
}

export const Radio: FC<RadioProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const groupContext = useContext(RadioGroupContext)

  let [checked, setChecked] = usePropsValue<boolean>({
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
          'Radio',
          'When used within `Radio.Group`, the `checked` prop of `Radio` will not work.'
        )
      }
      if (props.defaultChecked !== undefined) {
        devWarning(
          'Radio',
          'When used within `Radio.Group`, the `defaultChecked` prop of `Radio` will not work.'
        )
      }
    }

    checked = groupContext.value.includes(value)
    setChecked = (innerChecked: boolean) => {
      if (innerChecked) {
        groupContext.check(value)
      } else {
        groupContext.uncheck(value)
      }
      mergedProps.onChange?.(innerChecked)
    }
    disabled = disabled || groupContext.disabled
  }

  const renderIcon = () => {
    if (mergedProps.icon) {
      return (
        <div className={`${classPrefix}-custom-icon`}>
          {mergedProps.icon(checked)}
        </div>
      )
    }

    return (
      <div className={`${classPrefix}-icon`}>{checked && <CheckIcon />}</div>
    )
  }

  return withNativeProps(
    mergedProps,
    <label
      onClick={mergedProps.onClick}
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: mergedProps.block,
      })}
    >
      <NativeInput
        type='radio'
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
}
