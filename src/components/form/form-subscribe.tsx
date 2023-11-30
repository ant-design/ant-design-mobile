import React, { useContext } from 'react'
import type { FC, ReactNode } from 'react'
import { FieldContext, useWatch } from 'rc-field-form'
import type { FormInstance } from 'rc-field-form'
import type { NamePath } from 'rc-field-form/es/interface'
import { cloneByNamePathList } from 'rc-field-form/es/utils/valueUtil'

type RenderChildren<Values = any> = (
  changedValues: Record<string, any>,
  form: FormInstance<Values>
) => ReactNode
type ChildrenType<Values = any> = RenderChildren<Values>

export interface FormSubscribeProps {
  to: NamePath[]
  children: ChildrenType
}

export const FormSubscribe: FC<FormSubscribeProps> = props => {
  const form = useContext(FieldContext)

  const value = useWatch(values => cloneByNamePathList(values, props.to), form)

  // Memo to avoid useless render
  const childNode = React.useMemo(
    () => props.children(value, form),
    [JSON.stringify(value), props.children]
  )

  return <>{childNode}</>
}
