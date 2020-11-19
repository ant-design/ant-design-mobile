import * as React from 'react'
import classnames from 'classnames'
import { CheckCircleFill, CloseCircleFill } from '@ant-design/mobile-icons'
import { withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import StepContext from './StepContext'
import { StepPropsType } from './PropsType'

export const Step: React.FC<StepPropsType> = ({
  title,
  description,
  index = 0,
  fail = false,
  ...rest
}) => {
  useTracker(Step.displayName)

  const { current, direction, length } = React.useContext(StepContext)
  const isActive = index <= current - 1
  const ltActive = index < current - 1

  let verticalIcon =
    index <= current - 1 ? (
      <CheckCircleFill size="md" />
    ) : (
      <div className="amd-vertical-step-active-image is-normal" />
    )

  if (fail) {
    verticalIcon = <CloseCircleFill size="md" />
  }

  if (direction === 'horizontal') {
    return (
      <div
        className="amd-hor-step"
        style={{
          width: 100 / (length - 1) + '%',
        }}
        {...getDataAttr(rest)}
      >
        <div
          className={classnames('amd-hor-step-line', {
            'is-active': isActive,
          })}
        >
          <div
            className={classnames('amd-hor-step-icon', {
              'is-active': isActive,
            })}
          ></div>
        </div>
        <div className="amd-hor-step-text">
          <div className="amd-hor-step-title">{title}</div>
          <div className="amd-hor-step-description">{description}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="amd-vertical-step" {...getDataAttr(rest)}>
        <div className="amd-vertical-step-left">
          {index === length - 1 ? null : (
            <>
              <div
                className={classnames(
                  'amd-vertical-step-line',
                  'amd-vertical-step-line-top',
                  { 'is-active': isActive, 'is-fail': fail },
                )}
              ></div>
              <div
                className={classnames(
                  'amd-vertical-step-line',
                  'amd-vertical-step-line-bottom',
                  { 'is-active': ltActive },
                )}
              ></div>
            </>
          )}
          <div
            className={classnames('amd-vertical-step-icon', {
              'is-active': isActive,
              'is-normal': !isActive,
              'is-fail': fail,
            })}
          >
            {verticalIcon}
          </div>
        </div>
        <div className="amd-vertical-step-right">
          <div
            className={classnames('amd-vertical-step-title', {
              'is-active': isActive,
              'is-fail': fail,
            })}
          >
            {title}
          </div>
          <div className="amd-vertical-step-description">{description}</div>
        </div>
      </div>
    )
  }
}

Step.displayName = 'Step'

export default withError(Step)
