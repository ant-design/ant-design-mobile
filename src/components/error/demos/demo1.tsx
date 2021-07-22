import React from 'react'
import {Button, Error} from 'antd-mobile'
import {useToggle} from 'ahooks'

export default () => {
  const [fullPage, {toggle}] = useToggle(false)
  return (
    <Error status='default' fullPage={fullPage}>
      <Button color='primary' onClick={() => toggle()}>
        切换为{fullPage ? '局部' : '整页'}异常
      </Button>
    </Error>
  )
}
