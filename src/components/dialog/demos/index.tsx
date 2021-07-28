import React from 'react'
import { Button, Dialog, Toast } from 'antd-mobile'
import './index.less'

export default () => {
  return (
    <div className='container'>
      <div>
        <Button
          block
          onClick={() =>
            Dialog.show({
              content: '人在天边月上明，风初紧，吹入画帘旌',
              cancelText: '我知道了',
            })
          }
        >
          无标题弹窗
        </Button>
        <Button
          block
          onClick={() =>
            Dialog.show({
              content: '操作成功',
              cancelText: '我知道了',
            })
          }
        >
          单行文本自动居中
        </Button>
        <Button
          block
          onClick={() =>
            Dialog.show({
              cancelText: '取消',
              okText: '主操作',
              title: '提示',
              content: Array(1000).join('6'),
              onOk: e => console.log('click ok', e),
              onCancel: e => console.log('click cancel', e),
            })
          }
        >
          超长文本
        </Button>
        <Button
          block
          onClick={() =>
            Dialog.show({
              headerImage:
                'https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ',
              title: '手持工牌照示例',
              content: '请用手机拍摄手持工牌照，注意保持照片清晰',
            })
          }
        >
          有图片
        </Button>
        <Button
          block
          onClick={() =>
            Dialog.show({
              title: '延迟关闭 - 成功',
              onCancel: () => {
                return new Promise(res => {
                  setTimeout(() => {
                    res(true)
                    Toast.success({ content: '关闭成功' })
                  }, 3000)
                })
              },
            })
          }
        >
          延迟关闭 - 成功
        </Button>
        <Button
          block
          onClick={() =>
            Dialog.show({
              title: '延迟关闭 - 失败',
              okText: '提交',
              cancelText: '关闭',
              onOk: () => {
                return new Promise(res => {
                  setTimeout(() => {
                    res(false)
                    Toast.fail({ content: '提交失败' })
                  }, 3000)
                })
              },
            })
          }
        >
          延迟关闭 - 失败
        </Button>
        <Button
          block
          onClick={() =>
            Dialog.show({
              title: '点击遮罩关闭',
              maskClosable: true,
            })
          }
        >
          点击遮罩关闭
        </Button>
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
      </div>
    </div>
  )
}
