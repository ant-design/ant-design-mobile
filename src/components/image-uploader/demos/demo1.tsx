import React, { useState } from 'react'
import { ImageUplader } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import { FileItem } from '..'

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

  function onBeforeUpload(file: File) { }

  function onChange() { }

  function onAfterRead(files: FileItem[]) {
    console.log(files)
    setFileList(files)
    if(files.length >= 2) {
      setDisabled(true)
    }
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <ImageUplader
          deletable={false}
          fileList={fileList}
          onAfterRead={onAfterRead}
          disabled={disabled}
          maxCount={1}
        ></ImageUplader>
      </DemoBlock>
    </>
  )
}
