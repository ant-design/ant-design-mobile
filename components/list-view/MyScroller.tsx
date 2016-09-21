import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
  refs: any;
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
    const { onScroll = (ev) => { }, useZscroller, refreshControl } = this.props;
    if (useZscroller && refreshControl && this.refs.refreshControl) {
      this.refs.refreshControl.refs.refreshControl.refs.placeholder.style.height =
        `${ReactDOM.findDOMNode<HTMLElement>(this.refs[INNERVIEW]).offsetHeight}px`;
    }
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
    const {
      children, className, prefixCls, listPrefixCls, listViewPrefixCls,
      style = {}, contentContainerStyle, useZscroller, refreshControl,
    } = this.props;
    const preCls = prefixCls || listViewPrefixCls || '';
    return React.cloneElement(
      <div ref={SCROLLVIEW}
        className={`${preCls}-scrollview${className ? ` ${className}` : ''}`} />,
      {
        style: useZscroller ? assign({}, {
          position: 'relative',
          overflow: 'hidden',
          flex: 1,
        }, style) : style,
      },
      useZscroller && refreshControl ? React.cloneElement(refreshControl, {
        ref: 'refreshControl',
        outerContainer: true,
      }) : undefined,
      <div ref={INNERVIEW}
        className={`${preCls}-scrollview-content ${listPrefixCls}`}
        style={contentContainerStyle}>{children}</div>
    );
  }
}
