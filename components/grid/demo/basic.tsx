import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `名字${i}`,
}));

export default class BasicGridExample extends React.Component<any, any> {
  render() {
    return (<ScrollView>
      <View style={[{ margin: 10 }]}><Text>简单示例</Text></View>
      <View style={[{ padding: 10 }]}>
        <Grid data={data} hasLine={false} />
      </View>

      <View style={[{ margin: 10 }]}><Text>走马灯</Text></View>
      <Grid data={data} columnNum={3} isCarousel onClick={(_el, index) => alert(index)} />
    </ScrollView>);
  }
}
