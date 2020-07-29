import * as React from 'react'
export const prefixCls = 'amd-guide-modal'

function disabledEvent(node: IRichElement) {
  const disabled = (e: Event) => {
    e.stopImmediatePropagation()
    e.preventDefault()
  }
  node.addEventListener('click', disabled, false)

  // 由于 node 会被直接删除，所以这里不需要解除事件绑定
}

interface IRichElement extends Element {
  style: {
    opacity: number
    [key: string]: string | number
  }
  _opacity: number
}
const outerStepEleMap: { [key: string]: IRichElement } = {}
export function renderOuterStep(id: string, prevId?: string) {
  let originNode
  if (outerStepEleMap[id]) {
    originNode = outerStepEleMap[id]
  } else {
    originNode = document.querySelector(`#${id}`) as IRichElement
    if (originNode) {
      outerStepEleMap[id] = originNode
    }
  }

  if (!originNode) {
    return null
  }

  const targetNode = originNode.cloneNode(true) as IRichElement

  targetNode.classList.add(prefixCls + '-clone')

  const pos = originNode.getBoundingClientRect()
  targetNode.style.position = 'fixed'
  targetNode.style.top = `${pos.top}px`
  targetNode.style.left = `${pos.left}px`
  targetNode.style.width = `${pos.width}px`
  targetNode.style.height = `${pos.height}px`
  targetNode.style.margin = '0px'
  targetNode.style.zIndex = 667
  targetNode.id = `${id}Clone`
  const prevEle = prevId && outerStepEleMap[prevId]
  if (prevEle) {
    prevEle.style.opacity = prevEle._opacity

    if (outerStepEleMap[`${prevId}Clone`]) {
      outerStepEleMap[`${prevId}Clone`].remove()
    }
  }

  // 1. 镂空元素的 fixed 定位会受上级的 transform 的影响
  if (originNode.parentNode) {
    originNode.parentNode.insertBefore(targetNode, originNode.nextSibling)

    disabledEvent(targetNode)
  }

  // 2. 直接加到 body 下的话，组件样式不能保证
  // 如果用 box-shadow 的话，又只能镂空一个元素，暂时选用方案 1
  // document.body.insertAdjacentElement('afterend', targetNode)

  outerStepEleMap[`${id}Clone`] = targetNode
  originNode._opacity = originNode.style.opacity
  originNode.style.opacity = 0
  return null
}

export function clearOutStep(id: string) {
  const latestEle = id && outerStepEleMap[id]
  if (latestEle) {
    latestEle.style.opacity = 1
  }
  const latestCloneEle = id && outerStepEleMap[`${id}Clone`]
  if (latestCloneEle) {
    latestCloneEle.remove()
  }
}

export function buildChildren(
  children: React.ReactNode,
  displayName: string,
  props: object | Function,
) {
  const buildChild = (child: any, childProps: object) => {
    if (child && child.type && child.type.displayName === displayName) {
      return React.cloneElement(child, childProps)
    }
    return child
  }
  let childrenWithProps
  if (Array.isArray(children)) {
    childrenWithProps = React.Children.map(children, (child, index) => {
      let childProps
      if (typeof props === 'function') {
        childProps = props(child, index)
      } else {
        childProps = props
      }
      return buildChild(child, childProps)
    })
  } else {
    let childProps
    if (typeof props === 'function') {
      childProps = props(children, 0)
    } else {
      childProps = props
    }
    childrenWithProps = buildChild(children, childProps)
  }
  return childrenWithProps
}
