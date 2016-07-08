import {supportedProperty, supportedValue} from 'css-vendor';
export function create(styles) {
  const ret = {};
  for (const s in styles) {
    if (styles.hasOwnProperty(s)) {
      const style = styles;
      const ret2 = {};
      for (let property in style) {
        if (style.hasOwnProperty(property)) {
          let value = style[property];
          property = supportedProperty(property) || property;
          if (typeof value === 'string') {
            value = supportedValue(property, value) || value;
          }
          ret2[property] = value;
        }
      }
      ret[s] = ret2;
    }
  }
  return ret;
}
