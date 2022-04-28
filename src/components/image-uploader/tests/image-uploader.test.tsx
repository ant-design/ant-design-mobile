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

  test('a11y', async () => {
    await testA11y(<App />)
  })

  test('basic usage', async () => {
    await render(<App />)

    const input = await mockInputFile()
    expect(input.files?.[0]).toBe(mockImg)
    expect($$(`.${classPrefix}-cell-image`).length).toBe(2)
  })

  test('upload status', async () => {
    const fn = jest.fn()
    console.error = fn

    const { container } = await render(
      <App upload={mockUploadFail} showUpload />
    )

    mockInputFile()

    await waitFor(() => {
      screen.getByText('上传中...')
      expect(container).toMatchSnapshot()
    })

    await waitFor(() => {
      expect($$(`.${classPrefix}-cell-fail`)[0]).toBeVisible()
      expect(container).toMatchSnapshot()
    })

    expect(fn.mock.calls[0][0].message).toContain('Fail to upload')
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
    await render(<App beforeUpload={beforeUpload} />)

    const input = await mockInputFile()

    expect(fn.mock.calls[0][0]).toContain('The file is too large!')
    expect(input.files?.[0]).toMatchObject({})
  })

  test('limit count', async () => {
    const maxCount = 3
    const fn = jest.fn()

    await render(
      <App
        multiple
        maxCount={maxCount}
        onCountExceed={(exceed: number) => {
          fn(exceed)
        }}
      />
    )

    const input = await mockInputFile([
      new File(['one'], 'one.png', { type: 'image/png' }),
      new File(['two'], 'two.png', { type: 'image/png' }),
      new File(['three'], 'three.png', { type: 'image/png' }),
    ])

    expect(fn.mock.calls[0][0]).toBe(1)
    expect($$(`.${classPrefix}-upload-button`).length).toBe(0)
  })

  test('delete image', async () => {
    const { getByText } = await render(
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
    await waitFor(() => fireEvent.click(getByText('确定')))
    expect($$(`.${classPrefix}-cell-image`).length).toBe(0)
  })

  test('custom upload button', async () => {
    const { container } = await render(
      <App>
        <div>custom upload button</div>
      </App>
    )

    expect(container).toMatchSnapshot()
  })

  test('`disableUpload` prop', async () => {
    await render(<App disableUpload />)
    expect($$(`.${classPrefix}-input`).length).toBe(0)
  })

  test('`deletable` prop', async () => {
    await render(<App deletable={false} />)
    expect($$(`.${classPrefix}-cell-delete`).length).toBe(0)
  })

  test('`preview` & `onPreview` prop', async () => {
    const fn = jest.fn()
    await render(<App preview={false} onPreview={fn} />)
    fireEvent.click($$('.adm-image-img')[0])
    expect(fn).toBeCalled()
    // don't show the image view
    expect($$('.adm-image-viewer-content').length).toBe(0)

    cleanup()

    const { container } = await render(<App onPreview={fn} />)
    fireEvent.click($$(`.adm-image-img`)[0])
    await waitFor(() => {
      expect(fn).toBeCalledTimes(2)
      expect($$('.adm-image-viewer-content')[0]).toBeVisible()
    })

    expect(container).toMatchSnapshot()
  })
})
