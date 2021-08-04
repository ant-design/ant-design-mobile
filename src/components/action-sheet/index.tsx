import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  createRef,
  useEffect,
} from 'react'
import { ElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import Popup from '../popup'
import Button from '../button'
import { GetContainer } from '../../utils/render-to-container'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { renderToBody } from '../../utils/render-to-body'

const classPrefix = `am-action-sheet`

export type Action = {
  key: string | number
  text: string
  disabled?: boolean
  description?: string
  danger?: boolean
  onClick?: () => void
}

export type ActionSheetProps = {
  visible: boolean
  actions: Action[]
  extra?: React.ReactNode
  cancelText?: string
  onSelect?: (action: Action, index: number) => void
  onClose?: () => void
  afterClose?: () => void
  onMaskClick?: () => void
  closeOnSelect?: boolean
  closeOnMaskClick?: boolean
  getContainer?: GetContainer
} & ElementProps

const defaultProps = {
  visible: false,
  actions: [],
  cancelText: '',
  closeOnSelect: false,
  closeOnMaskClick: true,
}

const ActionSheet = withDefaultProps(defaultProps)<ActionSheetProps>(props => {
  return (
    <Popup
      visible={props.visible}
      onMaskClick={() => {
        props.onMaskClick?.()
        if (props.closeOnMaskClick) {
          props.onClose?.()
        }
      }}
      afterClose={props.afterClose}
      className={`${classPrefix}-popup`}
      getContainer={props.getContainer}
    >
      <div className={classNames(classPrefix, props.className)}>
        {props.extra && (
          <div className={`${classPrefix}-extra`}>{props.extra}</div>
        )}
        <div className={`${classPrefix}-button-list`}>
          {props.actions.map((action, index) => (
            <div
              key={action.key}
              className={`${classPrefix}-button-item-wrapper`}
            >
              <Button
                block
                fill='none'
                disabled={action.disabled}
                onClick={() => {
                  action.onClick?.()
                  props.onSelect?.(action, index)
                  if (props.closeOnSelect) {
                    props.onClose?.()
                  }
                }}
                className={classNames(`${classPrefix}-button-item`, {
                  [`${classPrefix}-button-item-danger`]: action.danger,
                })}
              >
                <div className={`${classPrefix}-button-item-name`}>
                  {action.text}
                </div>
                {action.description && (
                  <div className={`${classPrefix}-button-item-description`}>
                    {action.description}
                  </div>
                )}
              </Button>
            </div>
          ))}
        </div>

        {props.cancelText && (
          <div className={`${classPrefix}-cancel`}>
            <div className={`${classPrefix}-button-item-wrapper`}>
              <Button
                block
                fill='none'
                className={`${classPrefix}-button-item`}
                onClick={() => {
                  props.onClose?.()
                }}
              >
                <div className={`${classPrefix}-button-item-name`}>
                  {props.cancelText}
                </div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Popup>
  )
})

function showActionSheet(props: Omit<ActionSheetProps, 'visible'>) {
  type Ref = {
    close: () => void
  }
  const Wrapper = forwardRef<Ref>((_, ref) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      setVisible(true)
    }, [])
    useImperativeHandle(ref, () => ({
      close: () => {
        setVisible(false)
      },
    }))
    return (
      <ActionSheet
        {...props}
        visible={visible}
        onClose={() => {
          props.onClose?.()
          setVisible(false)
        }}
        afterClose={() => {
          props.afterClose?.()
          unmount()
        }}
      />
    )
  })
  const ref = createRef<Ref>()
  const unmount = renderToBody(<Wrapper ref={ref} />)
  return {
    close: () => {
      ref.current?.close()
    },
  }
}

export default attachPropertiesToComponent(ActionSheet, {
  show: showActionSheet,
})
