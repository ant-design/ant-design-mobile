/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  Image,
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Button from '../button/index.native';
import { ResultPropsType } from './PropsType';
import ResultStyle, { IResultStyle } from './style/index.native';

export interface ResultNativeProps extends ResultPropsType {
  styles?: IResultStyle;
  style?: StyleProp<ViewStyle>;
}

const ResultStyles = StyleSheet.create<any>(ResultStyle);

export default class Result extends React.Component<ResultNativeProps, any> {
  static defaultProps = {
    styles: ResultStyles,
    buttonType: '',
    buttonClick: () => {},
  };

  render() {
    const {
      style,
      img,
      imgUrl,
      title,
      message,
      buttonText,
      onButtonClick,
      buttonType,
    } = this.props;
    const styles = this.props.styles!;

    let imgContent: JSX.Element | null = null;
    if (img) {
      imgContent = <View style={styles.imgWrap}>{img}</View>;
    } else if (imgUrl) {
      imgContent = (
        <View style={styles.imgWrap}>
          <Image
            source={imgUrl as ImageURISource | ImageURISource[]}
            style={styles.img}
          />
        </View>
      );
    }

    return (
      <View style={[styles.result, style]}>
        {imgContent}
        {title ? (
          <View style={styles.title}>
            {typeof title === 'string' ? (
              <Text style={styles.titleText}>{title}</Text>
            ) : (
              title
            )}
          </View>
        ) : null}
        {message ? (
          <View style={styles.message}>
            {typeof message === 'string' ? (
              <Text style={styles.messageText}>{message}</Text>
            ) : (
              message
            )}
          </View>
        ) : null}
        {buttonText ? (
          <View style={styles.buttonWrap}>
            <Button
              style={styles.button}
              type={buttonType}
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </View>
        ) : null}
      </View>
    );
  }
}
