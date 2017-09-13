---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

````jsx
import { Filter, WhiteSpace } from 'antd-mobile';


class FilterExample extends React.Component {
  state = {
    filterItemSelected11: false,
    filterItemSelected21: false,
    filterItemSelected22: false,
    filterItemSelected31: false,
    filterItemSelected32: false,
    filterItemSelected33: false,
    filterItemSelected41: false,
    filterItemSelected42: false,
    filterItemSelected43: false,
    filterItemSelected44: false,
  }
  render() {
    const {
      filterItemSelected11,
      filterItemSelected21,
      filterItemSelected22,
      filterItemSelected31,
      filterItemSelected32,
      filterItemSelected33,
      filterItemSelected41,
      filterItemSelected42,
      filterItemSelected43,
      filterItemSelected44,
    } = this.state;
    return (<div>
      <Filter
        data={[
          {
            text: '全部状态',
            selected: filterItemSelected11,
            onClick: (el) => {
              this.setState({
                filterItemSelected11: !el.selected,
              });
            },
          },
        ]}
      />
      <WhiteSpace />
      <Filter
        data={[
          {
            text: (<div>全国</div>),
            selected: filterItemSelected21,
            icon: '',
            selectedIcon: '',
            onClick: (el) => {
              this.setState({
                filterItemSelected21: !el.selected,
              });
            },
          },
          {
            text: '全部状态全部',
            selected: filterItemSelected22,
            icon: '',
            selectedIcon: '',
            onClick: (el) => {
              this.setState({
                filterItemSelected22: !el.selected,
              });
            },
          },
        ]}
      />
      <WhiteSpace />
      <Filter
        data={[
          {
            text: '全部门店',
            selected: filterItemSelected31,
            onClick: (el) => {
              this.setState({
                filterItemSelected31: !el.selected,
              });
            },
          },
          {
            text: '全部状态',
            selected: filterItemSelected32,
            onClick: (el) => {
              this.setState({
                filterItemSelected32: !el.selected,
              });
            },
          },
          {
            text: '全部状态',
            selected: filterItemSelected33,
            onClick: (el) => {
              this.setState({
                filterItemSelected33: !el.selected,
              });
            },
          },
        ]}
      />
      <WhiteSpace />
      <Filter
        data={[
          {
            text: '私海',
            selected: filterItemSelected41,
            onClick: (el) => {
              this.setState({
                filterItemSelected41: !el.selected,
              });
            },
          },
          {
            text: '已生效',
            selected: filterItemSelected42,
            onClick: (el) => {
              this.setState({
                filterItemSelected42: !el.selected,
              });
            },
          },
          {
            text: '即将到期',
            selected: filterItemSelected43,
            onClick: (el) => {
              this.setState({
                filterItemSelected43: !el.selected,
              });
            },
          },
          {
            text: '搜索',
            selected: filterItemSelected44,
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/ajwlMoueKEbixQmJrHZN.svg',
            selectedIcon: 'https://gw.alipayobjects.com/zos/rmsportal/ajwlMoueKEbixQmJrHZN.svg',
            onClick: (el) => {
              this.setState({
                filterItemSelected44: !el.selected,
              });
            },
            className: 'search-filter-item',
          },
        ]}
      />
    </div>);
  }
}

ReactDOM.render(<FilterExample />, mountNode);
````

````css
.search-filter-item .am-filter-label {
  color: #000 !important;
}
.search-filter-item .am-filter-icon img {
  width: 12px !important;
}
````