import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  createRef,
  useEffect,
} from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { withDefaultProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import Popup from '../popup'
import Button from '../button'
import { GetContainer } from '../../utils/render-to-container'
import { renderToBody } from '../../utils/render-to-body'

const classPrefix = `adm-action-sheet`

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
  onAction?: (action: Action, index: number) => void
  onClose?: () => void
  afterClose?: () => void
  onMaskClick?: () => void
  closeOnAction?: boolean
  closeOnMaskClick?: boolean
  getContainer?: GetContainer
} & NativeProps

const defaultProps = {
  visible: false,
  actions: [],
  cancelText: '',
  closeOnAction: false,
  closeOnMaskClick: true,
}

export const ActionSheet = withDefaultProps(defaultProps)<ActionSheetProps>(
  props => {
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
        {withNativeProps(
          props,
          <div className={classPrefix}>
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
                      props.onAction?.(action, index)
                      if (props.closeOnAction) {
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
        )}
      </Popup>
    )
  }
)

export function showActionSheet(props: Omit<ActionSheetProps, 'visible'>) {
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
