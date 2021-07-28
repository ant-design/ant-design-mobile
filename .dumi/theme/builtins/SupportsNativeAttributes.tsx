import React, { FC } from 'react'
import Alert from 'dumi-theme-default/src/builtins/alert'

interface Props {
  children?: string
}

export const SupportsNativeAttributes: FC<Props> = props => {
  return (
    <Alert type='info'>
      {props.children} 支持{' '}
      <a href='https://reactjs.org/docs/dom-elements.html' target='_blank'>
        data 属性和 aria 属性
      </a>
    </Alert>
  )
}

export default SupportsNativeAttributes
