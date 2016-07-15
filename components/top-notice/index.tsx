/* tslint:disable:no-switch-case-fall-through */
import * as React from 'react';
import { PropTypes } from 'react';
import TopNoticeProps from './topNoticePropsType';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import NoticeStyle from './style';

export default class TopNotice extends React.Component<TopNoticeProps, any> {
  static propTypes = {
    mode: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
  };

  static defaultProps = {
    mode: '',
    onClick() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  onClick = () => {
    const { mode, onClick } = this.props;
    onClick();
    if (mode === 'closable') {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    const { prefixCls, children, mode, type, onClick, className } = this.props;
    let operationDom;
    switch (mode) {
      case 'closable':
        operationDom = (
          <TouchableOpacity onPress={this.onClick}>
            <Text style={[NoticeStyle.close]}>×</Text>
          </TouchableOpacity>
        );
        break;
      case 'link':
        operationDom = (
          <TouchableOpacity onPress={this.onClick}>
            <Text style={[NoticeStyle.link]}>∟</Text>
          </TouchableOpacity>
        );
        break;
      default:
        operationDom = null;
        break;
    }

    let iconType = '';
    switch (type) {
      case 'success':
        iconType = 'dHVDErPWEJtMlmn';
        break;
      case 'error':
        iconType = 'LvckcvVesFNgvpV';
        break;
      case 'warn':
        iconType = 'bRnouywfdRsCcLU';
        break;
      case 'question':
        iconType = 'JNRDCOIzgNJGnZt';
        break;
      case 'info':
      default:
        iconType = 'baPKdUnrQFvLyHS';
        break;
    }

    const iconDom = type ? <View style={[NoticeStyle.left12]}>
      <Image source={{uri: `https://zos.alipayobjects.com/rmsportal/${iconType}.png`}} style={{ width: 12, height:12 }} />
    </View> : null;

    const contentMarginLeftStyle = type ? NoticeStyle.left8 : NoticeStyle.left12;
    return this.state.show ? (
      <View style={[NoticeStyle.notice]}>
        {iconDom}
        <Text style={[NoticeStyle.content, contentMarginLeftStyle]}>{children}</Text>
        {operationDom}
      </View>
    ) : null;
  }
}

