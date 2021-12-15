import React, { useState } from 'react'
import { Button, DatePicker, DatePickerView, Picker, Toast } from 'antd-mobile'

const now = new Date()

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
      <DatePicker
        defaultValue={now}
        visible={true}
        // onClose={() => {
        //   setVisible(false)
        // }}
        precision='minute'
        // onConfirm={val => {
        //   Toast.show(val.toString())
        // }}
      />
      {/*<Picker*/}
      {/*  columns={[]}*/}
      {/*  visible={visible}*/}
      {/*  onClose={() => {*/}
      {/*    setVisible(false)*/}
      {/*  }}*/}
      {/*  onConfirm={val => {*/}
      {/*    Toast.show(val.toString())*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  )
}
