import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import { useToggle } from 'ahooks'
import SpinIcon from '../../assets/spin.svg'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-switch`

export type SwitchProps = {
  loading?: boolean
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onBeforeChange?: () => Promise<void>
  onChange?: (checked: boolean) => void
  checkedText?: ReactNode
  uncheckedText?: ReactNode
} & NativeProps<'--checked-color'>

const defaultProps = {
  defaultChecked: false,
  onBeforeChange: () => Promise.resolve(),
}

export const Switch: FC<SwitchProps> = p => {
  const props = mergeProps(defaultProps, p)
  const disabled = props.disabled || props.loading || false
  const [beforeChangeLoading, { toggle }] = useToggle(false)

  const [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  })

  const onClick = () => {
    if (disabled || props.loading || beforeChangeLoading) {
      return
    }
    toggle()
    props
      .onBeforeChange()
      .then(() => {
        setChecked(!checked)
      })
      .catch(() => {})
      .finally(() => {
        toggle()
      })
  }

  return withNativeProps(
    props,
    <div
      onClick={onClick}
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled || beforeChangeLoading,
      })}
    >
      <div className={`${classPrefix}-checkbox`}>
        <div className={`${classPrefix}-handle`}>
          {(props.loading || beforeChangeLoading) && (
            <img src={SpinIcon} className={`${classPrefix}-icon`} />
          )}
        </div>
        <div className={`${classPrefix}-inner`}>
          {checked ? props.checkedText : props.uncheckedText}
        </div>
      </div>
    </div>
  )
}
