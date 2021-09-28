import React, { FC } from 'react'
import classNames from 'classnames'

const classPrefix = `adm-step`

export interface StepProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  status?: 'wait' | 'process' | 'finish' | 'error'
}

export const Step: FC<StepProps> = props => {
  const { title, description, icon, status = 'wait' } = props

  return (
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
