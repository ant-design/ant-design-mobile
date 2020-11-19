import * as React from 'react'
import { unstable_Result as Result } from '@ant-design/mobile'
import { AlipayCircleFill } from '@ant-design/mobile-icons'

export default () => (
  <>
    <Result
      img={<AlipayCircleFill color="#1677ff" size="lg" />}
      title="操作成功"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
      buttons={[
        {
          type: 'primary',
          children: '返回首页',
        },
        {
          children: '取消',
        },
      ]}
    />
  </>
)
