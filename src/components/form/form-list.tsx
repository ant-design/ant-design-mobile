import React from 'react'
import {
  ValidatorRule,
  StoreValue,
  NamePath,
} from 'rc-field-form/lib/interface'
import { List } from 'rc-field-form'

export interface FormListFieldData {
  name: number
  key: number
}

export interface FormListOperation {
  add: (defaultValue?: StoreValue, insertIndex?: number) => void
  remove: (index: number | number[]) => void
  move: (from: number, to: number) => void
}

export interface FormListProps {
  name: string | number | (string | number)[]
  rules?: ValidatorRule[]
  initialValue?: any[]
  children: (
    fields: FormListFieldData[],
    operation: FormListOperation
  ) => React.ReactNode
}

const FormList: React.FC<FormListProps> = ({ children, ...props }) => {
  return (
    <List {...props}>
      {(fields, operation) => (
        <>
          {children(
            fields.map(field => ({ ...field, fieldKey: field.key })),
            operation
          )}
        </>
      )}
    </List>
  )
}

export default FormList
