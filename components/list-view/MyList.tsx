import React from 'react';
import ReactDOM from 'react-dom';
import List from '../list';

const throttle = function (fn, delay) {
  let allowSample = true;
  return function (e) {
    if (allowSample) {
      allowSample = false;
      setTimeout(function () { allowSample = true; }, delay);
      fn(e);
    }
  };
};

const SCROLLVIEW = 'ScrollView';

export default React.createClass({
  componentDidMount() {
    this.__handleScroll = this._handleScroll();
    ReactDOM.findDOMNode(this.refs[SCROLLVIEW]).addEventListener('scroll', this.__handleScroll);
  },
  componentWillUnmount() {
    ReactDOM.findDOMNode(this.refs[SCROLLVIEW]).removeEventListener('scroll', this.__handleScroll);
  },
  handleScroll(e) {
    const { onScroll = (ev) => { } } = this.props;
    onScroll(e);
  },
  _handleScroll(e) {
    let handleScroll = (ev) => {};
    // let handleScroll = this.handleScroll;
    if (this.props.scrollEventThrottle && this.props.onScroll) {
      handleScroll = throttle(this.handleScroll, this.props.scrollEventThrottle);
    }
    return handleScroll;
  },
  render() {
    const { children, className, style } = this.props;
    const divProps = { className, style };
    return React.cloneElement(<List ref={SCROLLVIEW} />, divProps, children);
  },
});
