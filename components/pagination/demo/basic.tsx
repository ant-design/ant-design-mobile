import * as React from 'react';
import { WhiteSpace, Pagination, WingBlank } from 'antd-mobile';
import { View } from 'react-native';

export default class BasicPaginationExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Pagination
            mode="button"
            size="large"
            total={5}
            simple={false} />
        </WingBlank>
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Pagination
            mode="button"
            size="large"
            total={5}
            simple />
        </WingBlank>
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Pagination
            mode="button"
            size="small"
            total={5}
            simple={false} />
        </WingBlank>
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Pagination
            mode="button"
            size="small"
            total={5}
            simple />
        </WingBlank>
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Pagination
            mode="number"
            total={5}
            size="large"
          />
        </WingBlank>
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Pagination
            mode="point"
            total={5}
            size="large"
          />
        </WingBlank>
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Pagination
            mode="point"
            total={5}
            size="small"
          />
        </WingBlank>
      </View>
    );
  }
}
