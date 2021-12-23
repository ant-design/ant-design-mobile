import React, { FC } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-step`

export type StepProps = {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  status?: 'wait' | 'process' | 'finish' | 'error'
} & NativeProps

export const Step: FC<StepProps> = props => {
  const { title, description, icon, status = 'wait' } = props

  return withNativeProps(
    props,
    <div
      className={classNames(
        `${classPrefix}`,
        `${classPrefix}-status-${status}`
      )}
    >
      <div className={`${classPrefix}-indicator`}>
        <div className={`${classPrefix}-icon-container`}>{icon}</div>
      </div>
      <div className={`${classPrefix}-content`}>
        <div className={`${classPrefix}-title`}>{title}</div>
        {!!description && (
          <div className={`${classPrefix}-description`}>{description}</div>
        )}
      </div>
    </div>
  )
}
