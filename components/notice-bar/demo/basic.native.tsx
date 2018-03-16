// tslint:disable:jsx-no-multiline-js
/* tslint:disable:no-console */
import { NoticeBar, WhiteSpace } from 'antd-mobile';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default class NoticeBarExample extends React.Component<any, any> {
  render() {
    const customIcon = (
      <Image
        // tslint:disable-next-line:jsx-no-multiline-js
        source={{
          uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',
        }}
        style={{ width: 12, height: 12 }}
      />
    );

    return (
      <View style={{ marginTop: 10 }}>
        <WhiteSpace size="lg" />
        {/* marqueeProps.style only support text style props*/}
        <NoticeBar
          onClick={() => alert('click')}
          marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}
        >
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" onClick={() => alert('will close')}>
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" icon={customIcon}>
          Customized icon.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" onClick={() => alert('link')}>
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link">
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" icon={null}>
          Remove the default icon.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar
          mode="closable"
          action={<Text style={{ color: '#a1a1a1' }}>不再提示</Text>}
        >
          Closable demo for `actionText`.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" action={<Text>去看看</Text>}>
          Link demo for `actionText`.
        </NoticeBar>
      </View>
    );
  }
}
