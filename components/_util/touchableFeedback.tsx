/**
 *  fix active style
 *  on Uc browser, css :active not work normal
 */
import React from 'react';
import splitObject from './splitObject';

const touchSupported = typeof window !== 'undefined' && 'ontouchstart' in window;

export default function touchableFeedback<Props>(ComposedComponent, ComposedComponentName = '') {
  const TouchableFeedbackComponent = React.createClass<{
    onTouchStart?: Function;
    onTouchEnd?: Function;
    onTouchCancel?: Function;
    touchFeedback?: boolean|string|{};
  } & Props, any>({
    statics: {
      myName: ComposedComponentName || 'TouchableFeedbackComponent',
    },
    getInitialState() {
      return {
        touchFeedback: false,
      };
    },

    setTouchFeedbackState(touchFeedback) {
      this.setState({
        touchFeedback,
      });
    },

    onTouchStart(e) {
      if (this.props.onTouchStart) {
        this.props.onTouchStart(e);
      }
      this.setTouchFeedbackState(true);
    },

    onTouchEnd(e) {
      if (this.props.onTouchEnd) {
        this.props.onTouchEnd(e);
      }
      this.setTouchFeedbackState(false);
    },

    onTouchCancel(e) {
      if (this.props.onTouchCancel) {
        this.props.onTouchCancel(e);
      }
      this.setTouchFeedbackState(false);
    },

    onMouseDown(e) {
      if (this.props.onTouchStart) {
        this.props.onTouchStart(e);
      }
      this.setTouchFeedbackState(true);
    },

    onMouseUp(e) {
      if (this.props.onTouchEnd) {
        this.props.onTouchEnd(e);
      }
      this.setTouchFeedbackState(false);
    },

    render() {
      const events = touchSupported ? {
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onTouchEnd,
        onTouchCancel: this.onTouchCancel,
      } : {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseUp,
      };
      const [{ touchFeedback = true }, restProps] = splitObject(this.props, ['touchFeedback']);
      let feedBack = this.state.touchFeedback;
      if (!touchFeedback) {
        feedBack = false;
      } else if (feedBack) {
        feedBack = touchFeedback;
      }
      return <ComposedComponent
        {...restProps}
        touchFeedback={feedBack}
        {...events}
      />;
    },
  });
  return TouchableFeedbackComponent;
}
