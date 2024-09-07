import {
  Button,
  ConfigProvider,
  Modal,
  Popup,
  PortalProvider,
  Space,
  useModal,
  usePortal,
} from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import { DemoBlock } from 'demos'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='English'>
        <ConfigProvider locale={enUS}>
          {/* to make sure that `<PortalProvider />` is wrapped inner `<ConfigProvider />` so that its children can access context from `<ConfigProvider />` */}
          <PortalProvider>
            <ComponentWantsToUsePortal />
            <ComponentWantsToUseModal />
          </PortalProvider>
        </ConfigProvider>
      </DemoBlock>
    </>
  )
}

const ComponentWantsToUsePortal = () => {
  const { renderModalInPortal } = usePortal()
  return (
    <Space direction='vertical'>
      <Button
        block
        shape='rounded'
        color='primary'
        size='large'
        onClick={() => {
          renderModalInPortal(<Modal />)
        }}
      >
        render modal
      </Button>
      <Button
        block
        shape='rounded'
        color='primary'
        size='large'
        onClick={() => {
          renderModalInPortal(<Popup />)
        }}
      >
        render popup
      </Button>
    </Space>
  )
}

const ComponentWantsToUseModal = () => {
  const { show, confirm, alert, clear } = useModal()
  return (
    <Space direction='vertical'>
      <Button
        block
        shape='rounded'
        color='primary'
        size='large'
        onClick={() => {
          show({
            title: 'useModal show',
            content: '🚀 LFG!',
            closeOnAction: true,
            showCloseButton: true,
            onClose: () => console.log('❎ onClose'),
            actions: [
              {
                key: 'confirm',
                text: 'I get it',
              },
            ],
          })
        }}
      >
        useModal show
      </Button>
      <Button
        block
        shape='rounded'
        color='primary'
        size='large'
        onClick={() => {
          confirm({
            title: 'useModal confirm',
            content: '🚀 LFG!',
            showCloseButton: true,
            onConfirm: () => console.log('🛫 confirm'),
            onCancel: () => console.log('🫸 cancel'),
            onClose: () => console.log('❎ onClose'),
          })
        }}
      >
        useModal confirm
      </Button>
      <Button
        block
        shape='rounded'
        color='primary'
        size='large'
        onClick={() => {
          alert({
            title: 'useModal alert',
            content: '🚀 LFG!',
            showCloseButton: true,
            confirmText: `Clear Modals`,
            onConfirm: () => clear(),
            onClose: () => console.log('❎ onClose'),
          })
        }}
      >
        useModal alert
      </Button>
    </Space>
  )
}
