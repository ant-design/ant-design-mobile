// 找到树的深度
export function getTreeDeep(treeData: any[], childrenName = 'children') {
  const walker = (tree: any[]) => {
    let deep = 0
    tree.forEach(item => {
      if (item[childrenName]) {
        deep = Math.max(deep, walker(item[childrenName]) + 1)
      } else {
        deep = Math.max(deep, 1)
      }
    })
    return deep
  }

  return walker(treeData)
}
