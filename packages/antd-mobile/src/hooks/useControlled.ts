import { useState, useEffect, useCallback } from 'react'
import { warning } from '../_internal'

// 用于受控和非受控组件
export default function useControlled<T = any>(
  _value: T | undefined,
  _defaultValue: T,
  _onChange?: (v: T) => void,
) {
  const controlled = _value != null
  // controlled 的时候, _value 必有值
  const initValue: T = controlled ? _value! : _defaultValue

  // 必须提供 defaultValue. 否则会导致下层依赖的 input 由非受控模式切换到受控模式
  if (initValue == null) {
    warning(false, 'chore', 'undefined defaultValue with uncontrolled')
  }

  const [value, setValue] = useState(initValue)

  // 受控模式更新 value
  useEffect(() => {
    if (controlled) {
      setValue(_value!)
    }
  }, [_value, controlled])

  const onChange = useCallback(
    (v: T) => {
      // 非受控模式更新 value
      if (!controlled) {
        setValue(v)
      }
      _onChange?.(v)
    },
    [controlled, _onChange],
  )

  return {
    value,
    onChange,
  }
}

export function useControlledByValue<T = any>(props: {
  defaultValue?: T
  value?: T
  onChange?: (v: T) => void
}) {
  return useControlled(props.value, props.defaultValue!, props.onChange)
}

export function useControlledByChecked<T = any>(props: {
  defaultChecked?: T
  checked?: T
  onChange?: (v: T) => void
}) {
  const { value, onChange } = useControlled(
    props.checked,
    props.defaultChecked!,
    props.onChange,
  )

  return {
    checked: value,
    onChange,
  }
}
