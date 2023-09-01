import React from 'react'
import { render, testA11y } from 'testing'
import Text from '..'

const classPrefix = `adm-text`

describe('Text', () => {
  test('passes a11y test', async () => {
    await testA11y(<Text>tag</Text>)
  })

  test('renders with color', () => {
    const { getByText } = render(
      <>
        <Text>Default</Text>
        <Text color='primary'>Primary</Text>
        <Text color='secondary'>Secondary</Text>
        <Text color='success'>Success</Text>
        <Text color='warning'>Warning</Text>
        <Text color='danger'>Danger</Text>
        <Text color='weak'>Weak</Text>
        <Text color='light'>Light</Text>
      </>
    )

    expect(getByText('Default').closest('span')).toHaveClass(
      `${classPrefix}-default`
    )

    expect(getByText('Primary').closest('span')).toHaveClass(
      `${classPrefix}-primary`
    )

    expect(getByText('Secondary').closest('span')).toHaveClass(
      `${classPrefix}-secondary`
    )

    expect(getByText('Success').closest('span')).toHaveClass(
      `${classPrefix}-success`
    )

    expect(getByText('Danger').closest('span')).toHaveClass(
      `${classPrefix}-danger`
    )

    expect(getByText('Warning').closest('span')).toHaveClass(
      `${classPrefix}-warning`
    )

    expect(getByText('Light').closest('span')).toHaveClass(
      `${classPrefix}-light`
    )

    expect(getByText('Weak').closest('span')).toHaveClass(`${classPrefix}-weak`)
  })

  test('renders with strong', () => {
    const { getByText } = render(<Text strong={true}>Strong</Text>)

    expect(getByText('Strong').closest('span')).toHaveClass(
      `${classPrefix}-strong`
    )
  })

  test('renders with italic', () => {
    const { getByText } = render(<Text italic={true}>Italic</Text>)

    expect(getByText('Italic').closest('span')).toHaveClass(
      `${classPrefix}-italic`
    )
  })
})
