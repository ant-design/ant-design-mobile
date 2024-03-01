import React from 'react'
import { render } from 'testing'
import MockDate from 'mockdate'
import ConfigProvider from '..'
import Calendar from '../../calendar'
import CalendarPickerView from '../../calendar-picker-view'
import Cascader from '../../cascader'
import ErrorBlock from '../../error-block'
import Form from '../../form'
import Picker from '../../picker'
import SearchBar from '../../search-bar'
import ImageUploader from '../../image-uploader'
import { useConfig } from '../'

import zhCN from '../../../locales/zh-CN'
import zhTW from '../../../locales/zh-TW'
import zhHK from '../../../locales/zh-HK'
import enUS from '../../../locales/en-US'
import faIR from '../../../locales/fa-IR'
import esES from '../../../locales/es-ES'
import koKR from '../../../locales/ko-KR'
import jaJP from '../../../locales/ja-JP'
import frFR from '../../../locales/fr-FR'
import idID from '../../../locales/id-ID'
import kkKZ from '../../../locales/kk-KZ'
import itIT from '../../../locales/it-IT'
import daDK from '../../../locales/da-DK'
import nbNO from '../../../locales/nb-NO'
import nlNL from '../../../locales/nl-NL'
import ruRU from '../../../locales/ru-RU'
import trTR from '../../../locales/tr-TR'
import thTH from '../../../locales/th-TH'
import huHU from '../../../locales/hu-HU'

const locales = [
  zhCN,
  zhTW,
  zhHK,
  enUS,
  faIR,
  esES,
  koKR,
  jaJP,
  frFR,
  huHU,
  kkKZ,
  idID,
  itIT,
  daDK,
  nbNO,
  nlNL,
  ruRU,
  trTR,
  thTH,
]

describe('ConfigProvider', () => {
  URL.revokeObjectURL = jest.fn(() => '')

  beforeAll(() => {
    MockDate.set(new Date('2022-03-22'))
  })

  afterAll(() => {
    MockDate.reset()
  })

  const App = () => (
    <>
      <Calendar selectionMode='single' />
      <CalendarPickerView selectionMode='single' />
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

  test('useConfig should only has `locale`', () => {
    let config: ReturnType<typeof useConfig>

    const Demo = () => {
      config = useConfig()
      return null
    }
    render(<Demo />)

    expect(Object.keys(config!)).toEqual(['locale'])
  })
})
