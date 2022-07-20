import React, { useState, FC, ReactNode, useRef, useEffect } from 'react'
import classNames from 'classnames'
import {
  CheckCircleFill,
  CloseCircleFill,
  InformationCircleFill,
  ClockCircleFill,
  ExclamationCircleFill,
} from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Button from '../button'

const classPrefix = `adm-result`

const iconRecord = {
  success: CheckCircleFill,
  error: CloseCircleFill,
  info: InformationCircleFill,
  waiting: ClockCircleFill,
  warning: ExclamationCircleFill,
}

export interface ResultPageDetail {
  label: ReactNode
  value: ReactNode
  major?: boolean
}

export type ResultPageDetails = ResultPageDetail[]

const defaultProps = {
  status: 'info',
}

export type ResultProps = {
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  details?: ResultPageDetails
  children?: ReactNode
  primaryButtonValue?: ReactNode
  onPrimaryButtonClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void>
  secondaryButtonValue?: ReactNode
  onSecondaryButtonClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void>
} & NativeProps

export const Result: FC<ResultProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    status,
    title,
    description,
    icon,
    details,
    primaryButtonValue,
    onPrimaryButtonClick,
    secondaryButtonValue,
    onSecondaryButtonClick,
    children,
  } = props
  if (!status) return null
  const resultIcon = icon || React.createElement(iconRecord[status])
  const [ellipsisDetails, setEllipsisDetails] = useState<ResultPageDetails>([])
  const isOpen = useRef<boolean>(false)

  const handleClickOpen = () => {
    isOpen.current = !isOpen.current
    setEllipsisDetails(!isOpen.current ? details!.slice(0, 3) : details!)
  }

  useEffect(() => {
    if (details && details.length) {
      setEllipsisDetails(details.slice(0, 3))
    }
  }, [details])

  const childrenList = React.Children
  childrenList.map(children, (child: any) => {
    if (child && child.type.name !== 'Card') {
      console.error('Result Children Must Be Card')
      return
    }
  })

  const renderContent = () => {
    return (
      <div className={classNames(classPrefix, `${classPrefix}-${status}`)}>
        <>
          <div className={`${classPrefix}-icon`}>{resultIcon}</div>
          <div className={`${classPrefix}-title`}>{title}</div>
          {children ? (
            children
          ) : description ? (
            <div className={`${classPrefix}-description`}>{description}</div>
          ) : null}
          {details && details.length ? (
            <>
              <div className={`${classPrefix}-details`}>
                {details.length <= 3
                  ? details.map((item, index) => {
                      return (
                        <div
                          key={index}
                          style={{ fontWeight: item.major ? 700 : 400 }}
                          className={`${classPrefix}-details`}
                        >
                          {item.label}
                        </div>
                      )
                    })
                  : ellipsisDetails.map((item, index) => {
                      return (
                        <div
                          key={index}
                          style={{ fontWeight: item.major ? 700 : 400 }}
                          className={`${classPrefix}-details`}
                        >
                          {item.label}
                        </div>
                      )
                    })}
              </div>
              {details.length > 3 ? (
                <div
                  className={`${classPrefix}-details-open`}
                  onClick={handleClickOpen}
                >
                  {isOpen.current ? '收起' : '展开'}
                </div>
              ) : null}
            </>
          ) : null}
          <div className={`${classPrefix}-btn`}>
            {secondaryButtonValue ? (
              <div className={`${classPrefix}-btn-second`}>
                <Button size='small' onClick={e => onSecondaryButtonClick?.(e)}>
                  {secondaryButtonValue}
                </Button>
              </div>
            ) : null}
            {primaryButtonValue ? (
              <div className={`${classPrefix}-btn-primary`}>
                <Button
                  color='primary'
                  size='small'
                  onClick={e => onPrimaryButtonClick?.(e)}
                >
                  {primaryButtonValue}
                </Button>
              </div>
            ) : null}
          </div>
        </>
      </div>
    )
  }

  return withNativeProps(props, renderContent())
}
