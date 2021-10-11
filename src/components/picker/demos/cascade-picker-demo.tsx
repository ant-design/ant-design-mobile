import React, { useState } from 'react'
import { DemoBlock, sleep } from 'demos'
import { Button, CascadePicker } from 'antd-mobile'
import { CascadePickerOption } from '../../cascade-picker'

function CascadePickerDemo() {
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
      <CascadePicker
        title='级联选择'
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
  const [options, setOptions] = useState<CascadePickerOption[]>([
    {
      label: 'A',
      value: 'A',
      children: [],
    },
    {
      label: 'B',
      value: 'B',
      children: [],
    },
  ])

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <CascadePicker
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        onSelect={val => {
          const key = val[0]
          if (!key) return
          mockApi(key).then(data => {
            setOptions(options =>
              options.map(option => {
                if (option.value === key) {
                  return {
                    ...option,
                    children: data.map(x => ({ label: x, value: x })),
                  }
                }
                return option
              })
            )
          })
        }}
      />
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='级联选择'>
        <CascadePickerDemo />
      </DemoBlock>
      <DemoBlock title='异步获取选项'>
        <AsyncDemo />
      </DemoBlock>
    </>
  )
}
