import type { ReactNode } from 'react'

type Regulated<T> = T extends null | undefined | false ? never : T

/**
 * Check if the `node` is visible Node (not null, undefined, or false)
 */
export function isNodeWithContent(
  node: ReactNode
): node is Regulated<ReactNode> {
  return node !== undefined && node !== null && node !== false
}
