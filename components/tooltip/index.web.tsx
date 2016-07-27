import * as React from 'react';
import RcTooltip from 'rc-tooltip';

export interface TooltipProps {
  prefixCls?: string;
  placement?: string;
  title?: any;
  visible?: boolean;
  onVisibleChange: (visible: boolean) => void;
  overlay?: any;
}

export default class Tooltip extends React.Component<TooltipProps, any> {
  static defaultProps = {
    prefixCls: 'am-tooltip',
    placement: 'bootomLeft',
    onVisibleChange() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onVisibleChange = (visible) => {
    this.setState({ visible });
    this.props.onVisibleChange(visible);
  }

  render() {
    const {
      children,
      prefixCls,
      title,
      overlay,
    } = this.props;

    // Hide tooltip when there is no title
    let visible = this.state.visible;
    if (!title && !overlay) {
      visible = false;
    }
    if ('visible' in this.props) {
      visible = this.props.visible;
    }

    const restProps = Object.assign({}, this.props);
    ['prefixCls', 'overlay', 'visible', 'trigger', 'onVisibleChange', 'children'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    return (
      <RcTooltip
        prefixCls={prefixCls}
        overlay={title}
        visible={visible}
        trigger={['click']}
        onVisibleChange={this.onVisibleChange}
        {...restProps}
      >
        {children}
      </RcTooltip>
    );
  }
}
