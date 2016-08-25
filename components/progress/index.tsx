import { PropTypes } from 'react';
import * as React from 'react';
import { View } from 'react-native';
import ProgressStyle from './style/index';
import ProgressProps from './ProgressPropsType';

export default class Progress extends React.Component<ProgressProps, any> {
  static propTypes = {
    percent: PropTypes.number,
    position: PropTypes.oneOf(['fixed', 'normal']),
    unfilled: PropTypes.oneOf(['hide', 'show']),
  };

  static defaultProps = {
    percent: 0,
    position: 'normal',
    unfilled: 'show',
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
    const { wrapWidth } = this.state;
    const { percent, position, unfilled } = this.props;

    let widthPercent;
    if (percent > 0) {
      widthPercent = percent > 100 ? 100 : percent;
    } else {
      widthPercent = 0;
    }

    const positionStyle =
    position === 'fixed' ?
    {
      position: 'absolute',
      top: 0,
    } : null;

    const percentStyle = {
      width: wrapWidth * (widthPercent / 100),
      height: 0,
    };

    const unfilledHideStyle =
    unfilled === 'hide' ?
    {
      backgroundColor: 'transparent',
    } : null;

    return (<View onLayout={(e) => {this.onLayout(e);}}
      style={[ProgressStyle.progressOuter, positionStyle, unfilledHideStyle]}>
      <View style={[ProgressStyle.progressBar, percentStyle]}></View>
    </View>);
  }
}
