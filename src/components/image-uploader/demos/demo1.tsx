import React, { FC, useState } from 'react'
import { ImageUploader, Space, Toast } from 'antd-mobile'
import { DemoBlock, DemoDescription, sleep } from 'demos'
import { FileItem } from 'antd-mobile/src/components/image-uploader'

const Basic: FC = () => {
  const [fileList, setFileList] = useState<FileItem[]>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  return (
    <ImageUploader
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
    />
  )
}

const UploadStatus: FC = () => {
  const [fileList, setFileList] = useState<FileItem[]>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  return (
    <ImageUploader
      value={fileList}
      onChange={setFileList}
      upload={mockUploadFail}
    />
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Basic />
      </DemoBlock>
      <DemoBlock title='上传状态'>
        <Space direction='vertical'>
          <UploadStatus />
          <DemoDescription content='尝试上传几张图片，可以看到上传中和失败的效果' />
        </Space>
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
