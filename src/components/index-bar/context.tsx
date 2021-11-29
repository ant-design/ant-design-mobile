import React, { createContext } from 'react'

export const IndexBarContext = createContext<{
  update: () => void
}>({
  update: () => {},
})
