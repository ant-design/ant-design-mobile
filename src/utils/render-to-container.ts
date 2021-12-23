import { createPortal } from 'react-dom'
import { ReactElement } from 'react'
import { resolveContainer } from './get-container'
import { canUseDom } from './can-use-dom'

export type GetContainer = HTMLElement | (() => HTMLElement) | null

export function renderToContainer(
  getContainer: GetContainer,
  node: ReactElement
) {
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer)
    return createPortal(node, container)
  }
  return node
}
