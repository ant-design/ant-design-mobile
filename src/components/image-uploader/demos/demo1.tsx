import React, { useState } from 'react'
import { ImageUploader, Toast } from 'antd-mobile'
import { DemoBlock, sleep } from 'demos'
import { FileItem } from 'antd-mobile/src/components/image-uploader'

export default () => {
  const [fileList, setFileList] = useState<FileItem[]>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  const [fileList2, setFileList2] = useState<FileItem[]>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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
    Toast.show({ content: `亲，你删除了第 ${index} 张图片` })
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <ImageUploader
          value={fileList}
          onChange={onChange}
          upload={mockUpload}
        />
      </DemoBlock>
      <DemoBlock title='上传状态'>
        <ImageUploader
          value={fileList2}
          onChange={onChange2}
          upload={mockUploadFail}
        />
      </DemoBlock>
    </>
  )
}

async function mockUpload(file: File) {
  await sleep(3000)
  return {
    url: URL.createObjectURL(file),
  }
}

async function mockUploadFail() {
  await sleep(3000)
  throw new Error('Fail to upload')
  return {
    url: '',
  }
}
