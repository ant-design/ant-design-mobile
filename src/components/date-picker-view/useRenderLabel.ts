import { useCallback } from 'react'
import { useConfig } from '../config-provider'
import type { RenderLabel } from './date-picker-view'

export default function useRenderLabel(renderLabel?: RenderLabel): RenderLabel {
  const { locale } = useConfig()

  return useCallback(
    (type, data, selected) => {
      if (renderLabel) {
        return renderLabel(type, data, selected)
      }

      // Default render
      switch (type) {
        case 'minute':
        case 'second':
        case 'hour':
          return ('0' + data.toString()).slice(-2)
        case 'now':
          return locale.DatePicker.tillNow
        default:
          return data.toString()
      }
    },
    [renderLabel]
  )
}
