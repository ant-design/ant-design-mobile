export default function getDataAttr(props) {
  const dataAttrs = {};
  Object.keys(props).forEach(i => {
    if (i.indexOf('data-') === 0) {
      dataAttrs[i] = props[i];
    }
  });
  return dataAttrs;
}
