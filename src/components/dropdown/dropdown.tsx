import { useClickAway } from 'ahooks'
import classNames from 'classnames'
import React, {
  cloneElement,
  ReactElement,
  ComponentProps,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  isValidElement,
} from 'react'
import Popup, { PopupProps } from '../popup'
import Item, { ItemChildrenWrap } from './item'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import { isPropValueConsecutive } from '../../utils/is-prop-value-consecutive'
import { defaultPopupBaseProps } from '../popup/popup-base-props'
import { devWarning } from 'antd-mobile/src/utils/dev-log'

const classPrefix = `adm-dropdown`

export type DropdownProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  closeOnMaskClick?: boolean
  closeOnClickAway?: boolean
  onChange?: (key: string | null) => void
  arrow?: React.ReactNode
  mask?: boolean
  getContainer?: PopupProps['getContainer']
} & NativeProps

const defaultProps = {
  mask: true,
  defaultActiveKey: null,
  closeOnMaskClick: true,
  closeOnClickAway: false,
  getContainer: defaultPopupBaseProps['getContainer'],
}

export type DropdownRef = {
  close: () => void
}

const Dropdown = forwardRef<
  DropdownRef,
  React.PropsWithChildren<DropdownProps>
>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const [showMask, setShowMask] = useState(true)
  const [value, setValue] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey,
    onChange: props.onChange,
  })

  const navRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // 点击外部区域，关闭
  useClickAway(() => {
    if (!props.closeOnClickAway) return
    setValue(null)
  }, [navRef, contentRef])

  // 计算 navs 的 top 值
  const [top, setTop] = useState<number>()
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (value) {
      const rect = container.getBoundingClientRect()
      setTop(rect.bottom)
    }
  }, [value])

  const changeActive = (key: string | null) => {
    if (value === key) {
      setValue(null)
    } else {
      setValue(key)
      key && setShowMask(maskPopMap[key])
    }
  }

  let popupForceRender = false
  let separated = false
  const items: ReactElement<ComponentProps<typeof Item>>[] = []
  const leftNavs: React.ReactNode[] = []
  const rightNavs: React.ReactNode[] = []
  const maskPopMap: Record<string, boolean> = {}
  React.Children.forEach(props.children, child => {
    if (isValidElement<ComponentProps<typeof Item>>(child)) {
      const childProps = {
        ...child.props,
        onClick: () => {
          changeActive(child.key as string)
          child.props.onClick && child.props.onClick()
        },
        active: child.key === value,
        arrow:
          child.props.arrow === undefined ? props.arrow : child.props.arrow,
      }
      items.push(child)
      if (child.key) {
        maskPopMap[child.key] =
          child.props.mask === undefined ? props.mask : child.props.mask
      }
      if (child.props.forceRender) popupForceRender = true
      if (child.props.align) separated = true
      const cloneChild = cloneElement(child, childProps)
      child.props.align === 'right'
        ? rightNavs.push(cloneChild)
        : leftNavs.push(cloneChild)
    } else {
      leftNavs.push(child)
    }
  })

  if (!isPropValueConsecutive(props.children, 'align')) {
    devWarning('Dropdown.Item', `'align' prop should be consecutive.`)
  }

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
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-open`]: !!value,
      })}
      ref={containerRef}
    >
      <div
        className={classNames(`${classPrefix}-nav`, {
          [`${classPrefix}-separated`]: separated,
        })}
        ref={navRef}
      >
        {leftNavs}
        {separated && <div className={`${classPrefix}-item-gap`} role='grid' />}
        {rightNavs}
      </div>
      <Popup
        visible={!!value}
        position='top'
        getContainer={props.getContainer}
        className={`${classPrefix}-popup`}
        maskClassName={`${classPrefix}-popup-mask`}
        bodyClassName={`${classPrefix}-popup-body`}
        style={{ top }}
        mask={showMask}
        forceRender={popupForceRender}
        onMaskClick={
          props.closeOnMaskClick
            ? () => {
                changeActive(null)
              }
            : undefined
        }
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
})

export default Dropdown
