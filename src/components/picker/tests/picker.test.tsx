import React, { createRef, useState } from 'react'
import {
  render,
  fireEvent,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from 'testing'
import { basicColumns } from '../demos/columns-data'
import Picker, { PickerRef } from '..'
import Button from '../../button'

const classPrefix = 'adm-picker'

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
    await waitFor(() =>
      expect(document.querySelector(`.${classPrefix}-popup`)).not.toHaveStyle({
        display: 'none',
      })
    )
    expect(afterShow).toBeCalled()
    fireEvent.click(screen.getByTestId('close'))
    await waitFor(() =>
      expect(document.querySelector(`.${classPrefix}-popup`)).toHaveStyle({
        display: 'none',
      })
    )
    expect(afterClose).toBeCalled()
    fireEvent.click(screen.getByTestId('open'))
    await waitFor(() =>
      expect(document.querySelector(`.${classPrefix}-popup`)).not.toHaveStyle({
        display: 'none',
      })
    )
    expect(afterShow).toBeCalled()
    fireEvent.click(screen.getByText('取消'))
    await waitFor(() =>
      expect(document.querySelector(`.${classPrefix}-popup`)).toHaveStyle({
        display: 'none',
      })
    )
    expect(onCancel).toBeCalled()
  })

  test('test Picker onMaskClick', async () => {
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
      expect(document.querySelector(`.${classPrefix}-popup`)).not.toHaveStyle({
        display: 'none',
      })
    )
    fireEvent.click(document.querySelectorAll('.adm-mask')[0])
    expect(onCancel1).toBeCalled()
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
      expect(document.querySelector(`.${classPrefix}-popup`)).not.toHaveStyle({
        display: 'none',
      })
    )
    fireEvent.click(document.querySelectorAll('.adm-mask')[0])
    expect(onCancel2).not.toBeCalled()
  })

  test('test imperative call', async () => {
    const fn = jest.fn()
    const onConfirm = jest.fn()
    const onClick = async () => {
      const value = await Picker.prompt({
        onConfirm: () => {
          onConfirm()
        },
        columns: basicColumns,
      })
      fn(value)
    }

    render(<Button onClick={onClick}>imperativePicker</Button>)

    fireEvent.click(screen.getByText('imperativePicker'))
    await waitFor(() =>
      expect(document.querySelector(`.${classPrefix}-popup`)).not.toHaveStyle({
        display: 'none',
      })
    )
    fireEvent.click(screen.getByText('取消'))
    await waitForElementToBeRemoved(() =>
      document.querySelector(`.${classPrefix}-popup`)
    )

    expect(fn.mock.calls[0][0]).toBeNull()
    fireEvent.click(screen.getByText('imperativePicker'))
    await waitFor(() =>
      expect(document.querySelector(`.${classPrefix}-popup`)).not.toHaveStyle({
        display: 'none',
      })
    )
    fireEvent.click(screen.getByText('确定'))
    await waitForElementToBeRemoved(() =>
      document.querySelector(`.${classPrefix}-popup`)
    )

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
    ref.current?.open()
    await waitFor(() =>
      expect(document.querySelector(`.${classPrefix}-popup`)).not.toHaveStyle({
        display: 'none',
      })
    )
    expect(afterShow).toBeCalled()
  })
})
