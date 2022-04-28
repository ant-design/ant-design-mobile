import React from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import Form from '..'
import Input from '../../input'
import Button from '../../button'
import Checkbox from '../../checkbox'

const classPrefix = `adm-form`

function $$(className: string) {
  return document.body.querySelectorAll(className)
}

const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})

describe('Form', () => {
  afterEach(() => {
    warnSpy.mockReset()
  })

  afterAll(() => {
    warnSpy.mockRestore()
  })

  test('basic usage', async () => {
    const fn = jest.fn()

    const { getByText, getByLabelText } = render(
      <Form
        onFinish={fn}
        footer={
          <Button block type='submit' color='primary' size='large'>
            submit
          </Button>
        }
      >
        <Form.Header>基础用法</Form.Header>
        <Form.Item name='name' label='name' rules={[{ required: true }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='address' help='address detail'>
          <Input placeholder='请输入地址' />
        </Form.Item>
      </Form>
    )

    console.error = jest.fn()

    await waitFor(() => {
      fireEvent.click(getByText('submit'))
    })

    expect($$(`.${classPrefix}-item-feedback-error`).length).toBeTruthy()
    expect($$(`.${classPrefix}-item-has-error`).length).toBeTruthy()
    expect(console.error).toBeCalledTimes(0)

    fireEvent.change(getByLabelText(/name/i), { target: { value: 'name' } })
    fireEvent.change(getByLabelText(/address/i), {
      target: { value: 'address' },
    })

    await waitFor(() => {
      fireEvent.click(getByText('submit'))
    })
    expect(console.error).toBeCalledTimes(0)
    expect(fn.mock.calls[0][0]).toEqual({ name: 'name', address: 'address' })
  })

  test('renders with horizontal layout', async () => {
    render(
      <Form layout='horizontal'>
        <Form.Item data-testid='form-item'>
          <Input />
        </Form.Item>
      </Form>
    )

    expect($$(`.${classPrefix}-item`)[0]).toHaveClass(
      `${classPrefix}-item-horizontal`
    )
  })

  test('custom field update logic', async () => {
    const { getByText, getByTestId, getByLabelText } = render(
      <Form>
        <Form.Item name='a' label='A'>
          <Input />
        </Form.Item>
        <Form.Item name='b' label='B' required>
          <Checkbox.Group>
            <Checkbox value='1'>选项1</Checkbox>
            <Checkbox value='2'>选项2</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          label='表单联动-字段B'
          shouldUpdate={(prevValues, curValues) => {
            return prevValues.b !== curValues.b
          }}
        >
          {({ getFieldValue }) => (
            <div data-testid='res'>{JSON.stringify(getFieldValue('b'))}</div>
          )}
        </Form.Item>
      </Form>
    )

    fireEvent.click(getByText('选项1'))
    expect(getByTestId('res')).toHaveTextContent('["1"]')

    fireEvent.change(getByLabelText(/A/), { target: { value: 'aaa' } })
    expect(getByTestId('res')).toHaveTextContent('["1"]')
  })

  test('return same form instance', async () => {
    const instances = new Set()

    const App = () => {
      const [form] = Form.useForm()
      instances.add(form)
      const [, forceUpdate] = React.useState({})
      return (
        <button
          type='button'
          onClick={() => {
            forceUpdate({})
          }}
        >
          Refresh
        </button>
      )
    }

    const { getByText } = render(<App />)

    for (let i = 0; i < 5; i += 1) {
      fireEvent.click(getByText('Refresh'))
    }

    expect(instances.size).toEqual(1)
  })

  test('`messageVariables` support validate', async () => {
    const { getByTestId } = render(
      <Form
        data-testid='form'
        validateMessages={{ required: "'${name}' is required" }}
      >
        <Form.Item name='test' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    )

    await waitFor(() => {
      fireEvent.submit(getByTestId('form'))
    })

    expect(getByTestId('form')).toHaveTextContent(`'test' is required`)
  })

  test("`shouldUpdate` shouldn't work with render props", async () => {
    render(
      <Form>
        <Form.Item>{() => null}</Form.Item>
      </Form>
    )

    expect(warnSpy).toHaveBeenCalledWith(
      '[antd-mobile: Form.Item] `children` of render props only work with `shouldUpdate` or `dependencies`.'
    )
  })

  test("`shouldUpdate` shouldn't work with `dependencies`", async () => {
    render(
      <Form>
        <Form.Item shouldUpdate dependencies={[]}>
          {() => null}
        </Form.Item>
      </Form>
    )

    expect(warnSpy).toHaveBeenCalledWith(
      "[antd-mobile: Form.Item] `shouldUpdate` and `dependencies` shouldn't be used together."
    )
  })

  test("`name` shouldn't work with render props", async () => {
    render(
      <Form>
        <Form.Item name='test' shouldUpdate>
          {() => null}
        </Form.Item>
      </Form>
    )

    expect(warnSpy).toHaveBeenCalledWith(
      "[antd-mobile: Form.Item] Do not use `name` with `children` of render props since it's not a field."
    )
  })

  test('warning when use `dependencies` but `name` is empty & children is not a render props', async () => {
    render(
      <Form>
        <Form.Item dependencies={[]}>text</Form.Item>
      </Form>
    )

    expect(warnSpy).toHaveBeenCalledWith(
      '[antd-mobile: Form.Item] Must set `name` or use render props when `dependencies` is set.'
    )
  })

  test('warning with `defaultValue`', async () => {
    render(
      <Form>
        <Form.Item name='test'>
          <Input defaultValue='test' />
        </Form.Item>
      </Form>
    )

    expect(warnSpy).toHaveBeenCalledWith(
      '[antd-mobile: Form.Item] `defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.'
    )
  })

  test('warning when use `name` but children is not validate element', async () => {
    render(
      <Form>
        <Form.Item name='test'>text</Form.Item>
      </Form>
    )

    expect(warnSpy).toHaveBeenCalledWith(
      '[antd-mobile: Form.Item] `name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.'
    )
  })

  test('warningOnly validate', async () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <Form data-testid='form' onFinish={fn}>
        <Form.Item
          name='email'
          label='邮箱'
          rules={[
            { required: true },
            { type: 'string', min: 6 },
            { type: 'email', warningOnly: true },
          ]}
        >
          <Input placeholder='请输入邮箱' />
        </Form.Item>
      </Form>
    )

    fireEvent.change($$('input')[0], { target: { value: 'aaaaaa' } })

    await waitFor(() => {
      expect($$(`.${classPrefix}-item-feedback-error`).length).not.toBeTruthy()
      expect($$(`.${classPrefix}-item-feedback-warning`).length).toBeTruthy()
    })

    fireEvent.submit(getByTestId('form'))

    await waitFor(() => {
      expect(fn).toBeCalledTimes(1)
    })
  })

  describe('Form.Item', () => {
    test('noStyle', async () => {
      const onChange = jest.fn()
      const { container } = render(
        <Form>
          <Form.Item noStyle name='test'>
            <Input onChange={onChange} />
          </Form.Item>
        </Form>
      )

      expect(container).toMatchSnapshot()

      fireEvent.change($$('input')[0], { target: { value: 'test' } })
      expect(onChange).toHaveBeenCalled()
    })

    test('hidden', async () => {
      const onChange = jest.fn()
      const { container } = render(
        <Form>
          <Form.Item hidden name='test'>
            <Input onChange={onChange} />
          </Form.Item>
        </Form>
      )

      expect(container).toMatchSnapshot()

      fireEvent.change($$('input')[0], { target: { value: 'test' } })
      expect(onChange).toHaveBeenCalled()
    })
  })
})
