import React, { ReactNode, forwardRef } from 'react'
import classNames from 'classnames'
import { NativeProps } from '../../utils/native-props'
import List, { ListProps } from '../list'
import RcForm from 'rc-field-form'
import type { FormProps as RcFormProps, FormInstance } from 'rc-field-form'
import { FormContext, FormContextType } from './context'
import { mergeProps } from '../../utils/with-default-props'
import type { FormLayout } from '.'
import { Header } from './header'

const classPrefix = 'adm-form'

export type FormProps = RcFormProps &
  NativeProps &
  Partial<FormContextType> & {
    footer?: ReactNode
    layout?: FormLayout
    mode?: ListProps['mode']
  }

const defaultProps = {
  hasFeedback: true,
  layout: 'vertical',
}

export const Form = forwardRef<FormInstance, FormProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const {
    className,
    style,
    hasFeedback,
    children,
    layout,
    footer,
    mode,
    ...formProps
  } = props

  const lists: ReactNode[] = []

  let currentHeader: ReactNode = null
  let items: ReactNode[] = []
  let count = 0
  function collect() {
    if (items.length === 0) return
    count += 1
    lists.push(
      <List
        header={currentHeader}
        key={count}
        mode={mode}
        style={{
          '--prefix-width': '6em',
          '--align-items': 'stretch',
        }}
      >
        {items}
      </List>
    )
    items = []
  }
  React.Children.forEach(props.children, (child, index) => {
    if (React.isValidElement(child) && child.type === Header) {
      collect()
      currentHeader = child.props.children
    } else {
      items.push(child)
    }
  })
  collect()

  return (
    <RcForm
      className={classNames(classPrefix, `${classPrefix}-${layout}`, className)}
      style={style}
      ref={ref}
      {...formProps}
    >
      <FormContext.Provider
        value={{
          hasFeedback: hasFeedback,
          layout,
        }}
      >
        {lists}
      </FormContext.Provider>
      {footer && <div className={`${classPrefix}-footer`}>{footer}</div>}
    </RcForm>
  )
})
