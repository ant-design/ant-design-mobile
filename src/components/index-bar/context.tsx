import React, { createContext } from 'react'

export const IndexBarContext = createContext<{
  setUpdate: React.Dispatch<React.SetStateAction<number>>
}>({
  setUpdate: () => {},
})
