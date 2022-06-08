import React from 'react'
import { render, testA11y, fireEvent } from 'testing'
import Ellipsis from '..'

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

    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      get() {
        if (this.innerText.includes('...')) {
          const row = Math.ceil(
            // the width of '...' is equal to a Chinese char
            (this.innerText.replace(/\.\.\./g, '中').length / content.length) *
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

  test('direction start', async () => {
    const { getByTestId } = render(
      <Ellipsis content={content} direction='start' data-testid='ellipsis' />
    )
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('direction middle', async () => {
    const { getByTestId } = render(
      <Ellipsis content={content} direction='middle' data-testid='ellipsis' />
    )
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('direction end', async () => {
    const { getByTestId } = render(
      <Ellipsis content={content} direction='end' data-testid='ellipsis' />
    )
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('multi line', async () => {
    const { getByTestId } = render(
      <Ellipsis content={content} rows={3} data-testid='ellipsis' />
    )
    expect(getByTestId('ellipsis')).toMatchSnapshot()
  })

  test('expand and collapse', async () => {
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

  test('content click', async () => {
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

  test('content not exceeded', async () => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      value: lineHeight,
    })
    const { getByTestId } = render(
      <Ellipsis content='abc' data-testid='ellipsis' />
    )

    expect(getByTestId('ellipsis')).not.toHaveTextContent('...')
  })
})
