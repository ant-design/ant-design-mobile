import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export interface StepsItemProps {
  width?: number;
  size?: string;
  current?: number;
  index?: number;
  last?: boolean;
  direction?: string;
  title?: string;
  description?: string;
  status?: string;
}

export default class StepsItem extends React.Component<StepsItemProps, any> {

  render() {
    const { width, size, current, index, last, direction, title, description, status } = this.props;

    const headSize = `head_${size || 'default'}`;
    const dotTextSize = `dotText_${size || 'default'}`;
    const horizonTailSize = `horizon_tail_${size || 'default'}`;

    const tailCurrent = index < current || status === 'finish' ? 'tail_current' : null;
    const headCurrent = (size === 'pointer' && (status === 'finish' || index < current))
      || (index === current) || (status === 'process') ?
      'head_current' : null;
    const headWait = index > current || status === 'wait' ? 'head_wait' : null;
    const textCurrent = index === current || status === 'process' ? 'text_current' : null;
    const textWait = index > current || status === 'wait' ? 'text_wait' : null;
    const colorCurrent = index === current || status === 'process' ? 'color_current' : null;

    const widthStyle = {width: width};
    const imgStyle = size === 'small' ? {width: 2, height: 2} : {width: 14, height: 14};

    let Steps = direction === 'vertical' ? (<View style={[styles.container]}>
        { !last && <View style={[styles.tail, styles[tailCurrent]]}></View> }
        <View style={[styles.head_default, styles[headCurrent], styles[headWait]]}>
          {
            index < current || status === 'finish'  ?
              <Image
                source={require('./images/check.png')}
                style={imgStyle}
              /> :
              <Text style={[styles[dotTextSize], styles[textCurrent], styles[textWait]]}>{index + 1}</Text>
          }
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, styles[colorCurrent]]}>{ title }</Text>
          <Text style={[styles.description, styles[colorCurrent]]}>{ description }</Text>
        </View>
      </View>) :
      (<View style={[styles.item, widthStyle]}>
        <View>
          <View style={[styles[headSize], styles[headCurrent], styles[headWait]]}>
            {
              index < current || status === 'finish' ?
              size !== 'pointer' && <Image
                source={require('./images/check.png')}
                style={{ width: 14, height:14 }}
              /> :
              size !== 'pointer' &&
              <Text style={[styles[dotTextSize], styles[textCurrent], styles[textWait]]}>
                {index + 1}
              </Text>
            }
          </View>
          <Text style={[styles.horizon_title, styles[colorCurrent]]}>{title}</Text>
        </View>
        { !last && <View style={[styles[horizonTailSize], styles[tailCurrent]]}></View> }
      </View>);

    return (
      <View>
        {Steps}
      </View>
    );
  }
}
