import React, { createRef } from 'react'
import { findDOMNode } from 'react-dom'

export class Wrapper extends React.Component<{}, {}> {
  element: HTMLElement | null = null
  componentDidMount() {
    this.componentDidUpdate()
  }

  componentDidUpdate() {
    const node = findDOMNode(this)
    if (node instanceof HTMLElement) {
      this.element = node
    } else {
      this.element = null
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}
