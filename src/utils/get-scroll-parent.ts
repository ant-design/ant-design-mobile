import { canUseDom } from './can-use-dom'

type ScrollElement = HTMLElement | Window

const overflowScrollReg = /scroll|auto|overlay/i
const defaultRoot = canUseDom ? window : undefined

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1
  return node.nodeType === ELEMENT_NODE_TYPE
}

// https://github.com/youzan/vant/issues/3823
export function getScrollParent(
  el: Element,
  root: ScrollElement | null | undefined = defaultRoot
): Window | Element | null | undefined {
  let node = el

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)
    if (overflowScrollReg.test(overflowY)) {
      return node
    }
    node = node.parentNode as Element
  }

  return root
}
