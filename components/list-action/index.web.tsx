import React, { PropTypes } from 'react';
import Swipeout from 'react-swipeout';
import Hammer from 'react-hammerjs';
import Modal from '../modal';
class ListAction extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    autoClose: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    left: PropTypes.arrayOf(PropTypes.object),
    right: PropTypes.arrayOf(PropTypes.object),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.any,
  }

  static defaultProps = {
    prefixCls: 'am-listaction',
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.onLongTap = this.onLongTap.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onLongTap() {
    const { disabled, onOpen } = this.props;
    if (disabled) {
      return;
    }
    onOpen();

    this.setState({
      showModal: true,
    });
  }

  onClose() {
    this.props.onClose();
    this.setState({
      showModal: false,
    });
  }

  onAndroidBtnClick(btn) {
    const onPress = btn.onPress;
    if (onPress) {
      onPress();
    }
    if (this.props.autoClose) {
      this.onClose();
    }
  }

  renderAndroid() {
    const { children, title } = this.props;
    const pressOption = {
      recognizers: {
        press: {
          time: 500,
          threshold: 50
        }
      }
    };
    return (
      <div>
        <Hammer onPress={this.onLongTap} options={pressOption}>
          {children}
        </Hammer>
        {
          this.state.showModal ? (
            <Modal
              animated={false}
              title={title}
              transparent
              closable
              maskClosable
              onClose={this.onClose}
              footer={this.renderAndroidBtn()}
              visible
            />
          ) : null
        }
      </div>
    );
  }

  renderAndroidBtn() {
    const { prefixCls, left, right } = this.props;
    const actions = [...left, ...right];

    return (
      <ul className={`${prefixCls}-android-actions`}>
        {
          actions.map((btn, i) => {
            return (
              <li key={i}
                className={`${prefixCls}-android-btn`}
                onClick={() => this.onAndroidBtnClick(btn)}
              >
                {btn.text}
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    const isAndroid = !!navigator.userAgent.match(/Android/i);
    const { prefixCls, left, right, style } = this.props;

    return (left.length || right.length) ? (
      <div className={`${prefixCls}`} style={style}>
        {
          isAndroid ? this.renderAndroid() : (
            <Swipeout {...this.props} />
          )
        }
      </div>
    ) : (
      <div />
    );
  }
}

export default ListAction;
