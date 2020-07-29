import * as React from 'react'
import {
  unstable_SwipeAction as SwipeAction,
  unstable_List as List,
  unstable_Switch as Switch,
} from '@ant-design/mobile'

export default () => {
  const [radius, setRadius] = React.useState(false)
  return (
    <>
      <List renderHeader="圆角控制开关">
        <List.Item
          extra={
            <Switch
              checked={radius}
              onChange={v => {
                setRadius(v)
              }}
            />
          }
        >
          是否圆角
        </List.Item>
      </List>
      <List radius={radius} renderHeader="SwipeAction">
        <SwipeAction
          autoClose
          right={[
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
            },
            {
              text: 'Primary',
              onPress: () => console.log('delete'),
              type: 'primary',
            },
            {
              text: 'Delete',
              onPress: () => console.log('delete'),
              type: 'warn',
            },
          ]}
        >
          <List.Item arrow="horizontal">right</List.Item>
        </SwipeAction>

        <SwipeAction
          autoClose
          right={[
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
            },
            {
              text: 'Delete',
              onPress: () => console.log('delete'),
              type: 'warn',
            },
          ]}
          left={[
            {
              text: 'Reply',
              onPress: () => console.log('reply'),
              type: 'primary',
            },
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
          <List.Item arrow="horizontal" brief="第二行">
            left and right
          </List.Item>
        </SwipeAction>
        <SwipeAction
          right={[
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
            },
            {
              text: 'Delete',
              onPress: () => console.log('delete'),
              type: 'warn',
            },
          ]}
          left={[
            {
              text: 'Reply',
              onPress: () => console.log('reply'),
              type: 'primary',
            },
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
          <List.Item arrow="horizontal">not auto close</List.Item>
        </SwipeAction>
      </List>
    </>
  )
}
