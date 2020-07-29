import * as React from 'react'
import { uuid } from '../_internal'

const lockClassName = 'amd-body-scroll-lock-'

// 为什么用 className 的形式?
// 考虑到使用 inline style 会导致多个同时使用时对现有样式的干扰，因此这里采用外加 className 的方式来处理
export default (lock: boolean) => {
  // 生成一个随机的 className
  // 样式由  antd-mobile-style 提供
  // overflow: hidden; height: 100vh
  const lockClassNameX = React.useRef(lockClassName + uuid())
  React.useLayoutEffect(() => {
    if (lock) {
      document.body.classList.add(lockClassNameX.current)
      document.documentElement.classList.add(lockClassNameX.current)
    } else {
      document.body.classList.remove(lockClassNameX.current)
      document.documentElement.classList.remove(lockClassNameX.current)
    }

    return () => {
      document.body.classList.remove(lockClassNameX.current)
      document.documentElement.classList.remove(lockClassNameX.current)
    }
  }, [lock])
}
