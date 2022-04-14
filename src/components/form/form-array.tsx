import React, { ReactElement, ReactNode } from 'react'
import type { StoreValue } from 'rc-field-form/es/interface'
import { List as RCList } from 'rc-field-form'
import List from '../list'

export interface FormArrayField {
  index: number
  key: number
}

export interface FormArrayOperation {
  add: (defaultValue?: StoreValue, insertIndex?: number) => void
  remove: (index: number | number[]) => void
  move: (from: number, to: number) => void
}

export interface FormArrayProps {
  name: string | number | (string | number)[]
  // rules?: ValidatorRule[]
  initialValue?: any[]
  renderHeader?: (
    field: FormArrayField,
    operation: FormArrayOperation
  ) => ReactNode
  onAdd?: (operation: FormArrayOperation) => void
  renderAdd?: () => ReactNode
  children: (
    fields: FormArrayField[],
    operation: FormArrayOperation
  ) => ReactElement[]
}

export const FormArray: React.FC<FormArrayProps> = props => {
  return (
    <RCList name={props.name} initialValue={props.initialValue}>
      {(rcFields, operation) => {
        const fields = rcFields.map(field => ({
          index: field.name,
          key: field.key,
        }))
        const children = props
          .children(fields, operation)
          .map((child, index) => (
            <List
              key={fields[index].key}
              mode='card'
              header={props.renderHeader?.(fields[index], operation)}
            >
              {child}
            </List>
          ))
        if (props.renderAdd) {
          children.push(
            <List key='add' mode='card'>
              <List.Item
                className='adm-form-list-operation'
                onClick={() => {
                  props.onAdd ? props.onAdd(operation) : operation.add()
                }}
                arrow={false}
              >
                {props.renderAdd()}
              </List.Item>
            </List>
          )
        }
        return <>{children}</>
      }}
    </RCList>
  )
}
