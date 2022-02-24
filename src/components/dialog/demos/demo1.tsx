import React, { useState, useRef } from 'react'
import { Button, Dialog, Space, Toast, Divider } from 'antd-mobile'
import { ExclamationCircleFill } from 'antd-mobile-icons'
import { DemoBlock, DemoDescription, lorem } from 'demos'
import { DialogShowRef } from 'antd-mobile/es/components/dialog'

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
                onConfirm: () => {
                  console.log('Confirmed')
                },
              })
            }
          >
            最简单的小对话框
          </Button>
          <Button
            block
            onClick={() => {
              Dialog.alert({
                content: '点击遮罩关闭',
                closeOnMaskClick: true,
              })
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
                    key: 'online',
                    text: '在线阅读',
                  },
                  {
                    key: 'download',
                    text: '下载文件',
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
                      danger: true,
                    },
                  ],
                ],
              })
            }}
          >
            自定义按钮
          </Button>
          <DemoDescription content='如果你想完全自由地控制按钮区域，那么可以通过 actions 参数来自定义操作按钮，当传入一个二级数组时，可以在同一行内并排放置多个按钮' />
          <Divider />
          <Button
            block
            onClick={() =>
              Dialog.confirm({
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
              Dialog.confirm({
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
        </Space>
      </DemoBlock>

      <DemoBlock title='内容区域'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() => {
              Dialog.alert({
                header: (
                  <ExclamationCircleFill
                    style={{
                      fontSize: 64,
                      color: 'var(--adm-color-warning)',
                    }}
                  />
                ),
                title: '注意',
                content: (
                  <>
                    <div>请用手机拍摄手持工牌照，注意保持照片清晰</div>
                    <div>
                      详情说明请查阅<a>操作指引</a>
                    </div>
                  </>
                ),
              })
            }}
          >
            自定义内容区域
          </Button>
          <Button
            block
            onClick={() => {
              Dialog.alert({
                image:
                  'https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ',
                title: '手持工牌照示例',
                content: '请用手机拍摄手持工牌照，注意保持照片清晰',
              })
            }}
          >
            有标题和图片
          </Button>
          <Button
            block
            onClick={() =>
              Dialog.confirm({
                title: '提示',
                content: lorem.generateParagraphs(7),
              })
            }
          >
            超长文本
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='获取点击结果'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={async () => {
              await Dialog.alert({
                content: '人在天边月上明',
              })
              Toast.show({ content: '已关闭', position: 'bottom' })
            }}
          >
            等待 alert 完成
          </Button>
          <DemoDescription content='alert 和 confirm 方法都会返回一个 Promise，你可以通过这个 Promise 实现等待弹窗关闭' />
          <Divider />
          <Button
            block
            onClick={async () => {
              const result = await Dialog.confirm({
                content: '人在天边月上明',
              })
              if (result) {
                Toast.show({ content: '点击了确认', position: 'bottom' })
              } else {
                Toast.show({ content: '点击了取消', position: 'bottom' })
              }
            }}
          >
            等待 confirm 完成
          </Button>
          <DemoDescription content='confirm 返回的是 Promise<boolean> 你可以通过这个 boolean 来判断用户是点击的确认还是取消' />
        </Space>
      </DemoBlock>

      <DemoBlock title='声明式'>
        <Space direction='vertical' block>
          <Declarative />
          <DemoDescription content='你可以手动控制 visible 状态' />
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义关闭操作'>
        <Space direction='vertical' block>
          <Imperative />
          <DemoDescription content='你可以根据需求，自定义关闭弹窗的时机' />
        </Space>
      </DemoBlock>

      <DemoBlock title='关闭所有对话框'>
        <Button block onClick={ContinuousShow}>
          连续展示对话框
        </Button>
      </DemoBlock>
    </>
  )
}

// 声明式
const Declarative = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        block
        onClick={() => {
          setVisible(true)
        }}
      >
        显示对话框
      </Button>
      <Dialog
        visible={visible}
        content='人在天边月上明'
        closeOnAction
        onClose={() => {
          setVisible(false)
        }}
        actions={[
          {
            key: 'confirm',
            text: '我知道了',
          },
        ]}
      />
    </>
  )
}

// 自定义关闭操作
function Imperative() {
  const handler = useRef<DialogShowRef>()

  return (
    <Button
      block
      onClick={() => {
        handler.current = Dialog.show({
          content: '人在天边月上明，风初紧，吹入画帘旌',
          actions: [
            {
              key: 'close',
              text: '关闭',
              onClick: () => {
                if (Math.random() > 0.5) {
                  handler.current?.close()
                } else {
                  Toast.show('再试一下')
                }
              },
            },
          ],
        })
      }}
    >
      显示对话框
    </Button>
  )
}

// 连续展示
function ContinuousShow() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      Dialog.alert({
        content: <Button onClick={() => Dialog.clear()}>close all</Button>,
        onConfirm: () => {
          console.log('Confirmed')
        },
      })
    }, i * 500)
  }
}
