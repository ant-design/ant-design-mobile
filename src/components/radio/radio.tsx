import React, { FC, useContext, useEffect, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import classNames from 'classnames'
import { RadioGroupContext } from './group-context'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { CheckIcon } from '../checkbox/check-icon'
import { devWarning } from '../../utils/dev-log'
import { isDev } from '../../utils/is-dev'

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
  icon?: (checked: boolean) => React.ReactNode
} & NativeProps<'--icon-size' | '--font-size' | '--gap'>

const defaultProps = {
  defaultChecked: false,
}

export const Radio: FC<RadioProps> = p => {
  const props = mergeProps(defaultProps, p)
  const groupContext = useContext(RadioGroupContext)

  let [checked, setChecked] = usePropsValue<boolean>({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  })
  let disabled = props.disabled

  const { value } = props
  if (groupContext && value !== undefined) {
    if (isDev) {
      if (p.checked !== undefined) {
        devWarning(
          'Radio',
          'When used within `Radio.Group`, the `checked` prop of `Radio` will not work.'
        )
      }
      if (p.defaultChecked !== undefined) {
        devWarning(
          'Radio',
          'When used within `Radio.Group`, the `defaultChecked` prop of `Radio` will not work.'
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

  const renderIcon = () => {
    if (props.icon) {
      return (
        <div className={`${classPrefix}-custom-icon`}>
          {props.icon(checked)}
        </div>
      )
    }

    return (
      <div className={`${classPrefix}-icon`}>{checked && <CheckIcon />}</div>
    )
  }

  const inputRef = useRef<HTMLInputElement>(null)
  const labelRef = useRef<HTMLLabelElement>(null)
  useEffect(() => {
    labelRef.current?.addEventListener(
      'click',
      e => {
        if (e.target !== inputRef.current) {
          e.stopPropagation()
          e.stopImmediatePropagation()
        }
      },
      {
        capture: false,
      }
    )
  }, [])

  return withNativeProps(
    props,
    <label
      ref={labelRef}
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: props.block,
      })}
    >
      <input
        ref={inputRef}
        type='radio'
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
        disabled={disabled}
        id={props.id}
      />
      {renderIcon()}
      {props.children && (
        <div className={`${classPrefix}-content`}>{props.children}</div>
      )}
    </label>
  )
}
