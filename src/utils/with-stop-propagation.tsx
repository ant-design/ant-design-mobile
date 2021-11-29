import React, { ReactElement } from 'react'

export type PropagationEvent = 'click'

const eventToPropRecord: Record<PropagationEvent, string> = {
  'click': 'onClick',
}

export function withStopPropagation(
  events: PropagationEvent[],
  element: ReactElement
) {
  const props: Record<string, any> = { ...element.props }
  for (const key of events) {
    const prop = eventToPropRecord[key]
    props[prop] = function (e: Event) {
      e.stopPropagation()
      element.props[prop]?.(e)
    }
  }
  return React.cloneElement(element, props)
}
