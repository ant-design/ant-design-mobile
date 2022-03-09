import React, { ReactElement, ReactNode } from 'react'
import { ValidatorRule, StoreValue } from 'rc-field-form/lib/interface'
import { List as RCList } from 'rc-field-form'
import List from '../list'

export interface FormArrayFieldData {
  name: number
  key: number
}

export interface FormArrayOperation {
  add: (defaultValue?: StoreValue, insertIndex?: number) => void
  remove: (index: number | number[]) => void
  move: (from: number, to: number) => void
}

export interface FormArrayProps {
  name: string | number | (string | number)[]
  rules?: ValidatorRule[]
  initialValue?: any[]
  renderHeader?: (
    field: FormArrayFieldData & { index: number },
    operation: FormArrayOperation
  ) => ReactNode
  renderAdd?: () => ReactNode
  children: (
    fields: FormArrayFieldData[],
    operation: FormArrayOperation
  ) => ReactElement[]
}

const FormArray: React.FC<FormArrayProps> = props => {
  return (
    <RCList {...props}>
      {(fields, operation) => {
        const children = props
          .children(
            fields.map(field => ({ ...field, fieldKey: field.key })),
            operation
          )
          .map((child, index) => (
            <List
              key={fields[index].key}
              mode='card'
              header={props.renderHeader?.(
                {
                  ...fields[index],
                  index,
                },
                operation
              )}
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
                  operation.add()
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

export default FormArray
