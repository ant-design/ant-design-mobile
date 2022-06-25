import React, { useState, ReactNode } from 'react'
import { Button, Picker, Skeleton, Space, Toast } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import { basicColumns } from './columns-data'
import { mockRequest } from './mockRequest'
import { useRequest } from 'ahooks'

type PickerColumnItem = {
  label: ReactNode
  value: string
  key?: string | number
}

type PickerColumn = (string | PickerColumnItem)[]

export default function () {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <DemoBlock title='自定义样式'>
        <Space direction='vertical' block>
          <Button
            onClick={() => {
              setVisible(true)
            }}
          >
            选择
          </Button>
          <DemoDescription>
            你可以通过 CSS 变量对 Picker 的字号等进行自定义，CascadePicker 和
            DatePicker 也同样支持自定义样式。
          </DemoDescription>
        </Space>
        <Picker
          style={{
            '--title-font-size': '13px',
            '--header-button-font-size': '13px',
            '--item-font-size': '13px',
            '--item-height': '30px',
          }}
          defaultValue={['Wed', 'pm']}
          columns={basicColumns}
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
        />
      </DemoBlock>
      <DemoBlock title='懒加载数据'>
        <LazyLoadColumnsDemo />
      </DemoBlock>
    </>
  )
}

function LazyLoadColumnsDemo() {
  const [visible, setVisible] = useState(false)
  const [columns, setColumns] = useState<PickerColumn[]>([])

  const { loading, runAsync } = useRequest(mockRequest, {
    manual: true,
  })

  const onShow = async () => {
    if (!columns.length && !loading) {
      try {
        const data = await runAsync(1500)
        setColumns(data)
      } catch (error) {
        Toast.show('请求失败')
      }
    }
  }

  return (
    <>
      <Space direction='vertical' block>
        <Button
          onClick={() => {
            setVisible(true)
          }}
        >
          懒加载数据
        </Button>
        <DemoDescription>
          异步请求结束前，你可以传入placeholder占位展示，
          请求结束后，可以把placeholder手动置为undefined，防止请求失败Picker一直显示placeholder
        </DemoDescription>
      </Space>
      <Picker
        placeholder={loading ? <PlaceHolder /> : undefined}
        onShow={onShow}
        columns={columns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

const PlaceHolder = () => {
  return (
    <div style={{ padding: '40px 60px' }}>
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  )
}
