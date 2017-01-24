import React from 'react';
import RNStepsItem from './StepsItem';
import { View } from 'react-native';
import StepStyle from './style';

export interface StepsProps {
  direction?: 'vertical' | 'horizon';
  current?: number;
  width?: number;
  size?: string;
  finishIcon?: string;
  styles?: any;
}

export default class Steps extends React.Component<StepsProps, any> {
  static Step: any;

  static defaultProps = {
    direction: '',
    styles: StepStyle,
  };

  constructor(props) {
    super(props);
    this.state = {
      wrapWidth: 0,
    };
  }

  onLayout = (e) => {
    this.setState({
      wrapWidth: e.nativeEvent.layout.width,
    });
  }

  render() {
    const children = this.props.children as any;
    const wrapView = this.props.direction === 'vertical' ? '' : 'warp_row';
    const styles = this.props.styles;
    const itemDom = React.Children.map(children, (ele: any, idx) => {
      let errorTail = -1;
      if (idx < (children as Array<any>).length - 1) {
        const status = children[idx + 1].props.status;
        if (status === 'error') {
          errorTail = idx;
        }
      }
      return React.cloneElement(ele, {
        index: idx,
        last: idx === (children as Array<any>).length - 1,
        direction: this.props.direction,
        current: this.props.current,
        width: 1 / ((children as Array<any>).length - 1) * this.state.wrapWidth,
        size: this.props.size,
        finishIcon: this.props.finishIcon,
        errorTail,
        styles,
      });
    });
    return (
      <View style={styles[wrapView]} onLayout={(e) => {this.onLayout(e);}}>
        {itemDom}
      </View>
    );
  }
}

Steps.Step = RNStepsItem;
