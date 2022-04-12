import React from 'react'
import { render } from 'testing'
import MockDate from 'mockdate'
import ConfigProvider from '..'
import Calendar from '../../calendar'
import Cascader from '../../cascader'
import ErrorBlock from '../../error-block'
import Form from '../../form'
import Picker from '../../picker'
import SearchBar from '../../search-bar'

import zhCN from '../../../locales/zh-CN'
import zhTW from '../../../locales/zh-TW'
import zhHK from '../../../locales/zh-HK'
import enUS from '../../../locales/en-US'
import faIR from '../../../locales/fa-IR'
import esES from '../../../locales/es-ES'
import koKR from '../../../locales/ko-KR'

const locales = [zhCN, zhTW, zhHK, enUS, faIR, esES, koKR]

describe('ConfigProvider', () => {
  beforeAll(() => {
    MockDate.set(new Date('2022-03-22'))
  })

  afterAll(() => {
    MockDate.reset()
  })

  const App = () => (
    <>
      <Calendar selectionMode='single' />
      <Cascader options={[]} visible />
      <ErrorBlock />
      <Form requiredMarkStyle='text-required'>
        <Form.Item name='name' label='name' required>
          <input />
        </Form.Item>
      </Form>
      <Picker columns={[]} visible />
      <SearchBar showCancelButton />
    </>
  )
  locales.forEach(locale => {
    test(`should display the text as ${locale.locale}`, async () => {
      const { container } = await render(
        <ConfigProvider locale={locale}>
          <App />
        </ConfigProvider>
      )

      expect(container).toMatchSnapshot()
    })
  })
})
