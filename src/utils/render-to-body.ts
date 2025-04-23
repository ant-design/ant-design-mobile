import type { ReactElement } from 'react'
import { getReactRender } from './unstable-render'

export function renderToBody(element: ReactElement) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  return getReactRender()(element, container)
}
