function scrollToViewIfNeed(
  element: HTMLElement,
  options?: {
    // 去除顶部区域
    offsetTop?: number
    // 去除底部区域
    offsetBottom?: number
    // 定义动画过渡效果
    behavior?: 'auto' | 'smooth'
    // 定义垂直方向的对齐
    block?: 'start' | 'end'
  },
) {
  let viewHeight = window.innerHeight || document.documentElement.clientHeight
  const { offsetTop, offsetBottom, behavior = 'auto', block = 'start' } =
    options || {}

  // 修正窗口区域
  if (Number(offsetTop) > 0) {
    viewHeight -= offsetTop!
  }

  // 修正窗口区域
  if (Number(offsetBottom)) {
    viewHeight -= offsetBottom!
  }

  let { top, bottom } = element.getBoundingClientRect()

  // 修正 top 的值
  if (Number(offsetTop) > 0) {
    top -= offsetTop!
  }

  let isInView = top > 0 && bottom < viewHeight

  // 在视图内的不需要滚动
  if (isInView) {
    return
  }

  if (block === 'start') {
    window.scrollBy({
      top,
      behavior,
    })
  } else if (block === 'end') {
    window.scrollBy({
      top: bottom - viewHeight,
      behavior,
    })
  }
}

export default scrollToViewIfNeed
