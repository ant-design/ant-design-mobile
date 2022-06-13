import React, { useState } from 'react'
import { render, createEvent, fireEvent, waitFor, sleep } from 'testing'
import { basicColumns } from '../demos/columns-data'
import { patchCreateEvent } from '../../../tests/gesture/utils'
import Picker from '..'
import Button from '../../button'

patchCreateEvent(createEvent)

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
})
