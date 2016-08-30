/**
 *  fix active style
 *  on Uc browser, css :active not normal
 */
import * as React from 'react';

export interface HoverProps {
  onClick?: Function;
  onTouchStart?: Function;
  onTouchEnd?: Function;
  onTouchCancel?: Function;
}
export interface HoverState {
  hover: boolean;
}

export default ComposedComponent => class extends React.Component<HoverProps, HoverState> {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  setHoverState = (isHover) => {
    this.setState({
      hover: isHover,
    });
  };
  onTouchStart = (e) => {
    if (this.props.onTouchStart) {
      this.props.onTouchStart(e);
    }
    this.setHoverState(true);
  };
  onTouchEnd = (e) => {
    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(e);
    }
    this.setHoverState(false);
  };
  onTouchCancel = (e) => {
    if (this.props.onTouchCancel) {
      this.props.onTouchCancel(e);
    }
    this.setHoverState(false);
  };
  render() {
    return <ComposedComponent
      {...this.props}
      isHover={this.state.hover}
      onTouchStart={this.onTouchStart}
      onTouchEnd={this.onTouchEnd}
      onTouchCancel={this.onTouchCancel}
      />;
  }
};
