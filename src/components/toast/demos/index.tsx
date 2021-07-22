import React from 'react'
import {Button, Toast} from 'antd-mobile'
import {CloudUploadOutlined} from '@ant-design/icons'
import './index.less'

export default () => {
  return (
    <div className='container'>
      <div>
        <Button
          block
          onClick={() =>
            Toast.show({
              content: 'Hello World',
            })
          }
        >
          轻提示
        </Button>
        <Button
          block
          onClick={() =>
            Toast.show({
              content: Array(1000).join('6'),
              duration: 1000,
              getContainer: () =>
                document.querySelector('#root') as HTMLElement,
            })
          }
        >
          自定义提示时长
        </Button>
        <Button
          block
          onClick={() =>
            Toast.success({
              content: '保存成功',
            })
          }
        >
          成功提示
        </Button>
        <Button
          block
          onClick={() => {
            Toast.fail({
              content: '名称已存在',
            })
          }}
        >
          失败提示
        </Button>
        <Button
          block
          onClick={() => {
            let remain = 4
            const updateConfig = Toast.loading({
              content: `还剩 ${remain + 1} 秒`,
              duration: 5000,
              afterClose: () => clearInterval(timer),
            })
            const timer = setInterval(() => {
              updateConfig({content: `还剩 ${remain--} 秒`})
            }, 1000)
          }}
        >
          动态更新
        </Button>
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
            Toast.success({
              content: '请耐心等待, 不要退出',
              maskClickable: false,
            })
          }}
        >
          阻止背景点击
        </Button>
        <Button
          block
          onClick={() => {
            Toast.show({
              content: '上传中',
              icon: <CloudUploadOutlined />,
              maskClickable: false,
            })
          }}
        >
          自定义图标
        </Button>
        <Button
          block
          onClick={() => {
            Toast.clear()
          }}
        >
          主动关闭提示
        </Button>
      </div>
    </div>
  )
}
