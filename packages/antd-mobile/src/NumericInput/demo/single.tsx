import * as React from 'react'
import { unstable_NumericInput as NumericInput } from '@ant-design/mobile'
import { SingleFormDemo } from '../../_internal/demo'
const App = () => {
  return (
    <>
      <SingleFormDemo>
        <NumericInput confirm defaultValue="123"></NumericInput>
      </SingleFormDemo>
    </>
  )
}

export default App
