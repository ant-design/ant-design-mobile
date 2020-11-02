import * as React from 'react'
import {
  unstable_Picker as Picker,
  unstable_Form as Form,
  unstable_Button as Button,
  unstable_Modal as Modal,
} from '@ant-design/mobile'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'

function loadScript(url: string, callback?: any) {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.onload = function() {
    callback?.()
  }
  script.src = url
  head.appendChild(script)
}

const defaultSeasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
]

const getData = async () => {
  // @ts-ignore
  if (window['antd-mobile-demo-data']) {
    // @ts-ignore
    return Promise.resolve(window['antd-mobile-demo-data'])
  }

  return new Promise(resolve => {
    loadScript(
      'https://gw.alipayobjects.com/os/lib/antd-mobile-demo-data/0.3.0/dist/index.js',
      () => {
        // @ts-ignore
        resolve(window['antd-mobile-demo-data'])
      },
    )
  })
}

export default () => {
  const events = {
    onChange: (v: any) => console.log('onChange', v),
    onPickerChange: (v: any) => console.log('onPickerChange', v),
    onOk: (v: any) => console.log('onOk', v),
    onDismiss: () => console.log('onDismiss'),
  }
  const [data, setData] = React.useState(
    {} as { district: any; province: any; provinceLite: any },
  )
  const [seasons, setSeasons] = React.useState([] as any)
  React.useEffect(() => {
    setSeasons(defaultSeasons)
    getData().then(d => {
      setData(d)
    })
  }, [])

  return (
    <>
      <Form
        initialValues={{ p1: [], p2: [] }}
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Group renderHeader="配合 form">
          <Form.Item label="选择省市" arrow name="p1">
            <Picker data={data.district} title="选择" {...events}>
              请选择
            </Picker>
          </Form.Item>
          <Form.Item label="选择省" arrow name="p2">
            <Picker data={data.provinceLite} title="选择" cols={1} {...events}>
              请选择
            </Picker>
          </Form.Item>

          <Form.Item label="非级联" arrow name="p3">
            <Picker data={seasons} title="选择" cascade={false} {...events}>
              请选择
            </Picker>
          </Form.Item>
        </Form.Group>

        <WhiteSpace />

        <WingBlank>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </WingBlank>
      </Form>
    </>
  )
}
