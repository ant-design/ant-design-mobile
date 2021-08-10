import { FC, ReactElement } from 'react'

export function createIconComponent(svg: ReactElement) {
  const Icon: FC = () => {
    return svg
  }
  return Icon
}
