import React from 'react'
import { Skeleton } from 'antd-mobile'

export const LoadingContent = () => {
  return (
    <div style={{ padding: '40px 15%' }}>
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  )
}
