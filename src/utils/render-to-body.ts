import type { ReactElement } from 'react'
import { unstableSetRender } from './unstable-render'

export function renderToBody(element: ReactElement) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  return unstableSetRender()(element, container)
}
