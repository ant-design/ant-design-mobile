import React, { FC, useState } from 'react'
import { DemoBlock } from 'demos'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'
import { ImageUploader } from 'antd-mobile'
import { PictureOutline } from 'antd-mobile-icons'

import { demoSrc, mockUpload } from './utils'

// 自定义大小
const CustomeSize: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
    },
  ])

  return (
    <ImageUploader
      style={{ '--cell-size': '90px' }}
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
    />
  )
}

// 自定义列数
// columns 属性存在时，不支持自定义 --cell-size 属性，详见 FAQ。
const CustomeColumns: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
    },
    {
      url: demoSrc,
    },
  ])

  return (
    <ImageUploader
      columns={5}
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
    />
  )
}

// 自定义上传按钮
const CustomUploadButton: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
    },
  ])

  return (
    <ImageUploader value={fileList} onChange={setFileList} upload={mockUpload}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#999999',
        }}
      >
        <PictureOutline style={{ fontSize: 32 }} />
      </div>
    </ImageUploader>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='自定义大小'>
        <CustomeSize />
      </DemoBlock>

      <DemoBlock title='自定义列数'>
        <CustomeColumns />
      </DemoBlock>

      <DemoBlock title='自定义上传按钮'>
        <CustomUploadButton />
      </DemoBlock>
    </>
  )
}
