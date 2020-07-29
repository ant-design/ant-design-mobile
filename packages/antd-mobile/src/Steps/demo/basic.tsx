import * as React from 'react'
import { unstable_Steps as Steps } from '@ant-design/mobile'

const { Step } = Steps

export default () => (
  <div>
    <Steps current={3} direction="horizontal">
      <Step title="Finished" />
      <Step title="In Progress" description="This is description" />
      <Step title="Waiting" description="This is description" />
    </Steps>

    <Steps current={2} direction="vertical">
      <Step title="Finished" description="This is description" />
      <Step title="In Progress" description="This is description" />
      <Step title="Waiting" />
      <Step title="Final" description="This is description" />
    </Steps>

    <Steps current={2} direction="vertical">
      <Step title="Finished" description="This is description" />
      <Step fail title="In Progress" description="This is description" />
      <Step title="Waiting" />
      <Step title="Final" description="This is description" />
    </Steps>
  </div>
)
