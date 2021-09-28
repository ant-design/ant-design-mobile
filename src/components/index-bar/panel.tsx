import React, { useContext, useEffect } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { IndexBarContext } from './context'

const classPrefix = `adm-index-bar-anchor`

export type IndexBarAnchorProps = {
  index: string
  title?: string
} & NativeProps

export const Panel: React.FC<IndexBarAnchorProps> = props => {
  const { setIndexes } = useContext(IndexBarContext)
  useEffect(() => {
    setIndexes(val => val.concat([props.index]))
    return () => {
      setIndexes(val => val.filter(x => x !== props.index))
    }
  }, [props.index])
  return withNativeProps(
    props,
    <div data-index={props.index} className={classPrefix}>
      <div className={`${classPrefix}-title`}>{props.title || props.index}</div>
      {props.children}
    </div>
  )
}
