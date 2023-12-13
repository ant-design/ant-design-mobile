import { useClickAway } from 'ahooks'
import classNames from 'classnames'
import React, {
  cloneElement,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  isValidElement,
} from 'react'
import type {
  ReactNode,
  ComponentProps,
  PropsWithChildren,
  ReactElement,
} from 'react'
import Popup, { PopupProps } from '../popup'
import Item, { ItemChildrenWrap } from './item'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import { defaultPopupBaseProps } from '../popup/popup-base-props'

const classPrefix = `adm-dropdown`

export type DropdownProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  closeOnMaskClick?: boolean
  closeOnClickAway?: boolean
  onChange?: (key: string | null) => void
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
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
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
      }
    }

    let popupForceRender = false
    const items: ReactElement<ComponentProps<typeof Item>>[] = []
    const navs = React.Children.map(props.children, child => {
      if (isValidElement<ComponentProps<typeof Item>>(child)) {
        const childProps = {
          ...child.props,
          onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            changeActive(child.key as string)
            child.props.onClick?.(event)
          },
          active: child.key === value,
          arrow:
            child.props.arrow === undefined ? props.arrow : child.props.arrow,
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
      props,
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-open`]: !!value,
        })}
        ref={containerRef}
      >
        <div className={`${classPrefix}-nav`} ref={navRef}>
          {navs}
        </div>
        <Popup
          visible={!!value}
          position='top'
          getContainer={props.getContainer}
          className={`${classPrefix}-popup`}
          maskClassName={`${classPrefix}-popup-mask`}
          bodyClassName={`${classPrefix}-popup-body`}
          style={{ top }}
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
  }
)

export default Dropdown
