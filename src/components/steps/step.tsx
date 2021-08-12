import React, { FC } from 'react'
import classNames from 'classnames'

const classPrefix = `am-step`

export interface StepProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  status?: 'wait' | 'process' | 'finish' | 'error'
}

const Step: FC<StepProps> = props => {
  const { title, description, icon, status = 'wait' } = props

  return (
    <div
      className={classNames(
        `${classPrefix}`,
        `${classPrefix}-status-${status}`
      )}
    >
      <div className='am-step-indicator'>
        <div className={`${classPrefix}-icon-container`}>{icon}</div>
      </div>
      <div className='am-step-content'>
        <div className='am-step-title'>{title}</div>
        {!!description && (
          <div className='am-step-description'>{description}</div>
        )}
      </div>
    </div>
  )
}

export default Step
