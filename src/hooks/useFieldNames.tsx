import { useMemo } from 'react'

export type FieldNamesType = {
  label?: string
  value?: string
  disabled?: string
  children?: string
}
export const useFieldNames = (fieldNames: FieldNamesType = {}) => {
  const fields = useMemo(() => {
    const {
      label = 'label',
      value = 'value',
      disabled = 'disabled',
      children = 'children',
    } = fieldNames

    return [label, value, children, disabled] as string[]
  }, [JSON.stringify(fieldNames)])

  return fields
}
