import { PropTypes } from 'react';
import * as React from 'react';
import RcTooltip from 'rc-tooltip';
import splitObject from '../_util/splitObject';

export interface TooltipProps {
  prefixCls?:string;
  placement?:string;
  title?:any;
  onVisibleChange: (visible: boolean) => void;
}

export default class Tooltip extends React.Component<TooltipProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    placement: PropTypes.string,
    title: PropTypes.node,
    onVisibleChange: PropTypes.func,
  }

  static defaultProps = {
    prefixCls: 'am-tooltip',
    placement: 'bootomLeft',
    onVisibleChange() {},
  }

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
    let[{ children, prefixCls, overlay, title }, restProps] = splitObject(
      this.props, ['children','prefixCls','overlay', 'title']
    );

    // Hide tooltip when there is no title
    let visible = this.state.visible;
    if (!title && !overlay) {
      visible = false;
    }
    if ('visible' in this.props) {
      visible = this.props.visible;
    }

    return (
      <RcTooltip
        prefixCls={prefixCls}
        overlay={title}
        visible={visible}
        trigger={['click']}
        {...restProps}
        onVisibleChange={this.onVisibleChange}
      >
        {children}
      </RcTooltip>
    );
  }
}
