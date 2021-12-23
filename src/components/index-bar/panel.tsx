import React, { FC } from 'react'
import { NativeProps } from '../../utils/native-props'

export type IndexBarAnchorProps = {
  index: string
  title?: string
} & NativeProps

export const Panel: FC<IndexBarAnchorProps> = () => null
