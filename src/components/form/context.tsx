import React from 'react'
import { FormLayout } from '.'
import type { Meta, InternalNamePath } from 'rc-field-form/lib/interface'

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

export type OnSubMetaChange = (
  meta: Meta & { destroy?: boolean },
  namePath: InternalNamePath
) => void
export const NoStyleItemContext = React.createContext<OnSubMetaChange | null>(
  null
)
