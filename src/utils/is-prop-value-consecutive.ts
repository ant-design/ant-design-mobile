import React, { ReactNode, isValidElement } from 'react'

type CheckedValueType = string | number | undefined | null | boolean

export function isPropValueConsecutive(children: ReactNode, propName: string) {
  let isConsistant = true
  let prevValue: CheckedValueType = undefined
  const knownPropValue = new Set<CheckedValueType>()
  React.Children.forEach(children, child => {
    if (!isValidElement(child)) return

    const value = child.props[propName]
    if (value !== prevValue && knownPropValue.has(value)) {
      isConsistant = false
    } else {
      knownPropValue.add(value)
      prevValue = value
    }
  })
  return isConsistant
}
