// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready

const iconsMem: {
  [key: string]: boolean
} = {
  nodeRendered: false,
}

const getIconMemName = (type: string) => {
  return type + 'loaded'
}

const renderSvgRootNode = () => {
  if (!document || iconsMem.nodeRendered) {
    return
  }
  const mountNode = document.body
  const addNode = document.createElement('div')
  addNode.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0"><defs id="__ANTD_MOBILE_V3_SVG_SPRITE_NODE__"></defs></svg>'

  // 删除多余的 div 这一层
  const svgNode = addNode.getElementsByTagName('svg')[0]

  if (mountNode.firstChild) {
    mountNode.insertBefore(svgNode, mountNode.firstChild)
  } else {
    mountNode.appendChild(svgNode)
  }

  const existing = document.getElementById('__ANTD_MOBILE_V3_SVG_SPRITE_NODE__')
  iconsMem.nodeRendered = !!existing
}

const renderSvgSymbolNode = (icon: { type: string; content: string }) => {
  if (!document || iconsMem[getIconMemName(icon.type)]) {
    return
  }
  const svgNode = document.getElementById('__ANTD_MOBILE_V3_SVG_SPRITE_NODE__')
  const svgContent = icon.content.split('<svg')[1]

  // 这里不能用 appendChild(symbol) 的方法，会显示不出来
  // 使用和 insertAdjacentHTML 差不多的 innerHTML
  svgNode.innerHTML += `<symbol id="${icon.type}"${svgContent}symbol>`

  // TODO: 是否需要知道 insertAdjacentHTML 是否成功
  iconsMem[getIconMemName(icon.type)] = true
}

const loadSprite = (icon: { type: string; content: string }) => {
  if (!document) {
    return
  }
  // 渲染根节点
  renderSvgRootNode()
  if (!icon?.type || !icon?.content) {
    return
  }
  // 渲染每个图标
  renderSvgSymbolNode(icon)
}

export default loadSprite
