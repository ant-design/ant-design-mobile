import assign from 'object-assign';
import React from 'react';

export default function normalizeProps(cProps) {
  const props = assign({}, cProps);
  React.Children.forEach(cProps.children, (c: any) => {
    if (c && (c.props && c.props.isPropType || c.type && c.type.isPropType)) {
      props[c.props.name] = c.props.children;
    }
  });
  return props;
}
