import React, { PropTypes } from 'react';
import './Item.less';

const Item = React.createClass({
  PropTypes: {
    logo: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      logo: '',
      title: '',
      subtitle: '',
      onClick: () => {},
    };
  },
  _handleTouchStart() {
    this.refs.demoitem.style.backgroundColor = '#f2f2f2';
  },
  _handleTouchEnd() {
    this.refs.demoitem.style.backgroundColor = '#fff';
  },
  render() {
    const { logo, title, subtitle, onClick, style } = this.props;
    return (
      <section className="am-demo-item" onClick={onClick} onTouchStart={this._handleTouchStart} onTouchEnd={this._handleTouchEnd} onTouchCancel={this._handleTouchEnd} ref="demoitem" style={style}>
      {/* eslint prefer-template: 0 */}
        <div className="am-demo-item-logo" style={{ backgroundImage: `url(${logo})` }} />
        <h1 className="am-demo-item-title">{title}</h1>
        <h2 className="am-demo-item-subtitle">{subtitle}</h2>
      </section>
    );
  }
});

export default Item;
