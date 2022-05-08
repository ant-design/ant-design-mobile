import React, {
  useState,
  useEffect,
  ReactNode,
  forwardRef,
  useImperativeHandle,
} from 'react'
import Popup, { PopupProps } from '../popup'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
  PickerValueExtend,
} from './index'
import PickerView from '../picker-view'
import {
  generateColumnsExtend,
  useColumnsExtend,
} from '../picker-view/columns-extend'
import { useConfig } from '../config-provider'
import { useMemoizedFn } from 'ahooks'
import SafeArea from '../safe-area'
import { defaultRenderLabel } from './picker-utils'
import classNames from 'classnames'
import {
  Actions,
  useControllableVisible,
} from '../../utils/use-controllable-visible'

const classPrefix = `adm-picker`

export type PickerProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  onSelect?: (value: PickerValue[], extend: PickerValueExtend) => void
  onConfirm?: (value: PickerValue[], extend: PickerValueExtend) => void
  onCancel?: () => void
  onClose?: () => void
  closeOnMaskClick?: boolean
  visible?: boolean
  title?: ReactNode
  confirmText?: ReactNode
  cancelText?: ReactNode
  children?: (items: (PickerColumnItem | null)[], actions: Actions) => ReactNode
  renderLabel?: (item: PickerColumnItem) => ReactNode
  mouseWheel?: boolean
  popupClassName?: string
  popupStyle?: React.CSSProperties
} & Pick<
  PopupProps,
  'getContainer' | 'afterShow' | 'afterClose' | 'onClick' | 'stopPropagation'
> &
  NativeProps<
    | '--header-button-font-size'
    | '--title-font-size'
    | '--item-font-size'
    | '--item-height'
  >

const defaultProps = {
  defaultValue: [],
  closeOnMaskClick: true,
  renderLabel: defaultRenderLabel,
}

export const Picker = forwardRef<Actions, PickerProps>((p, ref) => {
  const { locale } = useConfig()
  const props = mergeProps(
    defaultProps,
    {
      confirmText: locale.common.confirm,
      cancelText: locale.common.cancel,
    },
    p
  )

  const [visible, actions] = useControllableVisible(props.visible)

  useImperativeHandle(ref, () => actions)

  const [value, setValue] = usePropsValue({
    ...props,
    onChange: val => {
      const extend = generateColumnsExtend(props.columns, val)
      props.onConfirm?.(val, extend)
    },
  })

  const extend = useColumnsExtend(props.columns, value)

  const [innerValue, setInnerValue] = useState<PickerValue[]>(value)
  useEffect(() => {
    if (innerValue !== value) {
      setInnerValue(value)
    }
  }, [visible])
  useEffect(() => {
    if (!visible) {
      setInnerValue(value)
    }
  }, [value])

  const onChange = useMemoizedFn((val, ext) => {
    setInnerValue(val)
    if (visible) {
      props.onSelect?.(val, ext)
    }
  })

  const onClose = useMemoizedFn(() => {
    props.onClose?.()
    if (typeof props.visible !== 'boolean') {
      actions.close()
    }
  })

  const pickerElement = withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-header`}>
        <a
          className={`${classPrefix}-header-button`}
          onClick={() => {
            props.onCancel?.()
            onClose()
          }}
        >
          {props.cancelText}
        </a>
        <div className={`${classPrefix}-header-title`}>{props.title}</div>
        <a
          className={`${classPrefix}-header-button`}
          onClick={() => {
            setValue(innerValue)
            onClose()
          }}
        >
          {props.confirmText}
        </a>
      </div>
      <div className={`${classPrefix}-body`}>
        <PickerView
          columns={props.columns}
          renderLabel={props.renderLabel}
          value={innerValue}
          mouseWheel={props.mouseWheel}
          onChange={onChange}
        />
      </div>
    </div>
  )

  const popupElement = (
    <Popup
      style={props.popupStyle}
      className={classNames(`${classPrefix}-popup`, props.popupClassName)}
      visible={visible}
      position='bottom'
      onMaskClick={() => {
        if (!props.closeOnMaskClick) return
        props.onCancel?.()
        onClose()
      }}
      getContainer={props.getContainer}
      destroyOnClose
      afterShow={props.afterShow}
      afterClose={props.afterClose}
      onClick={props.onClick}
      forceRender={true}
      stopPropagation={props.stopPropagation}
    >
      {pickerElement}
      <SafeArea position='bottom' />
    </Popup>
  )

  return (
    <>
      {popupElement}
      {props.children?.(extend.items, actions)}
    </>
  )
})

Picker.displayName = 'Picker'
