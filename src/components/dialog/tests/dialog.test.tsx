import React from 'react'
import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from 'testing'
import Dialog, { DialogAlertProps } from '..'
import { act } from '@testing-library/react'

const classPrefix = `adm-dialog`

function $$(className: string) {
  return document.querySelectorAll(className)
}

describe('Dialog', () => {
  afterEach(async () => {
    await act(() => {
      Dialog.clear()
    })
    document.body.innerHTML = ''
  })

  const DialogAlert = (props: DialogAlertProps) => (
    <button
      onClick={() => {
        Dialog.alert({
          content: 'content',
          ...props,
        })
      }}
    >
      btn
    </button>
  )

  test('a11y', async () => {
    await testA11y(<Dialog visible={true} content='a11y' aria-label='test' />)
  })

  test('afterShow should be called', async () => {
    const afterShow = jest.fn()
    render(<DialogAlert afterShow={afterShow} />)
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(afterShow).toBeCalled())
  })

  test('onConfirm should be called', async () => {
    const onConfirm = jest.fn()
    render(<DialogAlert onConfirm={onConfirm} />)
    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    fireEvent.click(screen.getByRole('button', { name: '我知道了' }))
    expect(onConfirm).toBeCalled()
    await waitForElementToBeRemoved(screen.getByRole('dialog'))
  })

  test('close on mask click', async () => {
    const onClose = jest.fn()
    const afterClose = jest.fn()
    render(
      <DialogAlert closeOnMaskClick onClose={onClose} afterClose={afterClose} />
    )

    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    const mask = await screen.findByRole('button', { name: '背景蒙层' })
    fireEvent.click(mask)
    await waitForElementToBeRemoved(mask)
    expect(onClose).toBeCalled()
    expect(afterClose).toBeCalled()
  })

  test('custom content', async () => {
    render(
      <DialogAlert
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
          await Dialog.alert({
            content: 'content',
          })
          fn()
        }}
      >
        btn
      </button>
    )

    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    fireEvent.click(screen.getByRole('button', { name: '我知道了' }))
    await act(async () => {
      await Promise.resolve()
    })
    expect(fn).toBeCalled()
  })

  test('wait for confirm to complete', async () => {
    const fn = jest.fn()
    const Confirm = () => (
      <button
        onClick={async () => {
          const res = await Dialog.confirm({
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
    const dialog = screen.getByRole('dialog')
    fireEvent.click(screen.getByRole('button', { name: '确定' }))
    await act(async () => {
      await Promise.resolve()
    })
    expect(fn.mock.calls[0][0]).toBe(true)
    await waitForElementToBeRemoved(dialog)

    fireEvent.click(btn)
    fireEvent.click(screen.getByRole('button', { name: '取消' }))
    await act(async () => {
      await Promise.resolve()
    })
    expect(fn.mock.calls[1][0]).toBe(false)
  })

  test('custom actions', async () => {
    const actions = [
      {
        key: 'read',
        text: 'read',
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
          Dialog.show({
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
    expect($$(`.${classPrefix}-button`)).toHaveLength(actions.length)
    expect(download).toHaveClass('adm-button-danger')
    expect(share).toHaveClass('adm-button-disabled')
    expect(share).toBeDisabled()
    fireEvent.click(download)
    await waitForElementToBeRemoved(screen.getByRole('dialog'))
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
          Dialog.show({
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
    await act(async () => {
      await promise
    })
  })
})
