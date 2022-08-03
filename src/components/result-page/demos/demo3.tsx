import React from 'react'
import { ResultPage, Card } from 'antd-mobile'

export default () => {
  return (
    <ResultPage
      status='success'
      title='操作成功'
      description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
    >
      <ResultPage.Card style={{ height: 64, padding: 8 }}>
        搭配 ResultPage.Card 使用
      </ResultPage.Card>

      <Card style={{ height: 128, marginTop: 12 }}>搭配 Card 使用</Card>
    </ResultPage>
  )
}
