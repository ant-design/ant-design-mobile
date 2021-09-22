import React from 'react'
import Layout from './layout'
import type { IRouteComponentProps } from '@umijs/types'
import '../style/layout.less'

const MobileLayout: React.FC<IRouteComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <Layout {...props}>
      <div className='__dumi-default-mobile-content'>
        <article>{children}</article>
      </div>
    </Layout>
  )
}

export default MobileLayout
