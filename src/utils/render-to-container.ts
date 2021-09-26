import { createPortal } from 'react-dom'
import { ReactElement } from 'react'
import { resolveContainer } from './get-container'
import { useMounted } from '../utils/use-mounted'

export type GetContainer = HTMLElement | (() => HTMLElement) | null

export function renderToContainer(
  getContainer: GetContainer,
  node: ReactElement
) {
  const mounted = useMounted()
  if (mounted && getContainer) {
    const container = resolveContainer(getContainer)
    return createPortal(node, container)
  }
  return node
}
