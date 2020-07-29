import * as React from 'react'
import {
  unstable_Toast as Toast,
  unstable_Button as Button,
} from '@ant-design/mobile'

export default () => {
  function successToast() {
    Toast.success({
      content: '开通成功',
    })
  }

  function show() {
    Toast.show({
      content: '开通成功',
    })
  }

  function noMask() {
    Toast.show({
      content: '开通成功',
      mask: false,
    })
  }

  function loading() {
    Toast.loading({
      content: '',
    })
  }

  function warn() {
    Toast.warn({
      content: '警告',
    })
  }

  function fail() {
    Toast.fail({
      content: '出错了',
    })
  }

  return (
    <div>
      <Button onPress={successToast}>success</Button>
      <br />
      <Button onPress={show}>show</Button>
      <br />
      <Button onPress={noMask}>no mask</Button>
      <br />
      <Button onPress={loading}>loading</Button>
      <br />
      <Button onPress={warn}>warn</Button>
      <br />
      <Button onPress={fail}>fail</Button>
      <br />
      <Button
        onPress={() => {
          Toast.show({
            content: '很长的文字很长的文字很长的文字很长的文字',
          })
        }}
      >
        纯文字
      </Button>
    </div>
  )
}
