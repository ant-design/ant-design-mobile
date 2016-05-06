import React from 'react';
import Dialog from 'rc-dialog';

export default class Modal extends React.Component {
  static defaultProps = {
    visible: false,
  }

  componentDidMount() {
    const prefixCls = this.props.prefixCls;
    const dialog = document.getElementsByClassName(prefixCls)[0];
    dialog.style.marginTop = `-${Math.round(dialog.clientHeight / 2)}px`;
    dialog.style.marginLeft = `-${Math.round(dialog.clientWidth / 2)}px`;
  }

  render() {
    const props = this.props;
    return (
      <Dialog {...props} visible={props.visible} />
    );
  }
}
