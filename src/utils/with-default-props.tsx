import { FC } from 'react'

export function withDefaultProps<D>(defaultProps: D) {
  return function <P>(C: FC<P & typeof defaultProps>) {
    C.defaultProps = defaultProps
    return C as FC<P>
  }
}
