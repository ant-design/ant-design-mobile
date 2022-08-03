import React, { FC, ReactNode, useState } from 'react'
import {
  CheckCircleFill,
  CloseCircleFill,
  InformationCircleFill,
  ClockCircleFill,
  ExclamationCircleFill,
} from 'antd-mobile-icons'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { isNodeWithContent } from '../../utils/is-node-with-content'
import Button from '../button'

const classPrefix = `adm-result-page`

const defaultProps = {
  status: 'info',
}

const iconRecord = {
  success: CheckCircleFill,
  error: CloseCircleFill,
  info: InformationCircleFill,
  waiting: ClockCircleFill,
  warning: ExclamationCircleFill,
}

interface ResultPageDetail {
  label: ReactNode
  value: ReactNode
  bold?: boolean
}

type ResultPageDetails = ResultPageDetail[]

type OnClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void | Promise<void> | unknown

export type ResultPageProps = {
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  details?: ResultPageDetails
  children?: ReactNode
  primaryButtonText?: ReactNode
  secondaryButtonText?: ReactNode
  onPrimaryButtonClick?: OnClick
  onSecondaryButtonClick?: OnClick
} & NativeProps<'--background-color'>

export const ResultPage: FC<ResultPageProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    status,
    title,
    description,
    details,
    icon,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
  } = props
  if (!status) return null
  const resultIcon = icon || React.createElement(iconRecord[status])

  const [collapse, setCollapse] = useState(false)

  const showSecondaryButton = isNodeWithContent(secondaryButtonText)
  const showPrimaryButton = isNodeWithContent(primaryButtonText)

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-header`}>
        <div className={`${classPrefix}-icon`}>{resultIcon}</div>
        <div className={`${classPrefix}-title`}>{title}</div>
        {isNodeWithContent(description) ? (
          <div className={`${classPrefix}-description`}>{description}</div>
        ) : null}
        {details && details.length ? (
          <div className={`${classPrefix}-details`}>
            {details.map((detail, index) => {
              const detailComponent = (
                <div
                  className={classNames(
                    `${classPrefix}-detail`,
                    detail.bold && `${classPrefix}-detail-bold`
                  )}
                  key={index}
                >
                  <span>{detail.label}</span>
                  <span>{detail.value}</span>
                </div>
              )
              if (index < 3) {
                return detailComponent
              } else if (index >= 3 && collapse) {
                return detailComponent
              }
            })}
            {details.length > 3 && (
              <div onClick={() => setCollapse(prev => !prev)}>
                <div
                  className={classNames(
                    `${classPrefix}-collapse`,
                    collapse && `${classPrefix}-collapse-active`
                  )}
                />
              </div>
            )}
          </div>
        ) : null}
        <div className={`${classPrefix}-bgWrapper`}>
          <div className={`${classPrefix}-bg`} />
        </div>
      </div>

      <div className={`${classPrefix}-content`}>{props.children}</div>

      <div className={`${classPrefix}-footer`}>
        {showSecondaryButton && (
          <Button
            block
            color='default'
            fill='solid'
            size='large'
            onClick={onSecondaryButtonClick}
            className={`${classPrefix}-footer-btn`}
          >
            {secondaryButtonText}
          </Button>
        )}
        {showPrimaryButton && showSecondaryButton && (
          <div className={`${classPrefix}-footer-space`} />
        )}
        {showPrimaryButton && (
          <Button
            block
            color='primary'
            fill='solid'
            size='large'
            onClick={onPrimaryButtonClick}
            className={`${classPrefix}-footer-btn`}
          >
            {primaryButtonText}
          </Button>
        )}
      </div>
    </div>
  )
}
