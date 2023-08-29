import React from 'react'
import { render, testA11y, fireEvent } from 'testing'
import Ellipsis from '..'

const classPrefix = `adm-ellipsis`
const content =
  '蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。'

const lineHeight = 19.5

describe('Ellipsis', () => {
  const originGetComputedStyle = window.getComputedStyle

  beforeAll(() => {
    window.getComputedStyle = el => {
      const style = originGetComputedStyle(el)
      style.lineHeight = `${lineHeight}px`
      return style
    }
  })

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      get() {
        if (this.innerHTML.includes('...')) {
          const row = Math.ceil(
            // the width of '...' is equal to a Chinese char
            (this.innerHTML.replace(/\.\.\./g, '中').length / content.length) *
              4
          )
          return lineHeight * row
        }
        return lineHeight * 4
      },
    })
  })

  afterAll(() => {
    window.getComputedStyle = originGetComputedStyle
  })

  test('a11y', async () => {
    await testA11y(<Ellipsis content={content} />)
  })

  test('direction start', () => {
    const { getByTestId } = render(
      <Ellipsis content={content} direction='start' data-testid='ellipsis' />
    )
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('direction middle', () => {
    const { getByTestId } = render(
      <Ellipsis content={content} direction='middle' data-testid='ellipsis' />
    )
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('direction end', () => {
    const { getByTestId } = render(
      <Ellipsis content={content} direction='end' data-testid='ellipsis' />
    )
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('multi line', () => {
    const { getByTestId } = render(
      <Ellipsis content={content} rows={3} data-testid='ellipsis' />
    )
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('expand and collapse', () => {
    const { getByTestId, getByText } = render(
      <Ellipsis
        content={content}
        expandText='expand'
        collapseText='collapse'
        data-testid='ellipsis'
      />
    )

    fireEvent.click(getByText('expand'))
    expect(getByTestId('ellipsis')).toMatchSnapshot()
    fireEvent.click(getByText('collapse'))
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('content click', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Ellipsis
        content={content}
        data-testid='ellipsis'
        onContentClick={onClick}
      />
    )

    fireEvent.click(getByTestId('ellipsis'))
    expect(onClick).toBeCalled()
  })

  test('default expand should be work', () => {
    const { getByText } = render(
      <Ellipsis
        content={content}
        defaultExpanded
        expandText='expand'
        collapseText='collapse'
      />
    )

    const ellipsis = document.querySelector(`.${classPrefix}`)
    expect(ellipsis).not.toHaveTextContent('...')
    expect(ellipsis).toHaveTextContent('collapse')
    fireEvent.click(getByText('collapse'))
    expect(ellipsis).toHaveTextContent('...')
  })

  test('content not exceeded', () => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      value: lineHeight,
    })
    const { getByTestId } = render(
      <Ellipsis content='abc' data-testid='ellipsis' />
    )

    expect(getByTestId('ellipsis')).not.toHaveTextContent('...')
  })

  // https://github.com/ant-design/ant-design-mobile/issues/5726
  test('content could be undefined', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render(<Ellipsis content={undefined} data-testid='ellipsis' />)
    }).not.toThrowError()
  })

  test('expand and collapse support ReactNode', async () => {
    const { getByText, findByText } = render(
      <Ellipsis
        content={content}
        expandText={<span>expand</span>}
        collapseText={<span>collapse</span>}
      />
    )

    expect(await findByText('expand')).toBeVisible()
    fireEvent.click(getByText('expand'))
    expect(getByText('collapse')).toBeInTheDocument()
  })

  test('the `whiteSpace` style of the calc container should be the same as Ellipsis', () => {
    let container: Element | null = null
    Object.defineProperty(HTMLElement.prototype, 'removeChild', {
      value: (child: Element) => {
        container = child
      },
    })
    render(
      <Ellipsis
        style={{
          whiteSpace: 'pre-wrap',
        }}
        content={content}
      />
    )
    expect(container).toHaveStyle('white-space: pre-wrap')
  })
})
