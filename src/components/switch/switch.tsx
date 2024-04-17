import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React, { useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { isPromise } from '../../utils/validate'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import { SpinIcon } from './spin-icon'

const classPrefix = `adm-switch`

export type SwitchProps = {
  loading?: boolean
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  /** @deprecated use `onChange` instead */
  beforeChange?: (val: boolean) => Promise<void>
  onChange?: (checked: boolean) => void | Promise<void>
  checkedText?: ReactNode
  uncheckedText?: ReactNode
} & NativeProps<'--checked-color' | '--width' | '--height' | '--border-width'>

const defaultProps = {
  defaultChecked: false,
}

export const Switch: FC<SwitchProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const disabled = mergedProps.disabled || mergedProps.loading || false
  const [changing, setChanging] = useState(false)
  const { locale } = useConfig()

  const [checked, setChecked] = usePropsValue({
    value: mergedProps.checked,
    defaultValue: mergedProps.defaultChecked,
    onChange: mergedProps.onChange,
  })

  async function onClick() {
    if (disabled || mergedProps.loading || changing) {
      return
    }
    const nextChecked = !checked
    if (mergedProps.beforeChange) {
      setChanging(true)
      try {
        await mergedProps.beforeChange(nextChecked)
        setChanging(false)
      } catch (e) {
        setChanging(false)
        throw e
      }
    }
    const result = setChecked(nextChecked)
    if (isPromise(result)) {
      setChanging(true)
      try {
        await result
        setChanging(false)
      } catch (e) {
        setChanging(false)
        throw e
      }
    }
  }

  return withNativeProps(
    mergedProps,
    <div
      onClick={onClick}
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled || changing,
      })}
      role='switch'
      aria-label={locale.Switch.name}
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <div className={`${classPrefix}-checkbox`}>
        <div className={`${classPrefix}-handle`}>
          {(mergedProps.loading || changing) && (
            <SpinIcon className={`${classPrefix}-spin-icon`} />
          )}
        </div>
        <div className={`${classPrefix}-inner`}>
          {checked ? mergedProps.checkedText : mergedProps.uncheckedText}
        </div>
      </div>
    </div>
  )
}
