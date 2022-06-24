import React, { useState, ReactNode } from 'react'
import { Button, Picker, Skeleton, Space, Toast } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import { basicColumns } from './columns-data'
import { mockRequest } from './mockRequest'
import { useLockFn } from 'ahooks'

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
      <DemoBlock title='懒加载columns'>
        <LazyLoadColumnsDemo />
      </DemoBlock>
    </>
  )
}

function LazyLoadColumnsDemo() {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [columns, setColumns] = useState<PickerColumn[]>([])

  const lazyLoadColumns = useLockFn(async () => {
    if (!columns[0]?.length) {
      setLoading(true)
      try {
        const columnsData = await mockRequest(1000)
        setColumns(columnsData)
      } catch (error) {
        Toast.show('请求失败')
      } finally {
        setLoading(false)
      }
    }
  })

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        懒加载数据
      </Button>
      <DemoDescription>
        你可以传入placeholder在数据请求成功前占位展示，数据请求成功后则不会重复请求，
        上述例子中使用了ahooks的useLockFn，请求结束前不会重复发出请求
      </DemoDescription>
      <Picker
        placeholder={loading ? <PlaceHolder /> : undefined}
        onShow={lazyLoadColumns}
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
