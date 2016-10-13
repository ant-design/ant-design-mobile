import React from 'react';
import { WhiteSpace, Pagination, WingBlank } from 'antd-mobile';
import { View } from 'react-native';

export default class BasicPaginationExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="button"
            total={5}
            simple={false} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="button"
            total={5}
            simple />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="number"
            total={5}
            current={2}
          />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="pointer"
            total={5}
            current={2}
          />
        </WingBlank>
        <WhiteSpace size="lg" />
      </View>
    );
  }
}
