import React, {useState} from 'react'
import {ImageUploader} from 'antd-mobile'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'
import {FileItem} from '..'
import Toast from '../../toast'

export default () => {
  const [fileList, setFileList] = useState<FileItem[]>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  const [fileList2, setFileList2] = useState<FileItem[]>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      status: 'loading',
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      status: 'error',
    },
  ])

  function onChange(files: FileItem[]) {
    setFileList(files)
  }

  function onDelete(files: FileItem[]) {
    setFileList(files)
  }

  function onChange2(files: FileItem[]) {
    setFileList2(files)
  }

  function onDelete2(files: FileItem[], index: number) {
    setFileList2(files)
    Toast.show({content: `亲，你删除了第 ${index} 张图片`})
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <ImageUploader
          fileList={fileList}
          onChange={onChange}
          onDelete={onDelete}
        />
      </DemoBlock>
      <DemoBlock title='上传状态'>
        <ImageUploader
          fileList={fileList2}
          onChange={onChange2}
          onDelete={onDelete2}
        />
      </DemoBlock>
    </>
  )
}
