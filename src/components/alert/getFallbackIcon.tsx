import {
  CheckCircleFill,
  CloseCircleFill,
  ExclamationCircleFill,
  InformationCircleFill,
} from 'antd-mobile-icons'
import React from 'react'

export function getFallbackIcon(type?: string) {
  switch (type) {
    case 'success':
      return <CheckCircleFill />
    case 'warning':
      return <ExclamationCircleFill />
    case 'error':
      return <CloseCircleFill />
    default:
      return <InformationCircleFill />
  }
}
