import * as React from 'react'
import { unstable_Coupon as Coupon } from '@ant-design/mobile'

export default () => (
  <>
    <Coupon
      image="https://i04piccdn.sogoucdn.com/b3a3b83916659a50"
      title="卡片标题"
      subTitle="副标题文案"
      buttonText="立即使用"
    />
    <br />
    <Coupon
      image="https://i04piccdn.sogoucdn.com/b3a3b83916659a50"
      title="卡片标题"
    />
    <br />
    <Coupon
      image="https://i04piccdn.sogoucdn.com/b3a3b83916659a50"
      title="卡片标题"
      subTitle="副标题文案"
      subButtonText="规则详情"
      buttonText="立即使用"
    >
      有效期: 2019.08.30-2019.12.30
      <br />
      有效期: 2019.08.30-2019.12.30
    </Coupon>
    <br />
    <Coupon title="卡片标题" subTitle="副标题文案" buttonText="立即使用" />
  </>
)
