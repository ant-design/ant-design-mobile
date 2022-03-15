import React, { FC, useEffect, useRef, useState } from 'react'
import { Button, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { UploadOutline } from 'antd-mobile-icons'
import type { ToastHandler } from 'antd-mobile/es/components/toast'

export default () => {
  const handler = useRef<ToastHandler>()

  return (
    <>
      <DemoBlock title='基础用法'>
        <Button
          onClick={() =>
            Toast.show({
              content: 'Hello World',
              afterClose: () => {
                console.log('after')
              },
            })
          }
        >
          轻提示
        </Button>
      </DemoBlock>

      <DemoBlock title='图标'>
        <Space wrap>
          <Button
            onClick={() =>
              Toast.show({
                icon: 'success',
                content: '保存成功',
              })
            }
          >
            成功
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                icon: 'fail',
                content: '名称已存在',
              })
            }}
          >
            失败
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '加载中…',
              })
            }}
          >
            加载中
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                content: '上传中',
                icon: <UploadOutline />,
              })
            }}
          >
            自定义图标
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='更多功能'>
        <Space wrap>
          <Button
            block
            onClick={() => {
              Toast.show({
                content: 'Hello World',
                position: 'top',
              })
            }}
          >
            顶部提示
          </Button>
          <Button
            block
            onClick={() => {
              Toast.show({
                content: 'Hello World',
                position: 'bottom',
              })
            }}
          >
            底部提示
          </Button>
          <Button
            block
            onClick={() => {
              Toast.show({
                content: '请耐心等待, 不要退出',
                maskClickable: false,
              })
            }}
          >
            阻止背景点击
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                icon: 'loading',
                content: <CountDownText />,
                duration: 5000,
              })
            }}
          >
            动态内容
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='手动清除'>
        <Space wrap>
          <Button
            block
            onClick={() => {
              handler.current = Toast.show({
                content: '这条提示不会自动消失',
                duration: 0,
                position: 'top',
              })
            }}
          >
            显示
          </Button>
          <Button
            block
            onClick={() => {
              Toast.clear()
            }}
          >
            清除
          </Button>
          <Button
            block
            onClick={() => {
              handler.current?.close()
            }}
          >
            关闭
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}

const CountDownText: FC = () => {
  const [count, setCount] = useState(5)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount(x => {
        if (x > 1) {
          return x - 1
        } else {
          return x
        }
      })
    }, 1000)
    return () => {
      window.clearInterval(interval)
    }
  }, [])
  return <span>还剩 {count} 秒</span>
}
