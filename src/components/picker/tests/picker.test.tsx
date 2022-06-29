import React, { createRef, useState } from 'react'
import {
  render,
  fireEvent,
  waitFor,
  screen,
  sleep,
  act,
  waitForElementToBeRemoved,
} from 'testing'
import { basicColumns } from '../demos/columns-data'
import Picker, { PickerRef, PickerColumnItem, PickerColumn } from '..'
import Button from '../../button'

async function mockRequest({ delay }: { delay: number }) {
  await sleep(delay)
  return basicColumns
}

describe('Picker', () => {
  test('renderLabel works', async () => {
    const { baseElement } = render(
      <Picker
        columns={basicColumns}
        visible={true}
        renderLabel={item => {
          return item.value
        }}
      />
    )

    expect(
      baseElement.textContent
        /**
         * aria contain -
         */
        ?.replace(/-/g, '')
    ).toContain('MonTuesWedThurFriampm')
  })

  test('test Picker render children with PickerActions and click cancel button', async () => {
    const afterShow = jest.fn()
    const afterClose = jest.fn()
    const onCancel = jest.fn()
    render(
      <Picker
        onCancel={onCancel}
        cancelText='取消'
        columns={basicColumns}
        afterShow={afterShow}
        afterClose={afterClose}
      >
        {(_, { toggle, open, close }) => (
          <>
            <Button onClick={toggle} data-testid='toggle'>
              toggle
            </Button>
            <Button onClick={open} data-testid='open'>
              open
            </Button>
            <Button onClick={close} data-testid='close'>
              close
            </Button>
          </>
        )}
      </Picker>
    )

    fireEvent.click(screen.getByTestId('toggle'))
    await waitFor(() => expect(afterShow).toBeCalledTimes(1))
    fireEvent.click(screen.getByTestId('close'))
    await waitFor(() => expect(afterClose).toBeCalledTimes(1))
    fireEvent.click(screen.getByTestId('open'))
    await waitFor(() => expect(afterShow).toBeCalledTimes(2))
    fireEvent.click(screen.getByText('取消'))
    await waitFor(() => expect(onCancel).toBeCalledTimes(1))
  })

  test('test Picker onMaskClick', async () => {
    const maskClassPrefix = 'adm-mask'
    const onCancel1 = jest.fn()
    const PickerTestComponent1 = () => {
      const [visible, setVisible] = useState(false)
      return (
        <>
          <Button onClick={() => setVisible(true)} data-testid={'button'}>
            button
          </Button>
          <Picker
            columns={basicColumns}
            visible={visible}
            onCancel={onCancel1}
          />
        </>
      )
    }
    const { unmount } = render(<PickerTestComponent1 />)

    fireEvent.click(screen.getByTestId('button'))
    await waitFor(() =>
      fireEvent.click(document.querySelectorAll(`.${maskClassPrefix}`)[0])
    )

    expect(onCancel1).toBeCalledTimes(1)
    unmount()

    const onCancel2 = jest.fn()
    const PickerTestComponent2 = () => {
      const [visible, setVisible] = useState(false)
      return (
        <>
          <Button onClick={() => setVisible(true)} data-testid={'button'}>
            button
          </Button>
          <Picker
            columns={basicColumns}
            visible={visible}
            onCancel={onCancel2}
            closeOnMaskClick={false}
          />
        </>
      )
    }

    render(<PickerTestComponent2 />)
    fireEvent.click(screen.getByTestId('button'))
    await waitFor(() =>
      fireEvent.click(document.querySelectorAll(`.${maskClassPrefix}`)[0])
    )
    expect(onCancel2).not.toBeCalled()
  })

  test('test imperative call', async () => {
    const fn = jest.fn()
    const onConfirm = jest.fn()
    const onClick = async () => {
      const value = await Picker.prompt({
        onConfirm,
        columns: basicColumns,
      })
      fn(value)
    }

    render(<Button onClick={onClick}>imperativePicker</Button>)
    const button = screen.getByText('imperativePicker')
    fireEvent.click(button)
    const cancel = await screen.findByText('取消')
    const popup = document.querySelectorAll('.adm-popup')[0]
    await act(() => sleep(0))
    fireEvent.click(cancel)
    await waitForElementToBeRemoved(popup)
    expect(fn.mock.calls[0][0]).toBeNull()

    fireEvent.click(button)
    const confirm = await screen.findByText('确定')
    const popup2 = document.querySelectorAll('.adm-popup')[0]
    await act(() => sleep(0))
    fireEvent.click(confirm)
    await waitForElementToBeRemoved(popup2)
    expect(fn.mock.calls[1][0]).toEqual(['Mon', 'am'])
    expect(onConfirm).toBeCalled()
  })

  test('test Picker should work given ref', async () => {
    const ref = createRef<PickerRef>()
    const afterShow = jest.fn()
    render(
      <Picker
        columns={basicColumns}
        afterShow={afterShow}
        closeOnMaskClick={false}
        ref={ref}
      />
    )
    act(() => {
      ref.current?.open()
    })
    await waitFor(() => expect(afterShow).toBeCalled())
  })

  const LazyLoadColumnsDemo = (props: any) => {
    const [visible, setVisible] = useState(false)
    const [columns, setColumns] = useState<PickerColumn[]>([])
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
      setVisible(true)
      if (!columns.length && !loading) {
        setLoading(true)
        const data = await mockRequest({ delay: 0 })
        setLoading(false)
        setColumns(data)
      }
    }

    return (
      <>
        <Button data-testid={'button'} onClick={handleClick}>
          button
        </Button>
        <Picker
          loading={loading}
          loadingContent={<div data-testid={'loading-content'}>loading</div>}
          columns={columns}
          visible={visible}
          onConfirm={props.onConfirm}
        />
      </>
    )
  }

  test('test Picker loading and loadingContent', async () => {
    const fn = jest.fn()
    const onConfirm = (val: PickerColumnItem) => {
      fn(val)
    }
    render(<LazyLoadColumnsDemo onConfirm={onConfirm} />)
    fireEvent.click(screen.getByTestId('button'))
    expect(screen.getByTestId('loading-content')).toBeInTheDocument()
    await act(() => sleep(0))
    const confirm = await screen.findByText('确定')
    await act(() => sleep(0))
    fireEvent.click(confirm)
    expect(fn.mock.calls[0][0]).toEqual(['Mon', 'am'])
  })
})
