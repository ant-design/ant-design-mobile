import React from 'react'
import { ResultPage, Toast } from 'antd-mobile'

export default () => {
  return (
    <ResultPage
      status='success'
      title='操作成功'
      description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
      secondaryButtonText='辅助操作'
      onSecondaryButtonClick={() => Toast.show('点击了辅助按钮')}
      primaryButtonText='主要操作'
      onPrimaryButtonClick={() => Toast.show('点击了主要按钮')}
    />
  )
}
