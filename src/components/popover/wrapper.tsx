import React from 'react'
import { findDOMNode } from 'react-dom'

export class Wrapper extends React.Component<
  {
    children?: React.ReactNode
  },
  {}
> {
  element: Element | null = null
  componentDidMount() {
    this.componentDidUpdate()
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    const node = findDOMNode(this)
    if (node instanceof Element) {
      this.element = node
    } else {
      this.element = null
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}
