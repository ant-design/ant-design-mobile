import { FC, useRef } from 'react'
import React from 'react'
import Input, { InputProps } from '../input'
import { NativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-virtual-input'

export type VirtualInputProps = {
  onFocus?: () => void
  onBlur?: () => void
} & Pick<InputProps, 'value' | 'placeholder'> &
  NativeProps

const defaultProps = {
  value: '',
}

export const VirtualInput: FC<VirtualInputProps> = p => {
  const props = mergeProps(defaultProps, p)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className={classPrefix}
      tabIndex={0}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      <Input
        readOnly
        value={props.value}
        placeholder={props.placeholder}
        // clearable={props.clearable}
        // onClear={props.onClear}
      />
    </div>
  )
}
