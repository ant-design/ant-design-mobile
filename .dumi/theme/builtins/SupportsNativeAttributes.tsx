import React, { FC } from 'react'

interface Props {
  children?: string
}

export const SupportsNativeAttributes: FC<Props> = props => {
  return (
    <div className='__dumi-default-alert' {...{ type: 'info' }}>
      {props.children} 支持{' '}
      <a href='https://reactjs.org/docs/dom-elements.html' target='_blank'>
        data 属性和 aria 属性
      </a>
    </div>
  )
}

export default SupportsNativeAttributes
