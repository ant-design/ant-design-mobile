import {createPortal} from 'react-dom'
import {ReactElement} from 'react'

export type GetContainer = HTMLElement | (() => HTMLElement) | null

export function renderToContainer(
  getContainer: GetContainer,
  node: ReactElement
) {
  if (getContainer) {
    const container =
      typeof getContainer === 'function' ? getContainer() : getContainer
    return createPortal(node, container)
  }
  return node
}
