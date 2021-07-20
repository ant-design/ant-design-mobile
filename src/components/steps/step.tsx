import React, {FC} from 'react'
import classNames from 'classnames'

const classPrefix = `am-step`

export interface StepProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  status?: 'wait' | 'process' | 'finish' | 'error'
}

const Step: FC<StepProps> = props => {
  const {title, description, icon, status = 'wait'} = props

  const iconClass = classNames(
    `${classPrefix}-icon-dot`,
    `${classPrefix}-icon-dot-${status}`
  )

  const descriptionClass = classNames(
    `${classPrefix}-item-description`,
    `${classPrefix}-item-description-${status}`
  )

  const contentClass = classNames(
    `${classPrefix}-item-content`,
    `${classPrefix}-item-content-${status}`
  )

  return (
    <div className={`${classPrefix}-item-container`}>
      <div className={`${classPrefix}-item-icon`}>
        <span className={iconClass}>{icon}</span>
      </div>
      <div className={contentClass}>
        <div className={`${classPrefix}-item-title`}>{title}</div>
        <div className={descriptionClass}>{description}</div>
      </div>
    </div>
  )
}

export default Step
