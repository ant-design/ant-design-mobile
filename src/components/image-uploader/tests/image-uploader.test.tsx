import React, { useState } from 'react'
import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  userEvent,
  sleep,
  screen,
  cleanup,
  act,
  waitForElementToBeRemoved,
} from 'testing'
import ImageUploader, { ImageUploadItem } from '..'
import Dialog from '../../dialog'

const classPrefix = `adm-image-uploader`

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
const mockImg = new File(['hello'], 'hello.png', { type: 'image/png' })

function $$(cls: string) {
  return document.querySelectorAll(cls)
}
async function mockUpload(file: File, time: number = 500) {
  await sleep(time)
  return {
    url: URL.createObjectURL(file),
  }
}

export async function mockUploadFail() {
  await sleep(300)
  throw new Error('Fail to upload')
}

async function mockInputFile(file: File | File[] = mockImg) {
  const inputEl = $$(`.${classPrefix}-input`)[0] as HTMLInputElement

  await userEvent.upload(inputEl, file)
  return inputEl
}

describe('ImageUploader', () => {
  // jsdom does not support createObjectURL
  URL.createObjectURL = jest.fn(() => '')

  const App = (props: any) => {
    const [fileList, setFileList] = useState<ImageUploadItem[]>([
      {
        url: demoSrc,
      },
    ])

    return (
      <ImageUploader
        value={fileList}
        onChange={setFileList}
        upload={mockUpload}
        {...props}
      />
    )
  }

  // FIXME: This test will log some errors about `Not implemented: window.computedStyle(elt, pseudoElt)` so we disabled it temporarily.
  // test('a11y', async () => {
  //   await testA11y(<App />)
  // })

  test('basic usage', async () => {
    render(<App />)

    const input = await mockInputFile()
    expect(input.files?.length ?? 0).toBe(0)
    expect($$(`.${classPrefix}-cell-image`).length).toBe(2)
  })

  test('upload status', async () => {
    const originConsoleError = console.error
    let uploadFailCount = 0
    console.error = jest.fn((...args: any[]) => {
      if (args[0]?.toString().includes('Fail to upload')) {
        uploadFailCount++
      } else {
        originConsoleError(...args)
      }
    })

    const { container } = render(<App upload={mockUploadFail} showUpload />)

    await act(async () => {
      await mockInputFile()
    })

    await waitFor(() => {
      screen.getByText('上传中...')
    })
    expect(container).toHaveTextContent('上传中...')

    await waitFor(() => {
      expect($$(`.${classPrefix}-cell-fail`)[0]).toBeVisible()
    })

    expect(container).toMatchSnapshot()

    expect(uploadFailCount).toBe(1)
  })

  test('limit size', async () => {
    const fn = jest.fn()
    function beforeUpload(file: File) {
      if (file.size > 4) {
        fn('The file is too large!')
        return null
      }
      return file
    }
    render(<App beforeUpload={beforeUpload} />)

    const input = await mockInputFile()

    expect(fn.mock.calls[0][0]).toContain('The file is too large!')
    expect(input.files?.length ?? 0).toBe(0)
  })

  test('limit count', async () => {
    const maxCount = 3
    const fn = jest.fn()

    render(
      <App
        multiple
        maxCount={maxCount}
        onCountExceed={(exceed: number) => {
          fn(exceed)
        }}
      />
    )

    await mockInputFile([
      new File(['one'], 'one.png', { type: 'image/png' }),
      new File(['two'], 'two.png', { type: 'image/png' }),
      new File(['three'], 'three.png', { type: 'image/png' }),
    ])

    expect(fn.mock.calls[0][0]).toBe(1)
    expect($$(`.${classPrefix}-upload-button`).length).toBe(0)
  })

  test('delete image', async () => {
    render(
      <App
        multiple
        onDelete={() => {
          return Dialog.confirm({
            content: '是否确认删除',
          })
        }}
      />
    )

    fireEvent.click($$(`.${classPrefix}-cell-delete`)[0])
    const button = await screen.findByText('确定')
    const dialog = screen.getByRole('dialog')
    fireEvent.click(button)
    await waitFor(() => expect($$(`.${classPrefix}-cell-image`).length).toBe(0))
    await waitForElementToBeRemoved(dialog)
  })

  test('custom upload button', async () => {
    const { container } = render(
      <App>
        <div>custom upload button</div>
      </App>
    )

    expect(container).toMatchSnapshot()
  })

  test('`disableUpload` prop', async () => {
    render(<App disableUpload />)
    expect($$(`.${classPrefix}-input`).length).toBe(0)
  })

  test('`deletable` prop', async () => {
    render(<App deletable={false} />)
    expect($$(`.${classPrefix}-cell-delete`).length).toBe(0)
  })

  test('`preview` & `onPreview` prop', async () => {
    const fn = jest.fn()
    render(<App preview={false} onPreview={fn} />)
    fireEvent.click($$('.adm-image-img')[0])
    expect(fn).toBeCalled()
    // don't show the image view
    expect($$('.adm-image-viewer-content').length).toBe(0)

    cleanup()

    const { container } = render(<App onPreview={fn} />)
    fireEvent.click($$(`.adm-image-img`)[0])
    await waitFor(() => {
      expect(fn).toBeCalledTimes(2)
      expect($$('.adm-image-viewer-content')[0]).toBeVisible()
    })

    expect(container).toMatchSnapshot()
  })
})
