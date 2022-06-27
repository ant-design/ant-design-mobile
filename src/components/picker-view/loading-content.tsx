import React from 'react'
import Skeleton from '../skeleton'

export const LoadingContent = () => {
  return (
    <div style={{ width: '100%', height: '100%', padding: '40px 15%' }}>
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  )
}
