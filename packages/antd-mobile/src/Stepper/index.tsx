import * as React from 'react'
import { AddOutline, MinusOutline } from '@ant-design/mobile-icons'
import { withError, InputNumber } from '../rmc'
import { useTracker } from '../hooks'
import { StepperPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Stepper'

export const Stepper: React.FC<StepperPropsType> = props => {
  useTracker(Stepper.displayName)

  const { className, ...restProps } = props

  return (
    <InputNumber
      {...restProps}
      upHandler={<AddOutline />}
      downHandler={<MinusOutline />}
      prefixCls="amd-stepper"
      className={className}
    />
  )
}

Stepper.displayName = 'Stepper'

Stepper.defaultProps = {
  step: 1,
}

export default withError(Stepper)
