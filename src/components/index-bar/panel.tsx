import React, { useContext, useEffect } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { IndexBarContext } from './context'

const classPrefix = `adm-index-bar-anchor`

export type IndexBarAnchorProps = {
  index: string
  title?: string
} & NativeProps

export const Panel: React.FC<IndexBarAnchorProps> = props => {
  const { setUpdate } = useContext(IndexBarContext)

  useEffect(() => {
    setUpdate(val => (val + 1) | 0)
  }, [props.index])

  return withNativeProps(
    props,
    <div data-index={props.index} className={classPrefix}>
      <div className={`${classPrefix}-title`}>{props.title || props.index}</div>
      {props.children}
    </div>
  )
}
