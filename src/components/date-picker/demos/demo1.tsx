import { Button, DatePicker, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React, { useCallback, useState } from 'react'
import { weekdayToZh } from './weekdayToZh'

// 导入列常量用于自定义列顺序
const { DAY_COLUMN, HOUR_COLUMN, MINUTE_COLUMN, MONTH_COLUMN, YEAR_COLUMN } =
  DatePicker

const now = new Date()

// 基础用法
function BasicDemo() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <DatePicker
        title='时间选择'
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        max={now}
        onConfirm={val => {
          Toast.show(val.toDateString())
        }}
      />
    </>
  )
}

// 渲染所选值
function RenderChildrenDemo() {
  const [visible, setVisible] = useState(false)
  return (
    <Space align='center'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <DatePicker
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        defaultValue={now}
        max={now}
      >
        {value => value?.toDateString()}
      </DatePicker>
    </Space>
  )
}

// 控制选择精度
function Precision() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <Space wrap>
      <>
        <Button
          onClick={() => {
            setVisible1(true)
          }}
        >
          年-月
        </Button>
        <DatePicker
          visible={visible1}
          onClose={() => {
            setVisible1(false)
          }}
          precision='month'
          onConfirm={val => {
            Toast.show(val.toString())
          }}
        />
      </>
      <>
        <Button
          onClick={() => {
            setVisible2(true)
          }}
        >
          年-月-日-时-分
        </Button>
        <DatePicker
          visible={visible2}
          onClose={() => {
            setVisible2(false)
          }}
          precision='minute'
          onConfirm={val => {
            Toast.show(val.toString())
          }}
        />
      </>
    </Space>
  )
}

// 自定义每列的渲染内容
function CustomRender() {
  const [visible, setVisible] = useState(false)

  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case 'year':
        return data + '年'
      case 'month':
        return data + '月'
      case 'day':
        return data + '日'
      case 'hour':
        return data + '时'
      case 'minute':
        return data + '分'
      case 'second':
        return data + '秒'
      default:
        return data
    }
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <DatePicker
        title='时间选择'
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        defaultValue={now}
        max={now}
        onConfirm={val => {
          Toast.show(val.toDateString())
        }}
        renderLabel={labelRenderer}
      />
    </>
  )
}

// 自定义列顺序
function CustomColumnsDemo() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)

  return (
    <Space wrap>
      <>
        <Button
          onClick={() => {
            setVisible1(true)
          }}
        >
          月-日-年
        </Button>
        <DatePicker
          visible={visible1}
          onClose={() => {
            setVisible1(false)
          }}
          precision='day'
          columns={[MONTH_COLUMN, DAY_COLUMN, YEAR_COLUMN]}
          onConfirm={val => {
            Toast.show(val.toString())
          }}
        />
      </>
      <>
        <Button
          onClick={() => {
            setVisible2(true)
          }}
        >
          时-分-日-月-年
        </Button>
        <DatePicker
          visible={visible2}
          onClose={() => {
            setVisible2(false)
          }}
          precision='minute'
          columns={[
            HOUR_COLUMN,
            MINUTE_COLUMN,
            DAY_COLUMN,
            MONTH_COLUMN,
            YEAR_COLUMN,
          ]}
          onConfirm={val => {
            Toast.show(val.toString())
          }}
        />
      </>
      <>
        <Button
          onClick={() => {
            setVisible3(true)
          }}
        >
          只选时-分(其他默认当前时间)
        </Button>
        <DatePicker
          visible={visible3}
          onClose={() => {
            setVisible3(false)
          }}
          precision='minute'
          columns={[HOUR_COLUMN, MINUTE_COLUMN]}
          onConfirm={val => {
            Toast.show(`选择的时间: ${val.toString()}, 年月日使用当前时间`)
          }}
        />
      </>
    </Space>
  )
}

// 周选择器
function DayOfWeekDemo() {
  const [visible, setVisible] = useState(false)

  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case 'year':
        return data + '年'
      case 'week':
        return data + '周'
      case 'week-day':
        return weekdayToZh(data)
      default:
        return data
    }
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <DatePicker
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        defaultValue={now}
        onConfirm={val => {
          Toast.show(val.toDateString())
        }}
        onSelect={val => console.log(val)}
        renderLabel={labelRenderer}
        precision='week-day'
      />
    </>
  )
}

// 季度选择器
function QuarterDemo() {
  const [visible, setVisible] = useState(false)

  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case 'year':
        return data + '年'
      case 'quarter':
        return data + '季度'
      default:
        return data
    }
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <DatePicker
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        defaultValue={now}
        onConfirm={val => {
          Toast.show(val.toDateString())
        }}
        onSelect={val => console.log(val)}
        renderLabel={labelRenderer}
        precision='quarter'
      />
    </>
  )
}

// 基础用法
function TillNowDemo() {
  const [value, setValue] = useState(() => new Date())
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <DatePicker
        title='时间选择'
        visible={visible}
        value={value}
        onClose={() => {
          setVisible(false)
        }}
        max={now}
        onConfirm={val => {
          setValue(val)
          Toast.show(`Till Now: ${!!val.tillNow}`)
        }}
        tillNow
      />
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <BasicDemo />
      </DemoBlock>

      <DemoBlock title='渲染所选值'>
        <RenderChildrenDemo />
      </DemoBlock>

      <DemoBlock title='控制选择精度'>
        <Precision />
      </DemoBlock>

      <DemoBlock title='自定义每列的渲染内容'>
        <CustomRender />
      </DemoBlock>

      <DemoBlock title='自定义列顺序'>
        <CustomColumnsDemo />
      </DemoBlock>

      <DemoBlock title='周选择器'>
        <DayOfWeekDemo />
      </DemoBlock>

      <DemoBlock title='季度选择器'>
        <QuarterDemo />
      </DemoBlock>

      <DemoBlock title='至今'>
        <TillNowDemo />
      </DemoBlock>
    </>
  )
}
