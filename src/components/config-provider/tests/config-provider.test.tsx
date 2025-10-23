import MockDate from 'mockdate'
import React from 'react'
import { render } from 'testing'
import ConfigProvider from '..'
import { useConfig } from '../'
import Calendar from '../../calendar'
import CalendarPickerView from '../../calendar-picker-view'
import Cascader from '../../cascader'
import ErrorBlock from '../../error-block'
import Form from '../../form'
import ImageUploader from '../../image-uploader'
import Picker from '../../picker'
import SearchBar from '../../search-bar'

import arSA from '../../../locales/ar-SA'
import cnrME from '../../../locales/cnr-ME'
import daDK from '../../../locales/da-DK'
import deDE from '../../../locales/de-DE'
import enUS from '../../../locales/en-US'
import esES from '../../../locales/es-ES'
import faIR from '../../../locales/fa-IR'
import frFR from '../../../locales/fr-FR'
import hrHR from '../../../locales/hr-HR'
import huHU from '../../../locales/hu-HU'
import idID from '../../../locales/id-ID'
import inID from '../../../locales/in-ID'
import itIT from '../../../locales/it-IT'
import jaJP from '../../../locales/ja-JP'
import kkKZ from '../../../locales/kk-KZ'
import koKR from '../../../locales/ko-KR'
import msMY from '../../../locales/ms-MY'
import nbNO from '../../../locales/nb-NO'
import nlNL from '../../../locales/nl-NL'
import ptBR from '../../../locales/pt-BR'
import ruRU from '../../../locales/ru-RU'
import srRS from '../../../locales/sr-RS'
import thTH from '../../../locales/th-TH'
import trTR from '../../../locales/tr-TR'
import viVN from '../../../locales/vi-VN'
import zhCN from '../../../locales/zh-CN'
import zhHK from '../../../locales/zh-HK'
import zhTW from '../../../locales/zh-TW'

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
  deDE,
  msMY,
  arSA,
  ptBR,
  viVN,
  inID,
  hrHR,
  srRS,
  cnrME,
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
