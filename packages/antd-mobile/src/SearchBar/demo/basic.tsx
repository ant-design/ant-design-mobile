import * as React from 'react'
import {
  unstable_SearchBar as SearchBar,
  unstable_Modal as Modal,
} from '@ant-design/mobile'

export default () => {
  const inputRef = React.createRef<any>()

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <SearchBar
        autoFocus
        ref={inputRef}
        placeholder="Search"
        maxLength={8}
        onSubmit={v => {
          Modal.alert({
            content: 'submit: ' + v,
          })
        }}
      />

      {/* <Button type="primary" onPress={focus}>
        点击聚焦
      </Button> */}

      <SearchBar
        placeholder="Show Cancel Button"
        showCancelButton
        borderColor="green"
        maxLength={24}
      />
    </div>
  )
}
