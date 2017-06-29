import React from 'react';
import RcTable from 'rc-table';
import warning from 'warning';

export default class Table extends React.Component<any, any> {
  static defaultProps = {
    dataSource: [],
    prefixCls: 'am-table',
  };

  render() {
    warning(false, 'Table is going to be deprecated at antd-mobile@2.0. see https://goo.gl/xb0YEX');
    const { prefixCls, columns, dataSource, direction, scrollX, titleFixed } = this.props;

    const newProps = {
      ...this.props,
      data: dataSource,
    };

    let table;
    // 默认纵向
    if (!direction || direction === 'vertical') {
      if (titleFixed) {
        table = <RcTable {...newProps} columns={columns} scroll={{ x: true }} showHeader={false} />;
      } else {
        table = <RcTable {...newProps} columns={columns} scroll={{ x: scrollX }} />;
      }
    // 横向
    } else if (direction === 'horizon') {
      columns[0].className = `${prefixCls}-horizonTitle`;
      table = <RcTable {...newProps} columns={columns} showHeader={false} scroll={{ x: scrollX }} />;
    // 混合
    } else if (direction === 'mix') {
      columns[0].className = `${prefixCls}-horizonTitle`;
      table = <RcTable {...newProps} columns={columns} scroll={{ x: scrollX }} />;
    }

    return table;
  }
}
