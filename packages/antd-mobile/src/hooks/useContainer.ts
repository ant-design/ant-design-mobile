/**
 * 用于创建 createPortal 需要的 body 下面的 dom
 * 如果想用 api 创建，则使用 _internal.createGlobalElement
 *
 * @param id id 标记
 * @param visible?, 是否需要渲染该 dom，一般条件与 React.createPortal 的渲染条件一样
 *
 * @returns dom 返回的 dom , 在 !visible 的时候是 null
 *
 * const dom = useContainer('numeric-keypad', visible)
 *
 * {visible && React.createPortal(<div />, dom)}
 */

import { useRef } from 'react'
import { uuid } from '../_internal'

export default function useContainer(
  id: string,
  visible = true,
): HTMLDivElement | null {
  const dom = useRef<any>(null)

  if (!dom.current && visible) {
    const container = document.createElement('div')
    container.setAttribute('id', `amd-${id}`)
    document.body.appendChild(container)
    dom.current = container
  }

  // 隐藏 container 节点
  if (dom.current && !visible) {
    dom.current.remove()
    dom.current = null
  }

  return dom.current
}
