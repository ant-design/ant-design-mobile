import * as React from 'react';
import RNStepsItem from './StepsItem';
import { View } from 'react-native';
import StepsProps from './StepsPropType';
import styles from './style';

export default class Steps extends React.Component<StepsProps, any> {
  static Step: any;

  static defaultProps = {
    direction: '',
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
    const children = this.props.children;
    const wrapView = this.props.direction === 'vertical' ? null : 'warp_row';

    return (
      <View style={styles[wrapView]} onLayout={(e) => {this.onLayout(e);}}>
      {
        React.Children.map(children, (ele: any, idx) => {
          let errorTail = -1;
          if (idx < (children as Array<any>).length - 1) {
            const status = this.props.children[idx + 1].props.status;
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
          });
        })
      }
      </View>
    );
  }
}

Steps.Step = RNStepsItem;
