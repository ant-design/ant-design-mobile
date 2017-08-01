/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, Image, ImageURISource, StyleSheet } from 'react-native';
import ResultStyle, { IResultStyle } from './style';
import Button from '../button';
import ResultProps from './PropsType';

export interface IResultNativeProps extends ResultProps {
  styles?: IResultStyle;
}

const ResultStyles = StyleSheet.create<any>(ResultStyle);

export default class Result extends React.Component<IResultNativeProps, any> {
  static defaultProps = {
    styles: ResultStyles,
    buttonType: '',
    buttonClick: () => {},
  };

  render() {
    const { style, img, imgUrl, title, message, buttonText, buttonClick, buttonType } = this.props;
    const styles = this.props.styles!;

    let imgContent: any = null;
    if (img) {
      imgContent = <View style={styles.imgWrap}>{img}</View>;
    } else if (imgUrl) {
      imgContent = (
        <View style={styles.imgWrap}>
          <Image source={imgUrl as ImageURISource | ImageURISource[]} style={styles.img} />
        </View>
      );
    }

    return (
      <View style={[styles.result, style]}>
        {imgContent}
        {title ? <View style={styles.title}>{typeof title === 'string' ?
          <Text style={styles.titleText}>{title}</Text> : title}</View> : null}
        {message ? <View style={styles.message}>{typeof message === 'string' ?
          <Text style={styles.messageText}>{message}</Text> : message}</View> : null}
        {buttonText ? <View style={styles.buttonWrap}>
          <Button style={styles.button} type={buttonType} onClick={buttonClick}>{buttonText}</Button>
        </View> : null}
      </View>
    );
  }
}
