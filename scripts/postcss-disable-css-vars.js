import postcss from 'postcss'

module.exports = postcss.plugin('postcss-disable-css-vars', (opts = {}) => {
  return (root, result) => {
    root.walkDecls(decl => {
      if (decl.source.input.file?.includes('/.dumi/theme/')) return
      // Transform each property declaration here
      if (decl.value.includes('--')) {
        decl.value = ''
      }
    })
  }
})

// module.exports = (opts = {}) => {
//   return {
//     postcssPlugin: 'postcss-disable-css-vars',
//     Once: (root, result) => {
//       root.walkDecls(decl => {
//         if (decl.source.input.file?.includes('/.dumi/theme/')) return
//         // Transform each property declaration here
//         if (decl.value.includes('--')) {
//           decl.value = ''
//         }
//       })
//     },
//   }
// }
//
// module.exports.postcss = true
