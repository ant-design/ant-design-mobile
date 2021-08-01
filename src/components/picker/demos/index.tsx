import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import { Picker, Button, Space } from 'antd-mobile'
import { useState, useEffect } from 'react'
import { sleep } from 'antd-mobile/src/utils/sleep'

const basicColumns = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
  ['1', '222222222222222222222222222222222', '3'],
]

function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<(string | null)[]>(['M'])
  console.log('value', value)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={setValue}
        onSelect={val => {
          console.log('onSelect', val)
        }}
      />
    </>
  )
}

function CascaderDemo() {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      label: '浙江',
      value: '浙江',
      children: [
        {
          label: '杭州',
          value: '杭州',
        },
        {
          label: '宁波',
          value: '宁波',
        },
      ],
    },
    {
      label: '江苏',
      value: '江苏',
      children: [
        {
          label: '南京',
          value: '南京',
        },
        {
          label: '苏州',
          value: '苏州',
        },
      ],
    },
  ]
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker.Cascader
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        onConfirm={val => {
          console.log('onConfirm', val)
        }}
        onSelect={val => {
          console.log('onSelect', val)
        }}
      />
    </>
  )
}

function AsyncDemo() {
  const [visible, setVisible] = useState(false)
  async function mockApi(key: string) {
    await sleep(1000)
    return [key + '1', key + '2', key + '3']
  }
  const firstColumn = ['A', 'B']
  const [secondColumnMap, setSecondColumnMap] = useState<
    Record<string, string[]>
  >({})
  const [key, setKey] = useState<string | null>(null)
  useEffect(() => {
    if (!key) return
    if (secondColumnMap[key]) return
    mockApi(key).then(data => {
      setSecondColumnMap(map => ({
        ...map,
        [key]: data,
      }))
    })
  }, [key])

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker
        columns={[firstColumn, key ? secondColumnMap[key] ?? [] : []]}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        onConfirm={val => {
          console.log('onConfirm', val)
        }}
        onSelect={val => {
          setKey(val[0])
          console.log('onSelect', val)
        }}
      />
    </>
  )
}

function RenderChildrenDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<(string | null)[]>([])
  return (
    <Space align='center'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={setValue}
        onSelect={val => {
          console.log('onSelect', val)
        }}
      >
        {items => {
          if (items.every(item => item === null)) {
            return '未选择'
          } else {
            return items.map(item => item?.label ?? '未选择').join(' - ')
          }
        }}
      </Picker>
    </Space>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <BasicDemo />
      </DemoBlock>
      <DemoBlock title='级联选择'>
        <CascaderDemo />
      </DemoBlock>
      <DemoBlock title='异步获取选项'>
        <AsyncDemo />
      </DemoBlock>
      <DemoBlock title='渲染所选值'>
        <RenderChildrenDemo />
      </DemoBlock>
    </>
  )
}
