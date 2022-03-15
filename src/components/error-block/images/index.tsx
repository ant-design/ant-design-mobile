import { ReactElement } from 'react'
import { defaultImage } from './default'
import { disconnectedImage } from './disconnected'
import { emptyImage } from './empty'
import { busyImage } from './busy'

export const imageRecord: Record<
  'default' | 'disconnected' | 'empty' | 'busy',
  ReactElement
> = {
  'default': defaultImage,
  'disconnected': disconnectedImage,
  'empty': emptyImage,
  'busy': busyImage,
}
