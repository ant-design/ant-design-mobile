import * as React from 'react'
import {
  unstable_Button as Button,
  unstable_CountDown as CountDown,
} from '@ant-design/mobile'

export default () => {
  const [down, setDown] = React.useState(false)
  return (
    <>
      间隔 1s
      {!down && (
        <CountDown
          t={5 * 1001}
          render={({ t }) => {
            return (
              <Button type="primary" disabled>
                {Math.floor(t / 1000)} S
              </Button>
            )
          }}
          onComplete={() => {
            setDown(true)
          }}
        />
      )}
      {down && (
        <Button
          type="primary"
          onPress={() => {
            setDown(false)
          }}
        >
          刷新
        </Button>
      )}
      <br />
      间隔 2s
      <CountDown
        t={5 * 1001}
        renderDuration={2000}
        render={({ t }) => {
          return (
            <Button type="primary" disabled>
              {Math.floor(t / 1000)} S
            </Button>
          )
        }}
      />
    </>
  )
}
