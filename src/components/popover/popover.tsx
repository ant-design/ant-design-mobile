import React, { forwardRef, useImperativeHandle, ReactElement } from 'react'
import Tooltip from 'rc-tooltip'
import { useControllableValue } from 'ahooks'
import classNames from 'classnames'
import type { TooltipProps } from 'rc-tooltip/lib/Tooltip'

const classPrefix = `am-popover`
const enterClassName = 'entering'
const leaveClassName = 'leaving'

export type BasePopoverProps = {
  getContainer?: () => HTMLElement
  destroyOnHide?: boolean
  children: ReactElement
  mode?: 'light' | 'dark'
} & Pick<
  TooltipProps,
  | 'defaultVisible'
  | 'visible'
  | 'placement'
  | 'onVisibleChange'
  | 'overlayStyle'
  | 'overlayClassName'
  | 'align'
  | 'zIndex'
>

type PopoverPropsWithContent = BasePopoverProps & { content: React.ReactNode }

export type PopoverRef = {
  show: () => void
  hide: () => void
  visible: boolean
}

export const Popover = forwardRef<PopoverRef, PopoverPropsWithContent>(
  (props, ref) => {
    const { mode = 'light' } = props

    const [visible, onVisibleChange] = useControllableValue(props, {
      valuePropName: 'visible',
      trigger: 'onVisibleChange',
      defaultValuePropName: 'defaultVisible',
      defaultValue: false,
    })

    useImperativeHandle(
      ref,
      () => {
        return {
          show: () => onVisibleChange(true),
          hide: () => onVisibleChange(false),
          visible,
        }
      },
      [visible]
    )

    return (
      <Tooltip
        {...props}
        overlayClassName={classNames(
          `${classPrefix}-${mode}`,
          props.overlayClassName
        )}
        destroyTooltipOnHide={props.destroyOnHide}
        prefixCls={classPrefix}
        getTooltipContainer={props.getContainer || (() => document.body)}
        visible={visible}
        onVisibleChange={onVisibleChange}
        trigger='click'
        motion={{
          motionName: {
            appear: enterClassName,
            appearActive: enterClassName,
            enter: enterClassName,
            enterActive: enterClassName,
            leaveActive: leaveClassName,
            leave: leaveClassName,
          },
          motionDeadline: 200,
        }}
        overlay={
          <div className={`${classPrefix}-inner-content`}>
            {(props as PopoverPropsWithContent).content}
          </div>
        }
      >
        {props.children}
      </Tooltip>
    )
  }
)
