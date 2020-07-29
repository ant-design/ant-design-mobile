import * as React from 'react'
import { unstable_Result as Result } from '@ant-design/mobile'

export default () => (
  <>
    <Result
      type="success"
      title="操作成功"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />

    <hr />

    <Result
      type="error"
      title="错误操作"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />

    <hr />

    <Result
      type="info"
      title="信息提示"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />

    <hr />

    <Result
      type="warn"
      title="警告提示"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />

    <hr />

    <Result
      type="wait"
      title="等待处理"
      message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />
  </>
)
