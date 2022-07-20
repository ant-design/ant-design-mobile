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
import ImageUploader from '../../image-uploader'

import zhCN from '../../../locales/zh-CN'
import zhTW from '../../../locales/zh-TW'
import zhHK from '../../../locales/zh-HK'
import enUS from '../../../locales/en-US'
import faIR from '../../../locales/fa-IR'
import esES from '../../../locales/es-ES'
import koKR from '../../../locales/ko-KR'
import frFR from '../../../locales/fr-FR'
import idID from '../../../locales/id-ID'
import kkKZ from '../../../locales/kk-KZ'
const locales = [zhCN, zhTW, zhHK, enUS, faIR, esES, koKR, frFR, kkKZ, idID]

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
      <ImageUploader
        upload={() => Promise.resolve({ url: '' })}
        value={[
          {
            url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
          },
        ]}
      />
    </>
  )
  locales.forEach(locale => {
    test(`should display the text as ${locale.locale}`, async () => {
      const { container } = render(
        <ConfigProvider locale={locale}>
          <App />
        </ConfigProvider>
      )

      expect(container).toMatchSnapshot()
    })
  })
})
