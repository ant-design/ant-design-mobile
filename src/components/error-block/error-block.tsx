import { createErrorBlock } from './create-error-block'
import { ReactElement } from 'react'
import {
  busyImage,
  defaultImage,
  disconnectedImage,
  emptyImage,
} from './images'

const imageRecord: Record<
  'default' | 'disconnected' | 'empty' | 'busy',
  ReactElement
> = {
  'default': defaultImage,
  'disconnected': disconnectedImage,
  'empty': emptyImage,
  'busy': busyImage,
}

export const ErrorBlock = createErrorBlock(imageRecord)
