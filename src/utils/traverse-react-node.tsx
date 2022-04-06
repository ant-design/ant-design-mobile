import React, { ReactNode } from 'react'
import { isFragment } from 'react-is'

export function traverseReactNode(
  children: ReactNode,
  fn: (child: ReactNode) => void
) {
  function handle(target: ReactNode) {
    React.Children.forEach(target, child => {
      if (isFragment(child)) {
        handle(child.props.children)
      } else {
        fn(child)
      }
    })
  }
  handle(children)
}
