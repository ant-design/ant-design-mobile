import React from 'react'
import { Radio, Space } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import styles from './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical'>
          <Radio />
          <Radio>有描述的单选框</Radio>
        </Space>
      </DemoBlock>

      <DemoBlock title='选项组'>
        <Radio.Group defaultValue='1'>
          <Space direction='vertical'>
            <Radio value='1'>第一项</Radio>
            <Radio value='2'>第二项</Radio>
            <Radio value='3'>第三项</Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>

      <DemoBlock title='占满整行宽度'>
        <Space direction='vertical' block>
          <Radio.Group>
            <Space direction='vertical' block>
              <Radio value='1' block className={styles.blockIndicator}>
                块级元素
              </Radio>
              <Radio value='2' className={styles.blockIndicator}>
                非块级元素
              </Radio>
            </Space>
          </Radio.Group>
          <DemoDescription>
            单选框的块级元素会占满整行，而非块级元素不会。灰色的背景标识了元素所占据的空间和可点击的区域。
          </DemoDescription>
        </Space>
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Radio.Group defaultValue='2'>
          <Space direction='vertical'>
            <Radio value='1' disabled>
              第一项
            </Radio>
            <Radio value='2'>第二项</Radio>
            <Radio value='3'>第三项</Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>
    </>
  )
}
