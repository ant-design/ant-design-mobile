import { RefObject } from 'react'
import { useSpring } from '@react-spring/web'
import { useMutationEffect } from './use-mutation-effect'
import { bound } from './bound'
import { useIsomorphicLayoutEffect } from 'ahooks'
import { useIsomorphicUpdateLayoutEffect } from './use-isomorphic-update-layout-effect'

export const useTabListScroll = (
  targetRef: RefObject<HTMLElement>,
  activeIndex: number | undefined
) => {
  const [{ scrollLeft }, api] = useSpring(() => ({
    scrollLeft: 0,
    config: {
      tension: 300,
      clamp: true,
    },
  }))

  function animate(immediate = false) {
    const container = targetRef.current
    if (!container) return
    if (activeIndex === undefined) return

    const activeTabWrapper = container.children.item(
      activeIndex
    ) as HTMLDivElement
    const activeTab = activeTabWrapper.children.item(0) as HTMLDivElement
    const activeTabLeft = activeTab.offsetLeft
    const activeTabWidth = activeTab.offsetWidth

    const containerWidth = container.offsetWidth
    const containerScrollWidth = container.scrollWidth
    const containerScrollLeft = container.scrollLeft

    const maxScrollDistance = containerScrollWidth - containerWidth
    if (maxScrollDistance <= 0) return

    const nextScrollLeft = bound(
      activeTabLeft - (containerWidth - activeTabWidth) / 2,
      0,
      containerScrollWidth - containerWidth
    )

    api.start({
      scrollLeft: nextScrollLeft,
      from: { scrollLeft: containerScrollLeft },
      immediate: immediate && !scrollLeft.isAnimating,
    })
  }

  useIsomorphicLayoutEffect(() => {
    animate(true)
  }, [])

  useIsomorphicUpdateLayoutEffect(() => {
    animate()
  }, [activeIndex])

  useMutationEffect(
    () => {
      animate(true)
    },
    targetRef,
    {
      subtree: true,
      childList: true,
      characterData: true,
    }
  )

  return {
    scrollLeft,
    animate,
  }
}
