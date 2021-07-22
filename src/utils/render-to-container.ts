import {createPortal} from 'react-dom'
import {ReactElement} from 'react'
import {resolveContainer} from './get-container'

export type GetContainer = HTMLElement | (() => HTMLElement) | null

export function renderToContainer(
  getContainer: GetContainer,
  node: ReactElement
) {
  if (getContainer) {
    const container = resolveContainer(getContainer)
    return createPortal(node, container)
  }
  return node
}
