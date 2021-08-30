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
      <div className='adm-step-indicator'>
        <div className={`${classPrefix}-icon-container`}>{icon}</div>
      </div>
      <div className='adm-step-content'>
        <div className='adm-step-title'>{title}</div>
        {!!description && (
          <div className='adm-step-description'>{description}</div>
        )}
      </div>
    </div>
  )
}
