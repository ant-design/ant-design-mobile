import { ReactElement } from 'react'
import { render, unmount as reactUnmount } from './render'

export function renderToBody(
  element: ReactElement,
  bodyContainer: HTMLElement = document.body
) {
  const container = document.createElement('div')
  bodyContainer.appendChild(container)
  function unmount() {
    const unmountResult = reactUnmount(container)
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container)
    }
  }
  render(element, container)
  return unmount
}
