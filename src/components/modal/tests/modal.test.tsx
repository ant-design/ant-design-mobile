import React from 'react'
import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  actSleep,
  actClick,
} from 'testing'
import Modal, { ModalAlertProps } from '..'
import { act } from '@testing-library/react'

const classPrefix = `adm-modal`

function $$(className: string) {
  return document.querySelectorAll(className)
}

const waitForMaskShow = async () => {
  await waitFor(() => {
    expect($$('.adm-mask')[0]).toHaveStyle({
      'opacity': 1,
    })
  })
  return $$('.adm-mask')[0]
}

describe('Modal', () => {
  afterEach(async () => {
    await act(() => {
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
    const { getByText } = await render(<ModalAlert afterShow={afterShow} />)
    await actClick(getByText('btn'), 20)
    expect(afterShow).toBeCalled()
  })

  test('onConfirm should be called', async () => {
    const onConfirm = jest.fn()
    const { getByText } = await render(<ModalAlert onConfirm={onConfirm} />)
    await actClick(getByText('btn'), 20)
    await actClick(getByText('我知道了'), 20)
    expect(onConfirm).toBeCalled()
  })

  test('close on mask click', async () => {
    const onClose = jest.fn()
    const afterClose = jest.fn()
    const { getByText } = await render(
      <ModalAlert closeOnMaskClick onClose={onClose} afterClose={afterClose} />
    )

    fireEvent.click(getByText('btn'))
    const mask = await waitForMaskShow()
    fireEvent.click(mask)
    await waitForElementToBeRemoved(mask)
    expect(onClose).toBeCalled()
    expect(afterClose).toBeCalled()
  })

  test('show close button', async () => {
    const { getByText } = await render(<ModalAlert showCloseButton />)
    await actClick(getByText('btn'), 20)
    expect($$(`.${classPrefix}-close`)).toHaveLength(1)
  })

  test('custom content', async () => {
    const { getByText } = await render(
      <ModalAlert
        header={<div>header</div>}
        title='title'
        content={<div>content</div>}
        image='https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ'
      />
    )

    await actClick(getByText('btn'))
    expect($$(`.${classPrefix}-header`)).toHaveLength(1)
    expect($$(`.${classPrefix}-title`)).toHaveLength(1)
    expect($$(`.${classPrefix}-image-container`)).toHaveLength(1)
    expect($$(`.${classPrefix}-content`)[0].firstChild).not.toHaveClass(
      'adm-auto-center'
    )
  })

  test('wait for alert to complete', async () => {
    const fn = jest.fn()
    const { getByText } = await render(
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

    await actClick(getByText('btn'), 20)
    await actClick(getByText('我知道了'), 20)
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

    const { getByText, getAllByText } = await render(<Confirm />)
    fireEvent.click(getByText('btn'))
    await actSleep(100)
    act(() => {
      fireEvent.click(getAllByText('确定')[0])
    })
    await actSleep(100)
    fireEvent.click(getByText('btn'))
    await actSleep(100)
    act(() => {
      fireEvent.click(getAllByText('取消')[0])
    })
    await actSleep(100)
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

    const { getByText } = await render(
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

    await actClick(getByText('btn'), 20)
    expect($$(`.${classPrefix}-button`)).toHaveLength(actions.length)
    expect($$(`.${classPrefix}-button`)[1]).toHaveClass('adm-button-danger')
    expect($$(`.${classPrefix}-button`)[2]).toHaveClass('adm-button-disabled')
    await actClick(getByText('read'), 20)
    expect($$('.adm-modal').length).toBe(0)
  })

  test('without actions', async () => {
    const { getByText } = await render(
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

    fireEvent.click(getByText('btn'))
    expect($$(`.${classPrefix}-footer-empty`)).toHaveLength(1)
  })

  test('action onClick', async () => {
    const onClick = jest.fn()
    const actions = [
      {
        key: 'ok',
        text: 'ok',
        onClick,
      },
    ]

    const { getByText } = await render(
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

    fireEvent.click(getByText('btn'))
    await act(async () => {
      await fireEvent.click(getByText('ok'))
    })

    expect(onClick).toBeCalled()
  })
})
