import React, {FC} from 'react'
import classNames from 'classnames'
import {ElementProps} from '../../utils/element-props'

import RcForm from 'rc-field-form'
import type {FormProps as RcFormProps} from 'rc-field-form'

import {FormContext, FormContextType, DEFAULT_FORM_CONTEXT} from './context'
const classPrefix = `am-form`

type FormProps = RcFormProps & ElementProps & Partial<FormContextType>

export const Form: FC<FormProps> = props => {
  const {className, style, hasFeedback, children, ...formProps} = props
  const formClassName = classNames(classPrefix, className)

  return (
    <RcForm className={formClassName} style={style} {...formProps}>
      <FormContext.Provider
        value={{
          hasFeedback: hasFeedback || DEFAULT_FORM_CONTEXT.hasFeedback,
        }}
      >
        {children}
      </FormContext.Provider>
    </RcForm>
  )
}
