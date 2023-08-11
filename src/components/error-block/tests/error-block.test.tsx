import React from 'react'
import { render, testA11y } from 'testing'
import ErrorBlock from '..'

const classPrefix = `adm-error-block`

describe('ErrorBlock', () => {
  test('a11y', async () => {
    await testA11y(<ErrorBlock />)
  })

  test('renders with empty statsu', async () => {
    const { container } = render(<ErrorBlock status='empty' />)

    expect(container).toMatchSnapshot()
  })

  test('renders with fullPage', async () => {
    const { getByTestId } = render(
      <ErrorBlock fullPage data-testid='error-block' />
    )

    expect(getByTestId('error-block')).toHaveClass(`${classPrefix}-full-page`)
  })

  test('renders with customize props', async () => {
    const { container } = render(
      <>
        <ErrorBlock
          image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
          style={{
            '--image-height': '150px',
          }}
          title='Customize Title'
          description={
            <span>
              Customize <a href='#API'>Description</a>
            </span>
          }
        >
          <button color='primary'>Create Now</button>
        </ErrorBlock>
      </>
    )

    expect(container).toMatchSnapshot()
  })

  test('renders when image is ReactElement', async () => {
    const { container } = render(
      <ErrorBlock
        image={
          <div>
            <img src='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg' />
          </div>
        }
        data-testid='error-block'
      />
    )

    expect(container).toMatchSnapshot()
  })
  test('renders when description and title', async () => {
    const title = 0
    const description = 0

    const { container } = render(
      <ErrorBlock title={title} description={description} />
    )

    const titleElement = container.querySelector(
      `.${classPrefix}-description-title`
    )
    expect(titleElement).toBeInTheDocument()
    expect(titleElement?.textContent).toBe(title + '')

    const descElement = container.querySelector(
      `.${classPrefix}-description-subtitle`
    )
    expect(descElement).toBeInTheDocument()
    expect(descElement?.textContent).toBe(description + '')
  })
})
