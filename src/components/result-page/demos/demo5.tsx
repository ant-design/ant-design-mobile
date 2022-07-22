import React from 'react'
import { ResultPage, Card } from 'antd-mobile'
import { AlipayCircleFill } from 'antd-mobile-icons'

export default () => {
  const details = [
    {
      label: '肯德基（嘉里中心店）',
      value: '¥ 36.50',
      major: true,
    },
    {
      label: '付款方式',
      value: '账户余额',
    },
  ]

  return (
    <ResultPage
      status='waiting'
      title={<div style={{ fontSize: 15 }}>支付成功</div>}
      description={
        <>
          <span style={{ fontSize: 32, color: '#ffffff', marginRight: 4 }}>
            ¥
          </span>
          <span style={{ fontSize: 48, color: '#ffffff' }}>36.50</span>
        </>
      }
      icon={<AlipayCircleFill />}
      details={details}
      secondaryButtonValue='辅助操作'
      primaryButtonValue='主要操作'
    >
      <Card bodyStyle={{ height: 64 }}> </Card>
      <Card bodyStyle={{ height: 128, marginTop: 12 }}> </Card>
      <Card bodyStyle={{ height: 128, marginTop: 12 }}> </Card>
      <Card bodyStyle={{ height: 128, marginTop: 12 }}> </Card>
      <Card bodyStyle={{ height: 128, marginTop: 12 }}> </Card>
      <Card bodyStyle={{ height: 128, marginTop: 12 }}> </Card>
    </ResultPage>
  )
}
