import React, {useState} from 'react'
import {ImageUplader} from 'antd-mobile'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'
import {FileItem} from '..'

export default () => {
  const [disabled, setDisabled] = useState(false)
  const [fileList, setFileList] = useState<FileItem[]>([
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

  function onAfterRead(files: FileItem[]) {
    setFileList(files)
    // if(files.length >= 2) {
    //   setDisabled(true)
    // }
  }

  function onOversize(files: FileItem[]) {
    alert(222)
    console.log(files)
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <ImageUplader
          deletable={false}
          fileList={fileList}
          onAfterRead={onAfterRead}
        ></ImageUplader>
      </DemoBlock>
    </>
  )
}
