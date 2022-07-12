import React, { FC, memo, useContext } from 'react'
import { FieldContext, useWatch } from 'rc-field-form'
import { useUpdate } from 'ahooks'
import type { FormInstance } from 'rc-field-form'
import type { NamePath } from 'rc-field-form/es/interface'
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect'

type RenderChildren<Values = any> = (
  changedValues: Record<string, any>,
  form: FormInstance<Values>
) => React.ReactNode
type ChildrenType<Values = any> = RenderChildren<Values>

export interface FormSubscribeProps {
  to: NamePath[]
  children: ChildrenType
}

export const FormSubscribe: FC<FormSubscribeProps> = props => {
  const update = useUpdate()
  const form = useContext(FieldContext)
  return (
    <>
      {props.children(form.getFieldsValue(props.to), form)}
      {props.to.map(namePath => (
        <Watcher
          key={namePath.toString()}
          form={form}
          namePath={namePath}
          onChange={update}
        />
      ))}
    </>
  )
}

export const Watcher = memo<{
  form: FormInstance
  namePath: NamePath
  onChange: () => void
}>(props => {
  const value = useWatch(props.namePath, props.form)
  useIsomorphicUpdateLayoutEffect(() => {
    props.onChange()
  }, [value])
  return null
})
