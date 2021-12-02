import React, { useState } from 'react'
import { Button, CascadePicker } from 'antd-mobile'
import { sleep } from 'demos'
import { CascadePickerOption } from 'antd-mobile/es/components/cascade-picker'

export function AsyncDemo() {
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
