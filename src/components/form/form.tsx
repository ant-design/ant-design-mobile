import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import List from '../list'
import RcForm from 'rc-field-form'
import type { FormProps as RcFormProps } from 'rc-field-form'
import { FormContext, FormContextType, DEFAULT_FORM_CONTEXT } from './context'
import { mergeProps } from '../../utils/with-default-props'
import type { FormLayout } from '.'

type FormProps = RcFormProps &
  ElementProps &
  Partial<FormContextType> & {
    footer?: ReactNode
    layout?: FormLayout
  }

const defaultProps = {
  hasFeedback: true,
  layout: 'vertical',
}

export const Form: FC<FormProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    className,
    style,
    hasFeedback,
    children,
    layout,
    footer,
    ...formProps
  } = props

  return (
    <RcForm
      className={classNames('am-form', className)}
      style={style}
      {...formProps}
    >
      <List
        style={{
          '--prefix-width': '6em',
          '--align-items': 'stretch',
        }}
      >
        <FormContext.Provider
          value={{
            hasFeedback: hasFeedback,
            layout,
          }}
        >
          {children}
        </FormContext.Provider>
      </List>
      {footer && <div className='am-form-footer'>{footer}</div>}
    </RcForm>
  )
}
