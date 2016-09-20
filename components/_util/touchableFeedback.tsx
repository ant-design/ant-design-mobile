/**
 *  fix active style
 *  on Uc browser, css :active not work normal
 */
import React from 'react';

const touchSupported = typeof window !== 'undefined' && 'ontouchstart' in window;

export default function touchableFeedBack(ComposedComponent) {
  const TouchableFeedbackComponent = React.createClass<{
    onTouchStart?: Function;
    onTouchEnd?: Function;
    onTouchCancel?: Function;
    onMouseDown?: Function;
    onMouseUp?: Function;
  }, any>({
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
      };
      return <ComposedComponent
        {...this.props}
        touchFeedback={this.state.touchFeedback}
        {...events}
      />;
    },
  });
  return TouchableFeedbackComponent;
}
