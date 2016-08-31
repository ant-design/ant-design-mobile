/**
 *  fix active style
 *  on Uc browser, css :active not work normal
 */
import * as React from 'react';

export interface TouchableFeedbackProps {
  onTouchStart?: Function;
  onTouchEnd?: Function;
  onTouchCancel?: Function;
}
export interface TouchableFeedbackState {
  touchFeedback: boolean;
}

export default ComposedComponent => class extends React.Component<TouchableFeedbackProps, TouchableFeedbackState> {
  constructor(props) {
    super(props);
    this.state = {
      touchFeedback: false,
    };
  }
  setTouchFeedbackState = (touchFeedback) => {
    this.setState({
      touchFeedback,
    });
  };
  onTouchStart = (e) => {
    if (this.props.onTouchStart) {
      this.props.onTouchStart(e);
    }
    this.setTouchFeedbackState(true);
  };
  onTouchEnd = (e) => {
    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(e);
    }
    this.setTouchFeedbackState(false);
  };
  onTouchCancel = (e) => {
    if (this.props.onTouchCancel) {
      this.props.onTouchCancel(e);
    }
    this.setTouchFeedbackState(false);
  };
  render() {
    return <ComposedComponent
      {...this.props}
      touchFeedback={this.state.touchFeedback}
      onTouchStart={this.onTouchStart}
      onTouchEnd={this.onTouchEnd}
      onTouchCancel={this.onTouchCancel}
      />;
  }
};
