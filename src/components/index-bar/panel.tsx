import React, { FC } from 'react'
import { NativeProps } from '../../utils/native-props'

export type IndexBarPanelProps = {
  index: string
  title?: string
  brief?: string
} & NativeProps

export const Panel: FC<IndexBarPanelProps> = () => null
