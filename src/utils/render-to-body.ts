import type { ReactElement } from 'react'
import { render, unmount as reactUnmount } from './render'

export function renderToBody(element: ReactElement) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  function unmount() {
    const unmountResult = reactUnmount(container)
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container)
    }
  }
  render(element, container)
  return unmount
}
