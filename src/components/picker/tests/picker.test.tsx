import React, { createRef, useState } from 'react'
import { render, fireEvent, waitFor } from 'testing'
import { basicColumns } from '../demos/columns-data'
import Picker, { PickerRef } from '..'
import Button from '../../button'

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
    const { getByTestId, getByText } = render(
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

    fireEvent.click(getByTestId('toggle'))
    await waitFor(() => {
      expect(afterShow).toBeCalled()
    })
    fireEvent.click(getByTestId('close'))
    await waitFor(() => {
      expect(afterClose).toBeCalled()
    })
    fireEvent.click(getByTestId('open'))
    await waitFor(() => {
      expect(afterShow).toBeCalled()
    })
    fireEvent.click(getByText('取消'))
    await waitFor(() => {
      expect(onCancel).toBeCalled()
    })
  })

  test('test Picker onMaskClick', async () => {
    const onCancel = jest.fn()
    const PickerTestComponent = () => {
      const [visible, setVisible] = useState(false)
      return (
        <>
          <Button onClick={() => setVisible(true)} data-testid={'button'}>
            button
          </Button>
          <Picker
            columns={basicColumns}
            visible={visible}
            onCancel={onCancel}
          />
        </>
      )
    }
    const { getByTestId } = render(<PickerTestComponent />)

    fireEvent.click(getByTestId('button'))
    await waitFor(() => {
      fireEvent.click(document.querySelectorAll('.adm-mask')[0])
    })
    await waitFor(() => {
      expect(onCancel).toBeCalled()
    })
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

    const { getByText } = render(
      <Button onClick={onClick}>imperativePicker</Button>
    )
    fireEvent.click(getByText('imperativePicker'))
    fireEvent.click(getByText('取消'))
    await waitFor(() => {
      expect(fn.mock.calls[0][0]).toBeNull()
    })

    fireEvent.click(getByText('imperativePicker'))
    fireEvent.click(getByText('确定'))
    await waitFor(() => {
      expect(onConfirm).toBeCalled()
    })
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
    await waitFor(() => {
      expect(afterShow).toBeCalled()
    })
  })
})
