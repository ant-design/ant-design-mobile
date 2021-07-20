import React from 'react'

/**
 * Form 内部的 Context
 */

export type FormContextType = {
  hasFeedback: boolean
}

export const DEFAULT_FORM_CONTEXT: FormContextType = {
  hasFeedback: true,
}

export const FormContext =
  React.createContext<FormContextType>(DEFAULT_FORM_CONTEXT)
