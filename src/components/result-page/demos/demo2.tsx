import React from 'react'
import { ResultPage } from 'antd-mobile'

export default () => {
  const details = [
    {
      label: '收款方',
      value: '张三',
      bold: true,
    },
    {
      label: '付款方式',
      value: '账户余额',
    },
    {
      label: '转账金额',
      value: '¥100.00',
    },
    {
      label: '转账金额',
      value: '¥100.00',
    },
    {
      label: '转账金额',
      value: '¥100.00',
    },
  ]

  return (
    <ResultPage
      status='success'
      title='操作成功'
      description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
      details={details}
    />
  )
}
