import React, { PropTypes } from 'react';
import classNames from 'classnames';
import List from '../list/index';
import '../list/style';
import './index.less';
function noop() {
}

const Collapse = React.createClass({
  propTypes: {
    style: PropTypes.object,
    title: PropTypes.any,
    content: PropTypes.array,
    openable: PropTypes.bool,
    open: PropTypes.bool,
    onTitleClick: PropTypes.func,
    onContentClick: PropTypes.func
  },
  getDefaultProps() {
    return {
      openable: true,
      open: true,
      onTitleClick: noop,
      onContentClick: noop,
    };
  },
  getInitialState() {
    return {
      open: this.props.open
    }
  },
  onChange() {
    if (this.props.openable) {
      this.setState({
        open: !this.state.open
      })
    }
    this.props.onTitleClick();
  },
  render() {
    let { className, title, content, style } = this.props;
    let { open } = this.state;
    const wrapCls = classNames({
      'am-collapse': true,
      [className]: className
    });

    const hdCls = classNames({
      'am-collapse-hd': true,
      'am-collapse-hd-open': open,
    });

    const contentCls = classNames({
      'am-collapse-bd': true,
      'am-collapse-bd-closed': !open,
    });

    const contentArray = [];

    content.forEach((el, i) => {
      contentArray.push(<List.Item key={i + 'content'} onClick={this.props.onContentClick.bind(this, i)}>{el}</List.Item>);
    });

    return (
      <List className={wrapCls} style={style}>
        <List.Body>
          <List.Item className={hdCls} arrow={this.state.open ? 'up' : 'down'} onClick={this.onChange}>{title}</List.Item>
          <div className={contentCls}>
            {contentArray}
          </div>
        </List.Body>
      </List>
    );
  }
});

module.exports = Collapse;
