import React from 'react'
import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  screen,
  act,
} from 'testing'
import Modal, { ModalAlertProps } from '..'

const classPrefix = `adm-modal`

function $$(className: string) {
  return document.querySelectorAll(className)
}

describe('Modal', () => {
  afterEach(async () => {
    act(() => {
      Modal.clear()
    })
    document.body.innerHTML = ''
  })

  const ModalAlert = (props: ModalAlertProps) => (
    <button
      onClick={() => {
        Modal.alert({
          content: 'content',
          ...props,
        })
      }}
    >
      btn
    </button>
  )

  test('a11y', async () => {
    await testA11y(<Modal visible={true} content='a11y' />)
  })

  test('afterShow should be called', async () => {
    const afterShow = jest.fn()
    render(<ModalAlert afterShow={afterShow} />)
    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    await waitFor(() => expect(afterShow).toBeCalled())
  })

  test('onConfirm should be called', async () => {
    const onConfirm = jest.fn()
    render(<ModalAlert onConfirm={onConfirm} />)
    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    const modal = $$(`.${classPrefix}`)[0]
    fireEvent.click(screen.getByRole('button', { name: '我知道了' }))
    expect(onConfirm).toBeCalled()
    await waitForElementToBeRemoved(modal)
  })

  test('close on mask click', async () => {
    const onClose = jest.fn()
    const afterClose = jest.fn()
    render(
      <ModalAlert closeOnMaskClick onClose={onClose} afterClose={afterClose} />
    )

    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    const mask = await screen.findByRole('button', { name: '背景蒙层' })
    fireEvent.click(mask)
    await waitForElementToBeRemoved(mask)
    expect(onClose).toBeCalled()
    expect(afterClose).toBeCalled()
  })

  test('show close button', async () => {
    render(<ModalAlert showCloseButton />)
    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    expect($$(`.adm-center-popup-close`)).toHaveLength(1)
  })

  test('custom content', async () => {
    render(
      <ModalAlert
        header={<div>header</div>}
        title='title'
        content={<div>content</div>}
        image='https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ'
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    expect($$(`.${classPrefix}-header`)).toHaveLength(1)
    expect($$(`.${classPrefix}-title`)).toHaveLength(1)
    expect($$(`.${classPrefix}-image-container`)).toHaveLength(1)
    expect($$(`.${classPrefix}-content`)[0].firstChild).not.toHaveClass(
      'adm-auto-center'
    )
  })

  test('wait for alert to complete', async () => {
    const fn = jest.fn()
    render(
      <button
        onClick={async () => {
          await Modal.alert({
            content: 'content',
          })
          fn()
        }}
      >
        btn
      </button>
    )

    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    const modal = $$(`.${classPrefix}`)[0]
    fireEvent.click(screen.getByRole('button', { name: '我知道了' }))
    await waitForElementToBeRemoved(modal)
    expect(fn).toBeCalled()
  })

  test('wait for confirm to complete', async () => {
    const fn = jest.fn()
    const Confirm = () => (
      <button
        onClick={async () => {
          const res = await Modal.confirm({
            content: 'content',
          })
          fn(res)
        }}
      >
        btn
      </button>
    )

    render(<Confirm />)
    const btn = screen.getByRole('button', { name: 'btn' })
    fireEvent.click(btn)
    fireEvent.click(screen.getByRole('button', { name: '确定' }))
    await waitForElementToBeRemoved($$(`.${classPrefix}`)[0])

    fireEvent.click(btn)
    fireEvent.click(screen.getByRole('button', { name: '取消' }))
    await waitForElementToBeRemoved($$(`.${classPrefix}`)[0])

    expect(fn.mock.calls[0][0]).toBe(true)
    expect(fn.mock.calls[1][0]).toBe(false)
  })

  test('custom actions', async () => {
    const actions = [
      {
        key: 'read',
        text: 'read',
        primary: true,
      },
      {
        key: 'download',
        text: 'download',
        danger: true,
      },
      {
        key: 'share',
        text: 'share',
        disabled: true,
      },
    ]

    render(
      <button
        onClick={() => {
          Modal.show({
            content: 'content',
            closeOnAction: true,
            actions,
          })
        }}
      >
        btn
      </button>
    )

    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    const download = screen.getByRole('button', { name: 'download' })
    const share = screen.getByRole('button', { name: 'share' })
    const modal = $$(`.${classPrefix}`)[0]
    expect($$('.adm-button')).toHaveLength(actions.length)
    expect(download).toHaveClass('adm-button-danger')
    expect(share).toHaveClass('adm-button-disabled')
    expect(share).toBeDisabled()
    fireEvent.click(download)
    await waitForElementToBeRemoved(modal)
  })

  test('without actions', async () => {
    render(
      <button
        onClick={() => {
          Modal.show({
            content: 'content',
            closeOnAction: true,
          })
        }}
      >
        btn
      </button>
    )

    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    expect($$(`.${classPrefix}-footer-empty`)).toHaveLength(1)
  })

  test('action onClick', async () => {
    const promise = Promise.resolve()
    const onClick = jest.fn(() => promise)
    const actions = [
      {
        key: 'ok',
        text: 'ok',
        onClick,
      },
    ]

    render(
      <button
        onClick={() => {
          Modal.show({
            content: 'content',
            actions,
          })
        }}
      >
        btn
      </button>
    )

    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    fireEvent.click(screen.getByRole('button', { name: 'ok' }))
    expect(onClick).toBeCalled()
    // await the promise instead of returning directly, because act expects a "void" result
    await act(async () => {
      await promise
    })
  })
})
