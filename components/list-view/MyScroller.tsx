import * as React from 'react';
import * as ReactDOM from 'react-dom';
import List from '../list';
import DOMScroller from 'zscroller';
import assign from 'object-assign';

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
const INNERVIEW = 'InnerScrollView';

export default class MyScroller extends React.Component<any, any> {
  domScroller: any;
  throttleScrollExec: any;
  componentDidMount() {
    this.throttleScrollExec = this.throttleScroll();
    if (this.props.useZscroller) {
      this.domScroller = new DOMScroller(ReactDOM.findDOMNode(this.refs[INNERVIEW]), assign({}, {
        scrollingX: false,
        onScroll: this.throttleScrollExec,
      }, this.props.scrollerOptions));
    } else {
      ReactDOM.findDOMNode(this.refs[SCROLLVIEW]).addEventListener('scroll', this.throttleScrollExec);
    }
  }
  componentWillUnmount() {
    if (this.props.useZscroller) {
      this.domScroller.destroy();
    } else {
      ReactDOM.findDOMNode(this.refs[SCROLLVIEW]).removeEventListener('scroll', this.throttleScrollExec);
    }
  }
  handleScroll = (e) => {
    const { onScroll = (ev) => { } } = this.props;
    onScroll(e);
  }
  throttleScroll = () => {
    let handleScroll = (ev) => {};
    if (this.props.scrollEventThrottle && this.props.onScroll) {
      handleScroll = throttle(this.handleScroll, this.props.scrollEventThrottle);
    }
    return handleScroll;
  }
  render() {
    const { children, className, style = {}, contentContainerStyle, useZscroller } = this.props;
    return React.cloneElement(
      <List ref={SCROLLVIEW} />, { className, style: useZscroller ? assign({}, {
        position: 'relative',
        overflow: 'hidden',
        flex: 1,
      }, style) : style },
      <div ref={INNERVIEW} style={contentContainerStyle}>{children}</div>
    );
  }
}
