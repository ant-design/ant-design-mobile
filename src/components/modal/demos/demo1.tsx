import React from 'react'
import { Button, Modal, Space, Toast, Divider } from 'antd-mobile'
import { DemoBlock, DemoDescription, sleep } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() =>
              Modal.alert({
                content: '人在天边月上明',
                onConfirm: () => {
                  console.log('Confirmed')
                },
              })
            }
          >
            最简单的弹窗
          </Button>
          <Button
            block
            onClick={() => {
              Modal.alert({
                content: '点击遮罩关闭',
                closeOnMaskClick: true,
              })
            }}
          >
            点击遮罩关闭
          </Button>
          <Button
            block
            onClick={() => {
              Modal.alert({
                title: '带关闭图标的弹窗',
                content: '右上角有个关闭的小图标，点击它也可以关闭弹窗',
                showCloseButton: true,
              })
            }}
          >
            显示关闭图标
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='操作按钮'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() => {
              Modal.show({
                content: '人在天边月上明，风初紧，吹入画帘旌',
                closeOnAction: true,
                actions: [
                  {
                    key: 'online',
                    text: '在线阅读',
                    primary: true,
                  },
                  {
                    key: 'download',
                    text: '下载文件',
                  },
                  {
                    key: 'share',
                    text: '分享',
                  },
                ],
              })
            }}
          >
            自定义按钮
          </Button>
          <DemoDescription content='如果你想完全自由地控制按钮区域，那么可以通过 actions 参数来自定义操作按钮' />
          <Divider />
          <Button
            block
            onClick={() =>
              Modal.confirm({
                content: '是否提交申请',
                onConfirm: async () => {
                  await sleep(3000)
                  Toast.show({
                    icon: 'success',
                    content: '提交成功',
                    position: 'bottom',
                  })
                },
              })
            }
          >
            异步操作执行成功
          </Button>
          <Button
            block
            onClick={() =>
              Modal.confirm({
                content: '是否提交申请',
                onConfirm: async () => {
                  await sleep(3000)
                  Toast.show({
                    icon: 'fail',
                    content: '提交失败',
                    position: 'bottom',
                  })
                  throw new Error()
                },
              })
            }
          >
            异步操作执行失败
          </Button>
          <DemoDescription content='onAction、onConfirm、onCancel、onClick 这些事件函数都支持返回一个 Promise，通过这种方式，可以让按钮在执行异步操作的时候变为加载状态' />
          <Button
            block
            onClick={() => {
              Modal.show({
                content: '点击遮罩关闭',
                closeOnMaskClick: true,
              })
            }}
          >
            无操作按钮
          </Button>
          <DemoDescription>
            当你不设置操作按钮时，可以把 Modal 当作一个普通的弹层来使用
          </DemoDescription>
        </Space>
      </DemoBlock>
    </>
  )
}
