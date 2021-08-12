import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import List from '../list'
import RcForm from 'rc-field-form'
import type { FormProps as RcFormProps } from 'rc-field-form'
import { FormContext, FormContextType, DEFAULT_FORM_CONTEXT } from './context'

type FormProps = RcFormProps &
  ElementProps &
  Partial<FormContextType> & {
    footer?: ReactNode
  }

export const Form: FC<FormProps> = props => {
  const { className, style, hasFeedback, children, ...formProps } = props

  return (
    <RcForm
      className={classNames('am-form', className)}
      style={style}
      {...formProps}
    >
      <List>
        <FormContext.Provider
          value={{
            hasFeedback: hasFeedback || DEFAULT_FORM_CONTEXT.hasFeedback,
          }}
        >
          {children}
        </FormContext.Provider>
      </List>
      {props.footer && <div className='am-form-footer'>{props.footer}</div>}
    </RcForm>
  )
}
