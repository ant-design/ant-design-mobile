import classNames from 'classnames'
import React, { forwardRef, useRef } from 'react'
import { withNativeProps } from '../../utils/native-props'
import { type GetContainer } from '../../utils/render-to-container'
import { mergeProps } from '../../utils/with-default-props'
import Button from '../button'
import CalendarPickerView, {
  CalendarPickerViewProps,
  CalendarPickerViewRef,
} from '../calendar-picker-view'
import { Context } from '../calendar-picker-view/calendar-picker-view'
import { useConfig } from '../config-provider'
import Divider from '../divider'
import Popup from '../popup'

const classPrefix = 'adm-calendar-picker'

export type CalendarPickerRef = CalendarPickerViewRef

export type CalendarPickerProps = CalendarPickerViewProps & {
  visible?: boolean
  confirmText?: string
  popupClassName?: string
  popupStyle?: React.CSSProperties
  popupBodyStyle?: React.CSSProperties
  forceRender?: true
  closeOnMaskClick?: boolean
  onClose?: () => void
  onMaskClick?: () => void
  getContainer?: GetContainer
} & (
    | {
        selectionMode?: undefined
        onConfirm?: undefined
      }
    | {
        selectionMode: 'single'
        onConfirm?: (val: Date | null) => void
      }
    | {
        selectionMode: 'range'
        onConfirm?: (val: [Date, Date] | null) => void
      }
  )

const defaultProps = {
  weekStartsOn: 'Sunday',
  defaultValue: null,
  allowClear: true,
  usePopup: true,
  selectionMode: 'single',
}

export const CalendarPicker = forwardRef<
  CalendarPickerRef,
  CalendarPickerProps
>((p, ref) => {
  const props = mergeProps<typeof defaultProps, CalendarPickerProps>(
    defaultProps,
    p
  )

  const { locale } = useConfig()
  const calendarRef = (ref ??
    useRef<CalendarPickerRef>(null)) as React.RefObject<CalendarPickerRef>

  const {
    visible,
    confirmText,
    popupClassName,
    popupStyle,
    popupBodyStyle,
    forceRender,
    closeOnMaskClick,
    onClose,
    onConfirm,
    onMaskClick,
    getContainer,
    ...calendarViewProps
  } = props

  const viewContext = React.useMemo(() => ({ visible: !!visible }), [visible])

  const footer = (
    <div className={`${classPrefix}-footer`}>
      <Divider />
      <div className={`${classPrefix}-footer-bottom`}>
        <Button
          color='primary'
          onClick={() => {
            const dateRange = calendarRef.current?.getDateRange() ?? null

            if (props.selectionMode === 'single') {
              props.onConfirm?.(dateRange ? dateRange[0] : null)
            } else if (props.selectionMode === 'range') {
              props.onConfirm?.(dateRange)
            }
            onClose?.()
          }}
        >
          {confirmText ?? locale.Calendar.confirm}
        </Button>
      </div>
    </div>
  )

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <Popup
        visible={visible}
        className={classNames(`${classPrefix}-popup`, popupClassName)}
        showCloseButton
        forceRender={ref ? true : forceRender}
        style={popupStyle}
        bodyStyle={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          minHeight: '80vh',
          overflow: 'auto',
          ...popupBodyStyle,
        }}
        onClose={onClose}
        onMaskClick={() => {
          onMaskClick?.()
          if (closeOnMaskClick) {
            onClose?.()
          }
        }}
        getContainer={getContainer}
      >
        <Context.Provider value={viewContext}>
          <CalendarPickerView ref={calendarRef} {...calendarViewProps} />
        </Context.Provider>
        {footer}
      </Popup>
    </div>
  )
})
