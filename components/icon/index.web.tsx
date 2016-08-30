import * as React from 'react';

export interface IconPropType {
  type: string;
  className?: string;
}

export default class Icon extends React.Component<IconPropType, any> {
  static defaultProps = {
    className: '',
  };
  render() {
    const { type, className, ...rest } = this.props;
    return (
      <i {...rest} className={`${className} anticon anticon-${type}`.trim()} />
    );
  }
}
