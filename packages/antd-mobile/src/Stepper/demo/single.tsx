import * as React from 'react'
import { unstable_Stepper as Stepper } from '@ant-design/mobile'
import { SingleFormDemo } from '../../_internal/demo'
const App = () => {
  return (
    <>
      <SingleFormDemo>
        <Stepper defaultValue={3}></Stepper>
      </SingleFormDemo>
    </>
  )
}

export default App
