import * as React from 'react'
import classnames from 'classnames'
import { SearchOutline, CloseCircleFill } from '@ant-design/mobile-icons'
import { Touchable, withError } from '../rmc'
import { useTracker, useControlledByValue } from '../hooks'
import { SearchBarPropsType } from './PropsType'
import { convertRef, getDataAttr } from '../_internal'

import '@ant-design/mobile-styles/lib/SearchBar'

const noop = () => null
const prefixCls = 'amd-search'

export const SearchBar: React.FC<SearchBarPropsType> = props => {
  useTracker(SearchBar.displayName)

  const {
    placeholder = '',
    onSubmit = noop,
    onFocus = noop,
    onClear = noop,
    autoFocus = false,
    showCancelButton = false,
    disabled = false,
    maxLength,
    borderColor,

    // @ts-ignore
    // Provide by withError with forwardRef=true
    forwardRef,
  } = props

  const { value, onChange } = useControlledByValue(props)

  const { hostRef: inputRef, ref } = convertRef<any>(forwardRef)

  const [focus, setFocus] = React.useState(false)

  const inputContainerRef = React.createRef<HTMLFormElement>()

  const syntheticPhRef = React.createRef<HTMLDivElement>()

  const syntheticPhContainerRef = React.createRef<HTMLSpanElement>()

  const rightBtnRef = React.createRef<HTMLDivElement>()

  const rightBtnInitMarginLeft = React.useRef<string | null>(null)

  React.useEffect(() => {
    if (rightBtnRef && rightBtnRef.current) {
      const initBtn = window.getComputedStyle(rightBtnRef.current)
      rightBtnInitMarginLeft.current = initBtn.marginLeft
    }
  }, [])

  React.useEffect(() => {
    if (syntheticPhRef && syntheticPhRef.current) {
      if (
        inputContainerRef?.current &&
        inputContainerRef.current.className.indexOf(`${prefixCls}-start`) > -1
      ) {
        // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
        // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
        if (syntheticPhContainerRef?.current) {
          const realWidth = syntheticPhContainerRef.current.getBoundingClientRect()
            .width // 包含小数
          syntheticPhRef.current.style.width = `${Math.ceil(realWidth)}px`
        }
        if (!props.showCancelButton && rightBtnRef?.current) {
          rightBtnRef.current.style.marginRight = '0'
        }
      } else {
        syntheticPhRef.current.style.width = '100%'
        if (!props.showCancelButton && rightBtnRef?.current) {
          rightBtnRef.current.style.marginRight = `-${rightBtnRef.current
            .offsetWidth +
            (rightBtnInitMarginLeft.current != null
              ? parseInt(rightBtnInitMarginLeft.current, 10)
              : 0)}px`
        }
      }
    }
  })

  const submitCbk = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit && onSubmit(value || '')
    inputRef?.current?.blur()
  }

  const changeCbk = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!focus) {
      setFocus(true)
    }
    const value = e.target.value
    onChange?.(value)
  }

  // 所有 focus 操作请用 inputRef.current?.focus() 来触发
  const focusCbk = () => {
    setFocus(true)
    onFocus?.()
  }

  // 所有 blur 操作请用 inputRef.current?.blur() 来触发
  const blurCbk = () => {
    setFocus(false)
    props.onBlur?.()
  }

  const cancelCbk = () => {
    props.onCancel?.(value)
    doClear()
  }

  const doClear = (blurFromOnClear = true) => {
    onClear && onClear('')
    onChange && onChange('')
    blurFromOnClear && inputRef.current?.blur()
  }

  const wrapCls = classnames(prefixCls, props.className, {
    'amd-search-start': !!(focus || (value && value.length > 0)),
  })

  const cancelCls = classnames(`${prefixCls}-cancel`, {
    [`${prefixCls}-cancel-show`]: !!(
      showCancelButton ||
      focus ||
      (value && value.length > 0)
    ),
    [`${prefixCls}-cancel-anim`]: true,
  })

  const clearCls = classnames({
    [`${prefixCls}-clear`]: true,
    [`${prefixCls}-clear-show`]: !!(focus && value && value.length > 0),
  })

  return (
    <form
      onSubmit={submitCbk}
      ref={inputContainerRef}
      action="#"
      className={wrapCls}
    >
      <div
        className={`${prefixCls}-input`}
        style={borderColor ? { borderColor } : {}}
      >
        <div className={`${prefixCls}-synthetic-ph`} ref={syntheticPhRef}>
          <span
            className={`${prefixCls}-synthetic-ph-container`}
            ref={syntheticPhContainerRef}
          >
            <SearchOutline size="xs" />
            <span
              className={`${prefixCls}-synthetic-ph-placeholder`}
              style={{
                visibility: placeholder && !value ? 'visible' : 'hidden',
              }}
            >
              {placeholder}
            </span>
          </span>
        </div>
        <input
          type="search"
          ref={ref}
          autoFocus={autoFocus}
          className={`${prefixCls}-value`}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={changeCbk}
          onFocus={focusCbk}
          onBlur={blurCbk}
          {...getDataAttr(props)}
        />
        <Touchable
          onPress={() => {
            doClear(false)
          }}
        >
          <a className={clearCls}>
            <CloseCircleFill size="xs" />
          </a>
        </Touchable>
      </div>
      <Touchable
        onPress={() => {
          cancelCbk()
        }}
      >
        <div className={cancelCls} ref={rightBtnRef}>
          {props.cancelText || '取消'}
        </div>
      </Touchable>
    </form>
  )
}

SearchBar.displayName = 'SearchBar'

SearchBar.defaultProps = {
  defaultValue: '',
}

export default withError(SearchBar, {
  forwardRef: true,
})
