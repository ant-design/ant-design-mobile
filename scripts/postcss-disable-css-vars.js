import postcss from 'postcss'

module.exports = postcss.plugin('postcss-dark-theme-class', (opts = {}) => {
  return (root, result) => {
    root.walkDecls(decl => {
      // Transform each property declaration here
      if (decl.value.includes('--')) {
        decl.value = ''
      }
    })
  }
})
