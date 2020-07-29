// 用于在全局创建组件，如 alert, actionSheet
// 如果是组件渲染模式，则使用 hooks.useContainer

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import warning from './warning'

const singleFlag: any = {}
// singleFlag, 用于标记全局在同一时间只会显示一个
export default (Content: React.ReactElement, flag?: string) => {
  if (flag) {
    if (singleFlag[flag]) {
      warning(false, flag, `there is already ${flag} exist`)
      return () => {}
    }
    singleFlag[flag] = true
  }
  const div = document.createElement('div')
  document.body.appendChild(div)

  let timeout: any = null

  function close() {
    if (flag) {
      singleFlag[flag] = undefined
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    if (div) {
      ReactDOM.unmountComponentAtNode(div)
      if (div.parentNode) {
        div.parentNode.removeChild(div)
      }
    }
  }

  ReactDOM.render(Content, div)

  return close
}
