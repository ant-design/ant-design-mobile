import React from 'react';
import { View, Text, Image } from 'react-native';
import ResultStyle from './style';
import Button from '../button';
import ResultProps from './PropsType';

export default class Result extends React.Component<ResultProps, any> {
  static defaultProps = {
    styles: ResultStyle,
    buttonType: '',
    buttonClick: () => {},
  };

  render() {
    const { styles, style, img, imgUrl, title, message, buttonText, buttonClick, buttonType } = this.props;

    let imgContent: any = null;
    if (img) {
      imgContent = <View style={styles.imgWrap}>{img}</View>;
    } else if (imgUrl) {
      imgContent = <View style={styles.imgWrap}><Image source={imgUrl} style={styles.img} /></View>;
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
