import React from 'react';
import classNames from 'classnames';

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

  triggerEvent(type, isActive, ev) {
    const eventType = `on${type}`;
    if (this.props[eventType]) {
      this.props[eventType](ev);
    }
    this.setState({
      active: isActive,
    });
  }

  onTouchStart = (e) => {
    this.triggerEvent('TouchStart', true, e);
  }

  onTouchEnd = (e) => {
    this.triggerEvent('TouchEnd', false, e);
  }

  onTouchCancel = (e) => {
    this.triggerEvent('TouchCancel', false, e);
  }

  onMouseDown = (e) => {
    this.triggerEvent('TouchStart', true, e);
  }

  onMouseUp = (e) => {
    this.triggerEvent('TouchEnd', false, e);
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

      const cls = classNames({
        [className as string]: !!className,
        [activeClassName as string]: !!activeClassName,
      });

      return React.cloneElement(child, {
        className: cls,
        style,
        ...events,
      });
    }

    return React.cloneElement(child, events);
  }
}
