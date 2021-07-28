import React, {
  useMemo,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  Ref,
  ReactElement,
} from 'react'
import Tooltip from 'rc-tooltip'
import { useControllableValue } from 'ahooks'
import Button from '../button'
import classNames from 'classnames'
import type { TooltipProps } from 'rc-tooltip/lib/Tooltip'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

const classPrefix = `am-popover`
const enterClassName = 'entering'
const leaveClassName = 'leaving'

type BasePopoverProps = {
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

export type Action = {
  text: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  key?: string
  [key: string]: any
}

type PopoverPropsWithContent = BasePopoverProps & { content: React.ReactNode }
type PopoverPropsWithActions<T> = BasePopoverProps & {
  actions: T[]
  onSelect?: (text: T) => void
}

type PopoverRef = {
  show: () => void
  hide: () => void
  visible: boolean
}

const Popover = forwardRef<PopoverRef, PopoverPropsWithContent>(
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

const PopMenu = forwardRef<PopoverRef, PopoverPropsWithActions<Action>>(
  (props: PopoverPropsWithActions<Action>, ref) => {
    const innerRef = useRef<PopoverRef>(null)
    useImperativeHandle(ref, () => innerRef.current!, [])

    const onClick = useCallback(
      (e: Action) => {
        const { onSelect } = props
        if (onSelect) {
          onSelect(e)
        }
        innerRef.current?.hide()
      },
      [(props as PopoverPropsWithActions<Action>).onSelect]
    )

    const overlay = useMemo(() => {
      return (
        <>
          {((props as PopoverPropsWithActions<Action>).actions || []).map(
            (ele, index) => (
              <div
                className={classNames(`${classPrefix}-inner-menu`, {
                  [`${classPrefix}-inner-menu-with-icon`]: !!ele.icon,
                })}
                key={ele.key ?? index}
              >
                <Button
                  disabled={ele.disabled}
                  onClick={() => {
                    if (!ele.disabled) {
                      onClick(ele)
                    }
                  }}
                  fill='none'
                  block
                >
                  {ele.icon && (
                    <span className={`${classPrefix}-inner-menu-icon`}>
                      {ele.icon}
                    </span>
                  )}
                  {ele.text}
                </Button>
              </div>
            )
          )}
        </>
      )
    }, [(props as PopoverPropsWithActions<Action>).actions, onClick])

    return (
      <Popover
        ref={innerRef}
        {...props}
        overlayClassName={classNames(
          `${classPrefix}-menu`,
          props.overlayClassName
        )}
        content={overlay}
      >
        {props.children}
      </Popover>
    )
  }
) as <T extends Action = Action>(
  props: PopoverPropsWithActions<T> & { ref?: Ref<PopoverRef> }
) => ReactElement

export default attachPropertiesToComponent(Popover, {
  Menu: PopMenu,
})
