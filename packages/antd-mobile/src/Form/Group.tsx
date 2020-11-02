import * as React from 'react'
import { FormGroupPropsType } from './PropsType'
import List from '../List'

export const GroupContext = React.createContext({
  unstable_noStyle: false,
})

const Group: React.FC<FormGroupPropsType> = props => {
  const {
    children,
    unstable_noStyle,

    // 仅透传这三个给 List
    className,
    renderHeader,
    radius,
  } = props

  const rest = {
    className,
    renderHeader,
    radius,
  }

  const content = unstable_noStyle ? (
    children
  ) : (
    <List {...rest}>{children}</List>
  )

  return (
    <GroupContext.Provider
      value={{
        unstable_noStyle: unstable_noStyle!,
      }}
    >
      {content}
    </GroupContext.Provider>
  )
}

Group.displayName = 'FormGroup'

Group.defaultProps = {
  unstable_noStyle: false,
}

export default Group
