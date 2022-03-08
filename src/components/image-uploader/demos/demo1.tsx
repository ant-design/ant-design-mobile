import React, { FC, useState } from 'react'
import { ImageUploader, Space, Toast, Dialog } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'

import { demoSrc, mockUpload, mockUploadFail } from './utils'

// 基础用法
const Basic: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
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

// 上传状态
const UploadStatus: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
    },
  ])

  return (
    <ImageUploader
      value={fileList}
      onChange={setFileList}
      upload={mockUploadFail as any}
    />
  )
}

// 限制上传大小
const LimitSize: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
    },
  ])

  function beforeUpload(file: File) {
    if (file.size > 1024 * 1024) {
      Toast.show('请选择小于 1M 的图片')
      return null
    }
    return file
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

// 限制图片数量
const LimitCount: FC = () => {
  const maxCount = 3
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
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

// 删除图片确认
const DeleteImage: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
    },
  ])

  return (
    <ImageUploader
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
      onDelete={() => {
        return Dialog.confirm({
          content: '是否确认删除',
        })
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

      <DemoBlock title='删除图片确认'>
        <Space direction='vertical'>
          <DeleteImage />
          <DemoDescription content='当用户删除图片时，进行确认，确认后可删除图片' />
        </Space>
      </DemoBlock>
    </>
  )
}
