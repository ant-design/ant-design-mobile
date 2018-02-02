export default (props: { [key: string]: any }) => {
  return Object.keys(props).reduce<{ [key: string]: string }>((prev, key) => {
    if (
      key.substr(0, 5) === 'aria-' ||
      key.substr(0, 5) === 'data-' ||
      key === 'role'
    ) {
      prev[key] = props[key];
    }
    return prev;
  }, {});
};
