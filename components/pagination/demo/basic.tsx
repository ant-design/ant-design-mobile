import * as React from 'react';
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
            size="large"
            total={5}
            simple={false} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="button"
            size="large"
            total={5}
            simple />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="button"
            size="small"
            total={5}
            simple={false} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="button"
            size="small"
            total={5}
            simple />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="number"
            total={5}
            size="large"
          />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="pointer"
            total={5}
            size="large"
          />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Pagination
            mode="pointer"
            total={5}
            size="small"
          />
        </WingBlank>
      </View>
    );
  }
}
