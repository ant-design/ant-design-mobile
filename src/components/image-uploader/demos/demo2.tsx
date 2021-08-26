import React, { useState } from 'react'
import { ImageUploader } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import { FileItem } from '..'

export default () => {
  const [fileList, setFileList] = useState<FileItem[]>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  function onChange(files: FileItem[]) {
    setFileList(files)
  }

  function onAfterRead(files: FileItem[]) {
    /// 此时可以自行将文件上传至服务器
    console.log(files)
  }

  function onDelete(files: FileItem[], index: number) {
    setFileList(files)
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <ImageUploader
          fileList={fileList}
          onAfterRead={onAfterRead}
          onChange={onChange}
          onDelete={onDelete}
        />
      </DemoBlock>
    </>
  )
}
