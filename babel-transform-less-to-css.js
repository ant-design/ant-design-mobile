module.exports = function () {
  return {
    visitor: {
      ImportDeclaration(path, source) {
        // 将 less 地址改成 css
        if (path.node.source.value.endsWith('.less')) {
          path.node.source.value = path.node.source.value.replace(
            /\.less$/,
            '.css'
          )
        }
      },
    },
  }
}
