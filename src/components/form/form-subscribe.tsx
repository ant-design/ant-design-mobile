import React from 'react'
import type { FormInstance } from 'rc-field-form'
import type { NamePath } from 'rc-field-form/es/interface'
import Form from '.'

type RenderChildren<Values = any> = (
  changedValues: Record<string, any>,
  form: FormInstance<Values>
) => React.ReactNode
type ChildrenType<Values = any> = RenderChildren<Values>

export interface FormSubscribeProps {
  to: NamePath[]
  children: ChildrenType
}

export const FormSubscribe: React.VFC<FormSubscribeProps> = ({
  children,
  to,
}) => {
  return (
    <Form.Item noStyle dependencies={to}>
      {form => {
        const changedValues = form.getFieldsValue(to)
        return children(changedValues, form)
      }}
    </Form.Item>
  )
}
