import React, {useState} from 'react'
import {ImageUplader} from 'antd-mobile'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'

export default () => {
  const [fileList, setFileList] = useState([
    // {
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //   // type: '',
    //   // status: '',
    // },
    // {
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //   // type: '',
    //   // status: '',
    // }
  ])

  function onBeforeUpload(file: File) {}

  function onChange() {}

  function onAfterRead(files: File[]) {
    console.log(files)
    setFileList(files)
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <ImageUplader
          fileList={fileList}
          onAfterRead={onAfterRead}
        ></ImageUplader>
      </DemoBlock>
    </>
  )
}
