import React from 'react'
import { render, testA11y, fireEvent, waitFor, screen } from 'testing'
import Footer from '..'

const classPrefix = `adm-footer`

describe('Footer', () => {
  test('renders with label', () => {
    render(<Footer label='no more' />)
    expect(document.querySelector(`.${classPrefix}-label`)).toHaveTextContent(
      'no more'
    )
  })

  test('renders with custom label', () => {
    render(<Footer label={<div className='custom-label'></div>} />)
    expect(document.querySelector('.custom-label')).toBeInTheDocument()
  })

  test('renders with content', () => {
    render(<Footer content='@ 2022' />)
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '@ 2022'
    )
  })

  test('renders with links', () => {
    const onLinkClick = jest.fn()
    render(
      <Footer
        links={[
          {
            text: 'antd mobile',
            href: 'https://mobile.ant.design/',
          },
        ]}
        onLinkClick={onLinkClick}
      />
    )
    expect(document.querySelector(`.${classPrefix}-links`)).toHaveTextContent(
      'antd mobile'
    )
    fireEvent.click(screen.getByText('antd mobile'))
    expect(onLinkClick).toBeCalled()
  })

  test('renders with chips', () => {
    const onChipClick = jest.fn()
    render(
      <Footer
        chips={[
          {
            text: 'antd',
          },
          {
            text: 'mobile',
            type: 'link',
          },
        ]}
        onChipClick={onChipClick}
      />
    )
    expect(document.querySelectorAll(`.${classPrefix}-chip`)).toHaveLength(2)
    fireEvent.click(screen.getByText('antd'))
    expect(onChipClick).not.toBeCalled()

    expect(screen.getByText('mobile')).toHaveClass(`${classPrefix}-chip-link`)
    fireEvent.click(screen.getByText('mobile'))
    expect(onChipClick).toBeCalled()
  })
})
