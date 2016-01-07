export function treeFilter(data, filterFn, options = {}) {
  options.childrenKeyName = options.childrenKeyName || 'c';
  let children = data || [];
  const result = [];
  let level = 0;

  function filter(item) {
    return filterFn(item, level);
  }

  do {
    const foundItem = children.filter(filter)[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while(children.length > 0);
  return result;
}
