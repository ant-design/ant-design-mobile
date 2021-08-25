import React, { createContext } from 'react'

export const IndexBarContext = createContext<{
  indexes: string[]
  setIndexes: React.Dispatch<React.SetStateAction<string[]>>
}>({
  indexes: [],
  setIndexes: () => {},
})
