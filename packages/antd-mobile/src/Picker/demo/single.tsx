import * as React from 'react'
import { unstable_Picker as Picker } from '@ant-design/mobile'
import { SingleFormDemo } from '../../_internal/demo'

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

export default () => {
  const events = {
    onChange: (v: any) => console.log('onChange', v),
    onPickerChange: (v: any) => console.log('onPickerChange', v),
    onOk: (v: any) => console.log('onOk', v),
    onDismiss: () => console.log('onDismiss'),
  }
  const [seasons, setSeasons] = React.useState([] as any)
  React.useEffect(() => {
    setSeasons(defaultSeasons)
  }, [])

  return (
    <>
      <SingleFormDemo>
        <Picker
          data={seasons}
          title="选择"
          cascade={false}
          {...events}
          defaultValue={['2014', '夏']}
        >
          单独使用，点击
        </Picker>
      </SingleFormDemo>
    </>
  )
}
