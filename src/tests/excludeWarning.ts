const originError = console.error

const errorMsgSegment = [
  // remove px tester warning
  'The px tester is not rendering properly. Please make sure you have imported `antd-mobile/es/global`.',
  // remove CSS variables warning
  'supports CSS variables',
]
export function excludeWarning() {
  const errorSpy = jest
    .spyOn(console, 'error')
    .mockImplementation((msg, ...rest) => {
      if (errorMsgSegment.some(segment => String(msg).includes(segment))) {
        return
      }
      originError(msg, ...rest)
    })

  return () => {
    errorSpy.mockRestore()
  }
}
