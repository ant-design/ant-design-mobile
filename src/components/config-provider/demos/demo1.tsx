import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    console.log(1)
    return () => {
      console.log(2)
    }
  }, [])
  return null
}
