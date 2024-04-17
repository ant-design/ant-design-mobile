import React from 'react'
import {
  CheckCircleFill,
  CloseCircleFill,
  InformationCircleFill,
  ClockCircleFill,
  ExclamationCircleFill,
} from 'antd-mobile-icons'
import { useConfig } from '../config-provider'

export type ResultIconProps = {}

export const useResultIcon = (
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
) => {
  const { result: componentConfig = {} } = useConfig()
  const {
    successIcon = <CheckCircleFill />,
    errorIcon = <CloseCircleFill />,
    infoIcon = <InformationCircleFill />,
    waitingIcon = <ClockCircleFill />,
    warningIcon = <ExclamationCircleFill />,
  } = componentConfig || {}
  switch (status) {
    case 'success':
      return successIcon
    case 'error':
      return errorIcon
    case 'info':
      return infoIcon
    case 'waiting':
      return waitingIcon
    case 'warning':
      return warningIcon
    default:
      return null
  }
}
