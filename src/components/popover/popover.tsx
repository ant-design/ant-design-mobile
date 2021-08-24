import React, { forwardRef, useImperativeHandle, ReactElement } from 'react'
import Tooltip from 'rc-tooltip'
import classNames from 'classnames'
import type { TooltipProps } from 'rc-tooltip/lib/Tooltip'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `am-popover`
const enterClassName = 'entering'
const leaveClassName = 'leaving'

export type BasePopoverProps = {
  getContainer?: () => HTMLElement
  destroyOnHide?: boolean
  children: ReactElement
  mode?: 'light' | 'dark'
  trigger?: string
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

const defaultProps = {
  defaultVisible: false,
}

export const Popover = forwardRef<PopoverRef, PopoverPropsWithContent>(
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const { mode = 'light' } = props

    const [visible, onVisibleChange] = useNewControllableValue({
      value: props.visible,
      defaultValue: props.defaultVisible,
      onChange: props.onVisibleChange,
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
        trigger={props.trigger}
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
