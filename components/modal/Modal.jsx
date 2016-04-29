import React, { PropTypes } from 'react';
import Dialog from 'rc-dialog';
import Button from '../button';

function noop() {}

export default class Modal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    confirmLoading: PropTypes.bool,
    closable: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    footer: PropTypes.node,
  }

  static defaultProps = {
    visible: false,
    confirmLoading: false,
    onOk: noop
  }

  handleCancel = (e) => {
    this.props.onCancel(e);
  }

  handleOk = () => {
    this.props.onOk();
  }

  render() {
    const props = this.props;

    const defaultFooter = [
      <Button key="cancel" type="ghost" size="large" onClick={this.handleCancel}>
        {props.cancelText || '取消'}
      </Button>,
      <Button key="confirm" type="primary" size="large" loading={props.confirmLoading} onClick={this.handleOk}>
        {props.okText || '确定'}
      </Button>
    ];

    const footer = props.footer || defaultFooter;

    return (
      <Dialog onClose={this.handleCancel} footer={footer} {...props} visible={props.visible} />
    );
  }
}
