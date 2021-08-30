import { ElementProps } from '../../utils/element-props'
import { useInitialized } from '../../utils/use-initialized'
import classNames from 'classnames'
import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { useLockScroll } from '../../utils/use-lock-scroll'

const classPrefix = `adm-mask`

export type MaskProps = {
  visible?: boolean
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  disableBodyScroll?: boolean
  opacity?: 'default' | 'dark' | number
  getContainer?: HTMLElement | (() => HTMLElement) | undefined
  afterClose?: () => void
} & ElementProps

export const Mask: React.FC<MaskProps> = props => {
  const cls = classNames(classPrefix, props.className, {
    [`${classPrefix}-hidden`]: !props.visible,
  })

  const initialized = useInitialized(props.visible || props.forceRender)

  const ref = useRef<HTMLDivElement>(null)

  useLockScroll(ref, !!(props.visible && props.disableBodyScroll))

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.currentTarget === e.target) {
      props.onMaskClick?.(e)
    }
  }

  const opacity =
    props.opacity === 'default'
      ? 0.55
      : props.opacity === 'dark'
      ? 0.75
      : props.opacity

  const node = (
    <CSSTransition
      in={props.visible}
      timeout={200}
      classNames={classPrefix}
      onExited={props.afterClose}
      unmountOnExit={props.destroyOnClose}
    >
      <div
        className={cls}
        onClick={handleClick}
        ref={ref}
        style={{
          ...props.style,
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        }}
      >
        {initialized && props.children}
      </div>
    </CSSTransition>
  )

  if (props.getContainer) {
    const container =
      typeof props.getContainer === 'function'
        ? props.getContainer()
        : props.getContainer
    return createPortal(node, container)
  }
  return node
}

Mask.defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  opacity: 'default',
  disableBodyScroll: true,
}
