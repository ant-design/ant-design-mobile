const originError = console.error

// remove px tester warning
export function excludeWarning() {
  const errorSpy = jest
    .spyOn(console, 'error')
    .mockImplementation((msg, ...rest) => {
      if (
        String(msg).includes(
          'The px tester is not rendering properly. Please make sure you have imported `antd-mobile/es/global`.'
        )
      ) {
        return
      }
      originError(msg, ...rest)
    })

  return () => {
    errorSpy.mockRestore()
  }
}
