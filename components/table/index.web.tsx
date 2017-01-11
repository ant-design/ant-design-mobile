import React from 'react';
import assign from 'object-assign';
import RcTable from 'rc-table';

export default class Table extends React.Component<any, any> {
  static defaultProps = {
    dataSource: [],
    prefixCls: 'am-table',
  };

  render() {
    const { prefixCls, columns, dataSource, direction, scrollX, titleFixed } = this.props;

    const newProps = assign({}, this.props, { data: dataSource });

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
