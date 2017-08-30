import React from 'react';

const touchSupported = typeof window !== 'undefined' && 'ontouchstart' in window;

export interface TouchProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: any;
  onTouchStart?: Function;
  onTouchEnd?: Function;
  onTouchCancel?: Function;
  onMouseDown?: Function;
  onMouseUp?: Function;
}

export interface TouchState {
  active: boolean;
}

export default class TouchFeedback extends React.Component<TouchProps, TouchState> {
  static defaultProps = {
    disabled: false,
  };

  state = {
    active: false,
  };

  componentDidUpdate() {
    if (this.props.disabled && this.state.active) {
      this.setState({
        active: false,
      });
    }
  }

  setTouchFeedbackState(active) {
    this.setState({
      active,
    });
  }

  onTouchStart = (e) => {
    if (this.props.onTouchStart) {
      this.props.onTouchStart(e);
    }
    this.setTouchFeedbackState(true);
  }

  onTouchEnd = (e) => {
    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(e);
    }
    this.setTouchFeedbackState(false);
  }

  onTouchCancel = (e) => {
    if (this.props.onTouchCancel) {
      this.props.onTouchCancel(e);
    }
    this.setTouchFeedbackState(false);
  }

  onMouseDown = (e) => {
    if (this.props.onTouchStart) {
      this.props.onTouchStart(e);
    }
    this.setTouchFeedbackState(true);
  }

  onMouseUp = (e) => {
    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(e);
    }
    this.setTouchFeedbackState(false);
  }

  render() {
    const { children, disabled, activeClassName, activeStyle } = this.props;

    const events = disabled ? undefined : (
      touchSupported ? {
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onTouchEnd,
        onTouchCancel: this.onTouchCancel,
      } : {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
      }
    );

    const child = React.Children.only(children);

    if (!disabled && this.state.active) {
      let { style, className } = child.props;

      if (activeStyle) {
        style = {
          ...style,
          ...activeStyle,
        };
      }

      if (activeClassName) {
        if (className) {
          className += ` ${activeClassName}`;
        } else {
          className = activeClassName;
        }
      }
      return React.cloneElement(child, {
        className,
        style,
        ...events,
      });
    }

    return React.cloneElement(child, events);
  }
}
