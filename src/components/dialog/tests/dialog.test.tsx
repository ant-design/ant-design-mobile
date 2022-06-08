import React from 'react'
import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  actSleep,
} from 'testing'
import Dialog, { DialogAlertProps } from '..'
import { act } from '@testing-library/react'

const classPrefix = `adm-dialog`

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
    await testA11y(<Dialog visible={true} content='a11y' />)
  })

  test('afterShow should be called', async () => {
    const afterShow = jest.fn()
    const { getByText } = render(<DialogAlert afterShow={afterShow} />)

    await act(async () => {
      fireEvent.click(getByText('btn'))
    })
    await actSleep(20)
    expect(afterShow).toBeCalled()
  })

  test('onConfirm should be called', async () => {
    const onConfirm = jest.fn()
    const { getByText } = render(<DialogAlert onConfirm={onConfirm} />)

    fireEvent.click(getByText('btn'))
    await act(async () => {
      fireEvent.click(getByText('我知道了'))
    })

    expect(onConfirm).toBeCalled()
  })

  test('close on mask click', async () => {
    const onClose = jest.fn()
    const afterClose = jest.fn()
    const { getByText } = render(
      <DialogAlert closeOnMaskClick onClose={onClose} afterClose={afterClose} />
    )

    fireEvent.click(getByText('btn'))
    const mask = await waitForMaskShow()
    fireEvent.click(mask)
    await waitForElementToBeRemoved(mask)
    expect(onClose).toBeCalled()
    expect(afterClose).toBeCalled()
  })

  test('custom content', async () => {
    const { getByText } = render(
      <DialogAlert
        header={<div>header</div>}
        title='title'
        content={<div>content</div>}
        image='https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ'
      />
    )

    fireEvent.click(getByText('btn'))
    expect($$(`.${classPrefix}-header`)).toHaveLength(1)
    expect($$(`.${classPrefix}-title`)).toHaveLength(1)
    expect($$(`.${classPrefix}-image-container`)).toHaveLength(1)
    expect($$(`.${classPrefix}-content`)[0].firstChild).not.toHaveClass(
      'adm-auto-center'
    )
  })

  test('wait for alert to complete', async () => {
    const fn = jest.fn()
    const { getByText } = render(
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

    fireEvent.click(getByText('btn'))
    await act(async () => {
      fireEvent.click(getByText('我知道了'))
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

    const { getByText, getAllByText } = render(<Confirm />)
    fireEvent.click(getByText('btn'))
    act(() => {
      fireEvent.click(getAllByText('确定')[0])
    })
    await actSleep(100)
    expect(fn.mock.calls[0][0]).toBe(true)

    fireEvent.click(getByText('btn'))
    act(() => {
      fireEvent.click(getAllByText('取消')[1])
    })
    await actSleep(100)
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

    const { getByText } = render(
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

    fireEvent.click(getByText('btn'))
    expect($$(`.${classPrefix}-button`)).toHaveLength(actions.length)
    expect($$(`.${classPrefix}-button`)[1]).toHaveClass('adm-button-danger')
    expect($$(`.${classPrefix}-button`)[2]).toHaveClass('adm-button-disabled')

    act(() => {
      fireEvent.click(getByText('read'))
    })
    await actSleep(20)
    expect($$(`.${classPrefix}`).length).toBe(0)
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

    const { getByText } = render(
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

    fireEvent.click(getByText('btn'))
    await act(async () => {
      fireEvent.click(getByText('ok'))
    })

    expect(onClick).toBeCalled()
  })
})
