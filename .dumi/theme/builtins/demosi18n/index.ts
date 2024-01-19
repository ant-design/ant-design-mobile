export const translateCode = (code: string, pathname: string) => {
  try {
    const { demosLocals } = require('./locals')
    const locals = demosLocals[pathname]
    const chineseRegex = /[\u4e00-\u9fa5]+/g
    const stringRegex = /(['"])(.*?)\1/g
    const strings = code.match(stringRegex) || []
    const matchWord = str => {
      // Remove single quotes
      const cleanedStr = str.replace(/['"]/g, '')
      if (locals[cleanedStr]) {
        code = code.replace(cleanedStr, locals[cleanedStr])
      }
    }
    const words = code.match(chineseRegex) || []
    ;[...strings, ...words]
      .sort((a, b) => b.length - a.length)
      .forEach(matchWord)
    return code
  } catch (e) {
    return code
  }
}
