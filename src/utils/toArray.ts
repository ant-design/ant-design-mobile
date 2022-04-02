import React from 'react'
import { isFragment } from 'react-is'

export interface Option {
  keepEmpty?: boolean
}

/**
 * @see https://github.com/react-component/util/blob/master/src/Children/toArray.ts
 */
export default function toArray(
  children: React.ReactNode,
  option: Option = {}
): React.ReactElement[] {
  let ret: React.ReactElement[] = []

  React.Children.forEach(children, (child: any) => {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child))
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option))
    } else {
      ret.push(child)
    }
  })

  return ret
}
