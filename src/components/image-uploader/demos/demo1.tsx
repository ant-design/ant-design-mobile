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

const LimitSize: FC = () => {
  const [fileList, setFileList] = useState<FileItem[]>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  function beforeUpload(files: File[]) {
    return files.filter(file => {
      if (file.size > 1024 * 1024) {
        Toast.show('请选择小于 1M 的图片')
        return false
      }
      return true
    })
  }

  return (
    <ImageUploader
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
      beforeUpload={beforeUpload}
    />
  )
}

const LimitCount: FC = () => {
  const maxCount = 3
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
      multiple
      maxCount={3}
      showUpload={fileList.length < maxCount}
      onCountExceed={exceed => {
        Toast.show(`最多选择 ${maxCount} 张图片，你多选了 ${exceed} 张`)
      }}
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
      <DemoBlock title='限制上传大小'>
        <Space direction='vertical'>
          <LimitSize />
          <DemoDescription content='当用户选择的文件超过 1M 时，跳过上传并提示用户' />
        </Space>
      </DemoBlock>
      <DemoBlock title='限制图片数量'>
        <Space direction='vertical'>
          <LimitCount />
          <DemoDescription content='限制用户最多上传 3 张图片，当达到最大数量时隐藏掉上传按钮' />
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
