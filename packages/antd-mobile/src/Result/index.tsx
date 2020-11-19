import * as React from 'react'
import classnames from 'classnames'
import {
  CheckCircleFill,
  CloseCircleFill,
  InformationCircleFill,
  ClockCircleFill,
  ExclamationCircleFill,
} from '@ant-design/mobile-icons'
import { useTracker } from '../hooks'
import { withError } from '../rmc'
import { ResultPropsType } from './PropsType'
import Button from '../Button'

import '@ant-design/mobile-styles/lib/Result'

const prefixCls = 'amd-result'

export const Result: React.FC<ResultPropsType> = props => {
  const { className, type, img, title, message, buttons } = props

  useTracker(Result.displayName)

  const clsStr = classnames(className, prefixCls)

  const renderImg = () => {
    const wrap = (c: React.ReactNode, cls?: string) => {
      const className = classnames(`${prefixCls}-img`, {
        [`${prefixCls}-img-${cls}`]: !!cls,
      })
      return <div className={className}>{c}</div>
    }

    switch (type) {
      case 'success': {
        return wrap(<CheckCircleFill />, type)
      }

      case 'error': {
        return wrap(<CloseCircleFill />, type)
      }

      case 'info': {
        return wrap(<InformationCircleFill />, type)
      }

      case 'wait': {
        return wrap(<ClockCircleFill />, type)
      }

      case 'warn': {
        return wrap(<ExclamationCircleFill />, type)
      }
    }

    if (!img || !React.isValidElement(img)) {
      return null
    }

    return wrap(img)
  }

  const renderButtons = () => {
    if (!Array.isArray(buttons) || buttons.length === 0) {
      return null
    }

    return (
      <div className={`${prefixCls}-buttons`}>
        {buttons.map((item, i) => {
          return <Button {...item} key={i} />
        })}
      </div>
    )
  }

  return (
    <div className={clsStr} role="alert">
      <div className={`${prefixCls}-main`}>
        {renderImg()}
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        {message && <div className={`${prefixCls}-message`}>{message}</div>}
      </div>
      {renderButtons()}
    </div>
  )
}

Result.displayName = 'Result'

export default withError(Result)
