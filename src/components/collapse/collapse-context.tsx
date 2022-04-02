import { createContext, useContext } from 'react'
import { CollapseProps } from './collapse'

interface CollapseContextProps extends Pick<CollapseProps, 'arrow'> {
  onCollapse: (key: string) => void
}

const CollapseContext = createContext<CollapseContextProps>({
  onCollapse: () => {},
  arrow: null,
})

CollapseContext.displayName = 'CollapseContext'

const CollapseContextProvider = CollapseContext.Provider

export const useCollapseContext = () => {
  return useContext(CollapseContext)
}

export default CollapseContextProvider
