import * as React from 'react'
import {
  unstable_Modal as Modal,
  unstable_Button as Button,
  unstable_Toast as Toast,
} from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'

export default () => {
  const [state, view] = useSelect({
    count: {
      desc: '数量',
      v: '1',
      type: 'radio',
      options: ['1', '2', '3'],
    },
    type: {
      desc: '主按钮样式',
      v: 'normal',
      type: 'radio',
      options: ['normal', 'primary', 'bold', 'danger'],
    },
    hasCustom: {
      desc: '自定义区域',
      v: false,
    },
    hasBg: {
      desc: '背景',
      v: false,
      hide: d => d.thumb !== 'none',
    },
    thumb: {
      desc: '缩略图',
      v: 'lg',
      type: 'radio',
      options: ['lg', 'md', 'none'],
      hide: d => d.hasBg === true,
    },
    longText: {
      desc: '长文案，配合两个按钮检查换行',
      v: false,
    },
    closeType: {
      desc: '关闭图标',
      v: 'dark',
      type: 'radio',
      options: ['dark', 'light', 'none'],
    },
  })

  const { count, type, hasCustom, hasBg, thumb, longText, closeType } = state

  const handle = () => {
    Modal.standard({
      title: '标题',
      content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
      thumb:
        thumb !== 'none'
          ? 'https://img03.sogoucdn.com/app/a/100520093/e18d20c94006dfe0-9eef65073f0f6be0-5c34cd7c7bd3512a8d93e4a844f991dd.jpg'
          : undefined,
      thumbSize: thumb as any,
      mainButton: {
        text: longText ? '我是长长的文案' : '我知道了',
        type,
        onPress() {
          Modal.alert({
            content: '主按钮',
          })
        },
      },
      addonButton:
        +count > 1
          ? {
              text: '辅助按钮',
              onPress() {
                Toast.success({
                  content: '辅助按钮',
                  duration: 1,
                })
              },
            }
          : undefined,
      cancelButton:
        +count > 2
          ? {
              text: '取消',
              onPress() {
                Toast.success({
                  content: '取消按钮',
                  duration: 1,
                })
              },
            }
          : undefined,
      custom: hasCustom ? (
        <div style={{ background: 'red' }}>自定义控件区</div>
      ) : (
        undefined
      ),
      background: hasBg
        ? 'https://i01piccdn.sogoucdn.com/4703665c82c7b294'
        : undefined,
      closeType,
      onClose() {
        Modal.alert({
          content: 'close',
        })
      },
    })
  }
  return (
    <div>
      {view}
      <br />
      <Button type="primary" onPress={handle}>
        点击打开对话框
      </Button>
    </div>
  )
}
