import React from 'react'
import { Button, Dialog, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import { sleep } from '../../../utils/sleep'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() =>
              Dialog.alert({
                content: '人在天边月上明',
              })
            }
          >
            最简单的小对话框
          </Button>
          <Button
            block
            onClick={async () => {
              await Dialog.alert({
                title: '点击遮罩关闭',
                closeOnMaskClick: true,
              })
              Toast.show({ content: '已关闭', position: 'bottom' })
            }}
          >
            点击遮罩关闭
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='操作按钮'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() => {
              Dialog.show({
                content: '人在天边月上明，风初紧，吹入画帘旌',
                closeOnAction: true,
                actions: [
                  {
                    key: 'more',
                    text: '查看详情',
                  },
                  [
                    {
                      key: 'cancel',
                      text: '取消',
                    },
                    {
                      key: 'delete',
                      text: '删除',
                      bold: true,
                      color: 'danger',
                    },
                  ],
                ],
              })
            }}
          >
            自定义按钮
          </Button>
          <Button
            block
            onClick={() =>
              Dialog.confirm({
                content: '是否提交申请',
                onConfirm: async () => {
                  await sleep(3000)
                  Toast.success({ content: '提交成功', position: 'bottom' })
                },
              })
            }
          >
            异步操作执行成功
          </Button>
          <Button
            block
            onClick={() =>
              Dialog.confirm({
                content: '是否提交申请',
                onConfirm: async () => {
                  await sleep(3000)
                  Toast.fail({ content: '提交失败', position: 'bottom' })
                  throw new Error()
                },
              })
            }
          >
            异步操作执行失败
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='内容区域'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() =>
              Dialog.confirm({
                title: '提示',
                content: Array(1000).join('6'),
              })
            }
          >
            超长文本
          </Button>
          <Button
            block
            onClick={() =>
              Dialog.alert({
                headerImage:
                  'https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ',
                title: '手持工牌照示例',
                content: '请用手机拍摄手持工牌照，注意保持照片清晰',
              })
            }
          >
            有图片
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='获取点击结果'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() =>
              Dialog.alert({
                title: '异步方式调用 alert',
                content: 'then 的回调会在弹窗关闭时调用',
              }).then(() => {
                Toast.show({ content: '已关闭', position: 'bottom' })
              })
            }
          >
            异步方式 alert
          </Button>
          <Button
            block
            onClick={() => {
              Dialog.confirm({
                title: '异步方式调用 confirm',
                content: (
                  <div style={{ color: 'red' }}>
                    then 的回调函数会在确认时调用
                    <br />
                    catch 的回调函数会在取消时调用
                  </div>
                ),
              }).then(confirm => {
                if (confirm) {
                  Toast.show({ content: '点击了确认', position: 'bottom' })
                } else {
                  Toast.show({ content: '点击了取消', position: 'bottom' })
                }
              })
            }}
          >
            异步方式 confirm
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}
