import React, { createRef, forwardRef, useState } from 'react'
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  sleep,
  testA11y,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
} from 'testing'
import ImageUploader, { ImageUploadItem, ImageUploaderRef } from '..'
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

const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

function mockInputFile(file: File | File[] = mockImg) {
  const inputEl = $$(`.${classPrefix}-input`)[0] as HTMLInputElement

  user.upload(inputEl, file)
  return inputEl
}

const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

describe('ImageUploader', () => {
  // jsdom does not support createObjectURL
  URL.createObjectURL = jest.fn(() => '')
  URL.revokeObjectURL = jest.fn(() => '')

  afterEach(() => {
    errSpy.mockReset()
  })

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    errSpy.mockRestore()
    jest.useRealTimers()
  })

  const App = forwardRef<ImageUploaderRef, any>((props, ref) => {
    const { onChange: propsOnChange, defaultFileList, ...restProps } = props
    const [fileList, setFileList] = useState<ImageUploadItem[]>(
      defaultFileList || [
        {
          url: demoSrc,
        },
      ]
    )
    const onChange = (newFileList: ImageUploadItem[]) => {
      setFileList(newFileList)
      propsOnChange?.(newFileList)
    }

    return (
      <ImageUploader
        ref={ref}
        value={fileList}
        onChange={onChange}
        upload={mockUpload}
        {...restProps}
      />
    )
  })

  test('a11y', async () => {
    jest.useRealTimers()
    await testA11y(<App />)
  })

  test('basic usage', async () => {
    render(<App />)

    const input = mockInputFile()
    await act(async () => {
      jest.runAllTimers()
    })
    expect(input.files?.length ?? 0).toBe(0)
    expect($$(`.${classPrefix}-cell-image`).length).toBe(2)
  })

  test('upload status', async () => {
    const { container } = render(<App upload={mockUploadFail} showUpload />)

    mockInputFile()
    await waitFor(() => {
      screen.getByText('上传中...')
    })
    expect(container).toHaveTextContent('上传中...')

    await act(async () => {
      jest.runAllTimers()
    })
    expect($$(`.${classPrefix}-cell-fail`)[0]).toBeVisible()

    expect(container).toMatchSnapshot()
    expect(errSpy).toBeCalled()
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

    const input = mockInputFile()
    await act(async () => {
      jest.runAllTimers()
    })

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

    mockInputFile([
      new File(['one'], 'one.png', { type: 'image/png' }),
      new File(['two'], 'two.png', { type: 'image/png' }),
      new File(['three'], 'three.png', { type: 'image/png' }),
    ])
    await act(async () => {
      jest.runAllTimers()
    })

    expect(fn.mock.calls[0][0]).toBe(1)
    expect($$(`.${classPrefix}-upload-button-wrap`)[0]).toHaveStyle(
      'display: none'
    )
  })

  test('upload fileList to correct order', async () => {
    const customMockUpload = async (file: File) => {
      let time: number
      const currentFileName: string = file.name
      switch (currentFileName) {
        case 'one.png':
          time = 2000
          break
        case 'two.png':
          time = 1000
          break
        case 'three.png':
        default:
          time = 300
          break
      }
      await sleep(time)
      return {
        url: currentFileName,
      }
    }
    const { container } = render(
      <App
        multiple
        upload={customMockUpload}
        renderItem={(originNode: React.ReactElement) => originNode}
      />
    )
    const inputEl = $$(`.${classPrefix}-input`)[0] as HTMLInputElement
    const files = [
      new File(['one'], 'one.png', { type: 'image/png' }),
      new File(['two'], 'two.png', { type: 'image/png' }),
      new File(['three'], 'three.png', { type: 'image/png' }),
    ]
    await user.upload(inputEl, files)

    await act(async () => {
      jest.runAllTimers()
    })

    expect($$(`.adm-image-img`).length).toBe(4)
    expect($$(`.adm-image-img`)[1]).toHaveAttribute('src', 'one.png')
    expect($$(`.adm-image-img`)[2]).toHaveAttribute('src', 'two.png')
    expect($$(`.adm-image-img`)[3]).toHaveAttribute('src', 'three.png')
  })

  test('delete image', async () => {
    jest.useRealTimers()
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

  test('`renderItem` prop', async () => {
    const customClassName = 'custom-wrapper'
    render(
      <App
        renderItem={(originNode: React.ReactElement, file: ImageUploadItem) => {
          return (
            <div key={file.url} className={customClassName}>
              {originNode}
            </div>
          )
        }}
      />
    )

    await waitFor(() => {
      expect($$(`.${customClassName}`)[0]).toBeVisible()
    })
  })

  // https://github.com/ant-design/ant-design-mobile/issues/5763
  test('the count should not be increased after the failed upload when `showFailed` is false', async () => {
    render(<App upload={mockUploadFail} maxCount={2} showFailed={false} />)
    mockInputFile()
    // status pending
    await act(async () => {
      jest.runAllTimers()
    })
    // status done
    await act(async () => {
      jest.runAllTimers()
    })

    expect($$(`.${classPrefix}-upload-button`)[0]).toBeInTheDocument()
  })

  test('auto remove failed task before upload when `showFailed` is false', async () => {
    const fn = jest.fn()
    render(
      <App
        upload={mockUploadFail}
        showFailed={false}
        onUploadQueueChange={fn}
      />
    )
    mockInputFile()
    await act(async () => {
      jest.runAllTimers()
    })
    await act(async () => {
      jest.runAllTimers()
    })
    expect(fn).toBeCalled()
    expect(fn.mock.lastCall[0].length).toBe(1)

    mockInputFile()
    await act(async () => {
      jest.runAllTimers()
    })
    await act(async () => {
      jest.runAllTimers()
    })
    expect(fn.mock.lastCall[0].length).toBe(1)
  })

  test('revokeObjectURL when task done', async () => {
    const fn = jest.fn(() => {})
    URL.revokeObjectURL = fn

    render(<App />)

    fireEvent.click($$(`.${classPrefix}-cell-delete`)[0])
    await waitFor(() => expect($$(`.${classPrefix}-cell-image`).length).toBe(0))

    expect(fn).not.toBeCalled()

    mockInputFile()
    await act(async () => {
      jest.runAllTimers()
    })
    await act(async () => {
      jest.runAllTimers()
    })

    await waitFor(() => expect($$(`.${classPrefix}-cell-image`).length).toBe(1))

    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith('')

    fireEvent.click($$(`.${classPrefix}-cell-delete`)[0])
    await waitFor(() => expect($$(`.${classPrefix}-cell-image`).length).toBe(0))

    expect(fn).toBeCalledTimes(1)
  })

  test('task change', async () => {
    const fn = jest.fn()
    render(<App upload={mockUpload} onUploadQueueChange={fn} />)
    mockInputFile()
    expect(fn.mock.lastCall[0]).toMatchObject([])
    await act(async () => {
      jest.runAllTimers()
    })
    expect(fn.mock.lastCall[0]).toMatchObject([{ id: 0, status: 'pending' }])
    await act(async () => {
      jest.runAllTimers()
    })
    expect(fn).toBeCalledWith([{ id: 0, status: 'success' }])
    expect(fn.mock.lastCall[0]).toMatchObject([])
  })

  test('task get nativeElement', () => {
    const ref = createRef<ImageUploaderRef>()

    render(<App ref={ref} />)
    expect(ref.current).toBeDefined()
    expect(ref.current?.nativeElement).toBeDefined()
  })

  test('get all upload url', async () => {
    function mockUploadWithFailure(failOnCount: number) {
      let count = 0
      return async (file: File) => {
        count++
        if (count === failOnCount + 1) {
          throw new Error('Fail to upload')
        }
        return {
          url: URL.createObjectURL(file),
          extra: {
            fileName: file.name,
          },
        }
      }
    }

    const fn = jest.fn()
    const FAIL_INDEX = 1
    const mockUpload = mockUploadWithFailure(FAIL_INDEX)

    render(
      <App multiple defaultFileList={[]} upload={mockUpload} onChange={fn} />
    )

    const fileNameList = ['one.png', 'two.png', 'three.png']

    mockInputFile(
      fileNameList.map(name => new File([name], name, { type: 'image/png' }))
    )

    await act(async () => {
      jest.runAllTimers()
    })

    expect(fn.mock.lastCall[0].length).toBe(2)

    const successFileNames = fileNameList.filter((_, i) => i !== FAIL_INDEX)
    const mockInputSuccessFileNames = fn.mock.lastCall[0].map(
      (item: ImageUploadItem) => item.extra.fileName
    )
    expect(successFileNames).toEqual(mockInputSuccessFileNames)
  })
})
