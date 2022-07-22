import React from 'react'
import { ResultPage, Card } from 'antd-mobile'

export default () => {
  return (
    <ResultPage
      status='success'
      title='操作成功'
      description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
    >
      <Card bodyStyle={{ height: 64 }}> </Card>
      <Card bodyStyle={{ height: 128, marginTop: 12 }}> </Card>
    </ResultPage>
  )
}
