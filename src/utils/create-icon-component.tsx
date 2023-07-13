import { ReactElement } from 'react'
import type { FC } from 'react'

export function createIconComponent(svg: ReactElement) {
  const Icon: FC = () => {
    return svg
  }
  return Icon
}
