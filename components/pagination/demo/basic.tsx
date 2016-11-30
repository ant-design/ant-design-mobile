import React from 'react';
import { WhiteSpace, Pagination, WingBlank } from 'antd-mobile';

export default class BasicPaginationExample extends React.Component<any, any> {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Pagination total={5} current={1} prevText="上一步" nextText="下一步" />

        <WhiteSpace size="lg" />
        <Pagination simple total={5} current={1} prevText="上一步" nextText="下一步" />

        <WhiteSpace size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <WhiteSpace size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </WingBlank>
    );
  }
}
