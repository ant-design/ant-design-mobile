import { useClickAway } from 'ahooks'
import classNames from 'classnames'
import raf from 'rc-util/lib/raf'
import type {
  ComponentProps,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react'
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { getScrollParent } from '../../utils/get-scroll-parent'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProp, mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import Popup, { PopupProps } from '../popup'
import { defaultPopupBaseProps } from '../popup/popup-base-props'
import { IconContext } from './context'
import Item, { ItemChildrenWrap } from './item'

// 按滚动容器维护锁计数，防止多 Dropdown 共享同一容器时提前解锁
const scrollLockState = new WeakMap<
  HTMLElement,
  { count: number; originalOverflowY: string }
>()

/**
 * 获取要锁定的滚动容器。
 */
function getLockTarget(
  el: HTMLElement
): HTMLElement | Window | null | undefined {
  let node: Element | null = el
  while (node && node !== document.body && node !== document.documentElement) {
    if (scrollLockState.has(node as HTMLElement)) {
      return node as HTMLElement
    }
    node = node.parentElement
  }
  const parent = getScrollParent(el)
  if (parent && parent !== window && !(parent instanceof HTMLElement)) {
    return null
  }
  return parent as HTMLElement | Window | null | undefined
}

const classPrefix = `adm-dropdown`

export type DropdownProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  closeOnMaskClick?: boolean
  closeOnClickAway?: boolean
  onChange?: (key: string | null) => void
  onVisibleChange?: (visible: boolean, info: { key: string | null }) => void
  arrowIcon?: ReactNode
  /**
   * @deprecated use `arrowIcon` instead
   */
  arrow?: ReactNode
  getContainer?: PopupProps['getContainer']
} & NativeProps

const defaultProps = {
  defaultActiveKey: null,
  closeOnMaskClick: true,
  closeOnClickAway: false,
  getContainer: defaultPopupBaseProps['getContainer'],
}

export type DropdownRef = {
  close: () => void
}

const Dropdown = forwardRef<DropdownRef, PropsWithChildren<DropdownProps>>(
  (props, ref) => {
    const { dropdown: componentConfig = {} } = useConfig()
    const mergedProps = mergeProps(defaultProps, componentConfig, props)
    const arrowIcon = mergeProp(
      componentConfig.arrowIcon,
      props.arrow,
      props.arrowIcon
    )

    const [value, setValue] = usePropsValue({
      value: mergedProps.activeKey,
      defaultValue: mergedProps.defaultActiveKey,
      onChange: mergedProps.onChange,
    })

    const cacheKeyRef = useRef<string | null>(null)
    cacheKeyRef.current = value ?? cacheKeyRef.current

    const navRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    // 点击外部区域，关闭
    useClickAway(() => {
      if (!mergedProps.closeOnClickAway) return
      setValue(null)
    }, [navRef, contentRef])

    // 计算 navs 的 top 值
    const [top, setTop] = useState<number>()
    const containerRef = useRef<HTMLDivElement>(null)
    const rafIdRef = useRef<number>(0)

    const updatePosition = useCallback(() => {
      const container = containerRef.current
      if (!container) return
      setTop(container.getBoundingClientRect().bottom)
    }, [])

    const updateTop = useCallback(() => {
      raf.cancel(rafIdRef.current)

      rafIdRef.current = raf(updatePosition)
    }, [updatePosition])

    useEffect(() => {
      if (!value) return

      updatePosition()

      const container = containerRef.current
      let scrollParent: HTMLElement | null = null

      if (container) {
        const parent = getLockTarget(container)
        if (
          parent &&
          parent !== window &&
          parent !== document.body &&
          parent !== document.documentElement
        ) {
          scrollParent = parent as HTMLElement
          const state = scrollLockState.get(scrollParent)
          if (state) {
            state.count += 1
          } else {
            scrollLockState.set(scrollParent, {
              count: 1,
              originalOverflowY: scrollParent.style.overflowY,
            })
            scrollParent.style.overflowY = 'hidden'
          }
        }
      }

      window.addEventListener('scroll', updateTop, {
        passive: true,
        capture: true,
      })
      window.addEventListener('resize', updateTop)

      return () => {
        raf.cancel(rafIdRef.current)

        if (scrollParent) {
          const state = scrollLockState.get(scrollParent)
          if (state) {
            state.count -= 1
            if (state.count === 0) {
              scrollParent.style.overflowY = state.originalOverflowY
              scrollLockState.delete(scrollParent)
            }
          }
        }

        window.removeEventListener('scroll', updateTop, true)
        window.removeEventListener('resize', updateTop)
      }
    }, [value, updateTop, updatePosition])

    const changeActive = (key: string | null) => {
      if (value === key) {
        setValue(null)
      } else {
        setValue(key)
      }
    }

    let popupForceRender = false
    const items: ReactElement<ComponentProps<typeof Item>>[] = []
    const navs = React.Children.map(mergedProps.children, child => {
      if (isValidElement<ComponentProps<typeof Item>>(child)) {
        const childProps = {
          ...child.props,
          onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            changeActive(child.key as string)
            child.props.onClick?.(event)
          },
          active: child.key === value,
        }
        items.push(child)
        if (child.props.forceRender) popupForceRender = true
        return cloneElement(child, childProps)
      } else {
        return child
      }
    })

    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          setValue(null)
        },
      }),
      [setValue]
    )

    return withNativeProps(
      mergedProps,
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-open`]: !!value,
        })}
        ref={containerRef}
      >
        <IconContext.Provider value={arrowIcon}>
          <div className={`${classPrefix}-nav`} ref={navRef}>
            {navs}
          </div>
        </IconContext.Provider>
        <Popup
          visible={!!value}
          position='top'
          getContainer={mergedProps.getContainer}
          className={`${classPrefix}-popup`}
          maskClassName={`${classPrefix}-popup-mask`}
          bodyClassName={`${classPrefix}-popup-body`}
          style={{ top }}
          forceRender={popupForceRender}
          onMaskClick={
            mergedProps.closeOnMaskClick
              ? () => {
                  changeActive(null)
                }
              : undefined
          }
          afterShow={() => {
            mergedProps.onVisibleChange?.(true, { key: cacheKeyRef.current })
          }}
          afterClose={() => {
            mergedProps.onVisibleChange?.(false, { key: cacheKeyRef.current })
          }}
        >
          <div ref={contentRef}>
            {items.map(item => {
              const isActive = item.key === value
              return (
                <ItemChildrenWrap
                  key={item.key}
                  active={isActive}
                  forceRender={item.props.forceRender}
                  destroyOnClose={item.props.destroyOnClose}
                >
                  {item.props.children}
                </ItemChildrenWrap>
              )
            })}
          </div>
        </Popup>
      </div>
    )
  }
)

export default Dropdown
