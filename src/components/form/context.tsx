import React from 'react'
import { FormLayout } from '.'

export type FormContextType = {
  hasFeedback: boolean
  layout: FormLayout
}

export const DEFAULT_FORM_CONTEXT: FormContextType = {
  hasFeedback: true,
  layout: 'vertical',
}

export const FormContext =
  React.createContext<FormContextType>(DEFAULT_FORM_CONTEXT)
