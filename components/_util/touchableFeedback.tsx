/**
 *  fix active style
 *  on Uc browser, css :active not work normal
 */
import React from 'react';

const touchSupported = typeof window !== 'undefined' && 'ontouchstart' in window;

export default function touchableFeedback<Props>(ComposedComponent, ComposedComponentName = '') {
  const TouchableFeedbackComponent = React.createClass<{
    onTouchStart?: (e: any) => void;
    onTouchEnd?: (e: any) => void;
    onTouchCancel?: (e: any) => void;
    activeStyle?: any;
  } & Props, any>({
    statics: {
      myName: ComposedComponentName || 'TouchableFeedbackComponent',
    },

    getDefaultProps() {
      return {
        activeStyle: {},
      } as any;
    },

    getInitialState() {
      return {
        touchFeedback: false,
      };
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

    setTouchFeedbackState(touchFeedback) {
      this.setState({
        touchFeedback,
      });
    },

    render() {
      let events = {};
      if (this.props.activeStyle) {
        events = touchSupported ? {
          onTouchStart: this.onTouchStart,
          onTouchEnd: this.onTouchEnd,
          onTouchCancel: this.onTouchCancel,
        } : {
          onMouseDown: this.onMouseDown,
          onMouseUp: this.state.touchFeedback ? this.onMouseUp : undefined,
          onMouseLeave: this.state.touchFeedback ? this.onMouseUp : undefined,
        };
      }
      return (
        <ComposedComponent
          {...this.props}
          touchFeedback={this.state.touchFeedback}
          {...events}
        />
      );
    },
  });
  return TouchableFeedbackComponent;
}
