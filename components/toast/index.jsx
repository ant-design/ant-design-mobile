import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';

export default class Toast extends React.Component {
  static propTypes = {
    mode: PropTypes.string,
    children: PropTypes.node,
    duration: PropTypes.number,
    afterHide: PropTypes.func,
  }

  static defaultProps = {
    prefixCls: 'am-toast',
    mode: '',
    duration: 3000,
    afterHide() {},
  }

  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    const props = this.props;
    this.toastInterval = setTimeout(() => {
      this.setState({
        show: false,
      }, () => {
        props.afterHide();
      });
    }, props.duration);
  }

  componentWillUnmount() {
    clearInterval(this.toastInterval);
  }

  render() {
    const { mode, children, className, prefixCls } = this.props;

    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className
    });

    let iconType = '';
    switch (mode) {
      case 'success':
        iconType = 'check-circle-o';
        break;
      case 'fail':
        iconType = 'cross-circle-o';
        break;
      case 'network':
        iconType = 'frown';
        break;
      case 'loading':
        iconType = 'loading';
        break;
      default:
        break;
    }

    const iconDom = mode !== '' ? <div className={`${prefixCls}-icon`}>
      <Icon type={iconType} />
    </div> : null;

    return this.state.show ? (
      <div className={wrapCls}>
        <div className={`${prefixCls}-text`}>
          {iconDom}
          {children}
        </div>
      </div>
    ) : null;
  }
}
