import React from 'react'
import { render } from 'testing'
import WaterMark from '..'

const classPrefix = `adm-water-mark`

const mockSrcSet = jest.spyOn(Image.prototype, 'src', 'set')

describe('WaterMark', () => {
  beforeAll(() => {
    mockSrcSet.mockImplementation(function (this: typeof Image.prototype) {
      if (this.onload) {
        this.onload()
      }
    })
  })

  afterAll(() => {
    mockSrcSet.mockRestore()
  })

  test('content watermark', () => {
    const { container } = render(<WaterMark content='Ant Design Mobile' />)
    expect(container).toMatchSnapshot()
  })

  test('more rows content watermark', () => {
    const { container } = render(
      <WaterMark content={['Ant Design Mobile', 'Ant Design']} />
    )
    expect(container).toMatchSnapshot()
  })

  test('image watermark', () => {
    const image =
      'https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg'
    const { container } = render(<WaterMark image={image} />)
    expect(container).toMatchSnapshot()
  })

  test('not full page', () => {
    const { getByTestId } = render(
      <WaterMark fullPage={false} data-testid='mask' />
    )
    expect(getByTestId('mask')).not.toHaveClass(`${classPrefix}-full-page`)
  })

  test('mount should not set base64Url', () => {
    let exceeded = false

    const Demo = () => {
      const divRef = React.useRef<HTMLDivElement>(null)

      React.useLayoutEffect(() => {
        exceeded = true

        const { style } = divRef.current?.querySelector(
          '.adm-water-mark'
        ) as HTMLElement

        expect(style.backgroundImage).toBeFalsy()
      }, [])

      return (
        <div ref={divRef}>
          <WaterMark content='Ant Design Mobile' />
        </div>
      )
    }

    render(<Demo />)

    expect(exceeded).toBeTruthy()
  })

  test('throw error when Canvas is not supported', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    const mockCanvasContext = jest.spyOn(
      HTMLCanvasElement.prototype,
      'getContext'
    )
    mockCanvasContext.mockReturnValue(null)
    expect(() => render(<WaterMark />)).toThrow(
      'Canvas is not supported in the current environment'
    )
    mockCanvasContext.mockRestore()
    errorSpy.mockRestore()
  })
})
