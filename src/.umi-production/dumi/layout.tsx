// @ts-nocheck
import React from 'react'
import config from '@@/dumi/config'
import demos from '@@/dumi/demos'
import apis from '@@/dumi/apis'
import Layout from '/Users/jilin/projects/antd/antd-mobile/node_modules/.pnpm/@umijs+preset-dumi@1.1.53_react-dom@18.2.0_react@18.2.0_typescript@4.6.4_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/theme/layout'

export default props => (
  <Layout {...props} config={config} demos={demos} apis={apis} />
)
