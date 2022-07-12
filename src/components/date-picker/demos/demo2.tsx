import React from 'react'
import { Picker } from 'antd-mobile'

new Date()

const columns = [
  [
    { label: '周一', value: 'Mon' },
    { label: '周二', value: 'Tues' },
    { label: '周三', value: 'Wed' },
    { label: '周四', value: 'Thur' },
    { label: '周五', value: 'Fri' },
  ],
  [
    { label: '上午', value: 'am' },
    { label: '下午', value: 'pm' },
  ],
]

// const columns = [
//   [],
//   [
//     { label: '上午', value: 'am' },
//     { label: '下午', value: 'pm' },
//   ],
// ]

export default () => {
  // const [visible, setVisible] = useState(false)
  return (
    <>
      {/*<Button*/}
      {/*  onClick={() => {*/}
      {/*    setVisible(true)*/}
      {/*  }}*/}
      {/*>*/}
      {/*  年-月-日-时-分*/}
      {/*</Button>*/}

      {/*<DatePicker*/}
      {/*  defaultValue={now}*/}
      {/*  visible={true}*/}
      {/*  // onClose={() => {*/}
      {/*  //   setVisible(false)*/}
      {/*  // }}*/}
      {/*  precision='minute'*/}
      {/*  // onConfirm={val => {*/}
      {/*  //   Toast.show(val.toString())*/}
      {/*  // }}*/}
      {/*/>*/}

      <Picker
        columns={columns}
        visible={true}
        // onConfirm={val => {
        //   Toast.show(val.toString())
        // }}
      />
    </>
  )
}
