import { Button, ImageViewer } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React, { useState } from 'react'
import styles from './demo1.less'
import { demoImage, demoImages } from './images'

const demoViewImages = [
  'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ',
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
]

// 单张图片预览
const Single = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示图片
      </Button>
      <ImageViewer
        classNames={{
          mask: 'customize-mask',
          body: 'customize-body',
        }}
        image={demoImage}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

// 多张图片预览
const Multi = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={demoImages}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

const ViewWithFooter = () => {
  const [visible, setVisible] = useState(false)

  const renderFooter = (image: string, index: number) => {
    return (
      <div className={styles.footer}>
        <div
          className={styles.footerButton}
          onClick={() => {
            console.log('Loading...')
          }}
        >
          查看原图{index + 1}
        </div>
      </div>
    )
  }

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={demoImages}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false)
        }}
        renderFooter={renderFooter}
      />
    </>
  )
}

// 自定义预览内容
const ViewImageRender = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={demoViewImages}
        visible={visible}
        imageRender={(image, info) => {
          if (info.index === 0)
            return (
              <div className={styles['image-render']}>
                <video muted width='100%' controls src={image} />
              </div>
            )
        }}
        defaultIndex={0}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='单张图片预览'>
        <Single />
      </DemoBlock>

      <DemoBlock title='多张图片预览'>
        <Multi />
      </DemoBlock>

      <DemoBlock title='指令式调用'>
        <Button
          onClick={() => {
            ImageViewer.Multi.show({ images: demoImages })
          }}
        >
          显示图片
        </Button>
      </DemoBlock>

      <DemoBlock title='手动控制关闭'>
        <Button
          onClick={() => {
            const handler = ImageViewer.show({
              image: demoImage,
            })
            setTimeout(() => {
              handler.close()
            }, 3000)
          }}
        >
          显示图片并在3秒后关闭
        </Button>
      </DemoBlock>

      <DemoBlock title='自定义底部额外内容'>
        <ViewWithFooter />
      </DemoBlock>

      <DemoBlock title='自定义预览内容'>
        <ViewImageRender />
      </DemoBlock>
    </>
  )
}
