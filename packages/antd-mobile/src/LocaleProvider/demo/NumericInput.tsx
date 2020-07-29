import * as React from 'react'
import {
  unstable_Button as Button,
  unstable_NumericInput as NumericInput,
  unstable_LocaleProvider as LocaleProvider,
} from '@ant-design/mobile'
import { en_US, zh_CN } from '@ant-design/mobile-languages'

export default () => {
  const [lang, setLang] = React.useState(zh_CN)

  return (
    <>
      <Button
        type="primary"
        onPress={() => {
          if (lang === zh_CN) {
            setLang(en_US)
          } else {
            setLang(zh_CN)
          }
        }}
      >
        点击切换
      </Button>
      <h3>当前: {lang.locale}</h3>
      <LocaleProvider value={lang}>
        <NumericInput customKey="X" confirm autoFocus />
      </LocaleProvider>
    </>
  )
}
