---
order: 0
title:
  zh-CN: 菜单
  en-US: Menu
---

````jsx
/* eslint global-require:0, no-nested-ternary:0 */
import { Menu, ActivityIndicator, Filter } from 'antd-mobile';

const data = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: '1',
        disabled: false,
      },
      {
        label: 'Chinese Food',
        value: '2',
      }, {
        label: 'Hot Pot',
        value: '3',
      }, {
        label: 'Buffet',
        value: '4',
      }, {
        label: 'Fast Food',
        value: '5',
      }, {
        label: 'Snack',
        value: '6',
      }, {
        label: 'Bread',
        value: '7',
      }, {
        label: 'Fruit',
        value: '8',
      }, {
        label: 'Noodle',
        value: '9',
      }, {
        label: 'Leisure Food',
        value: '10',
      }],
  }, {
    value: '2',
    label: 'Supermarket',
    children: [
      {
        label: 'All Supermarkets',
        value: '1',
      }, {
        label: 'Supermarket',
        value: '2',
        disabled: true,
      }, {
        label: 'C-Store',
        value: '3',
      }, {
        label: 'Personal Care',
        value: '4',
      }],
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
    children: [
      {
        label: 'you can not see',
        value: '1',
      },
    ],
  },
];

class MenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
      filterLabel: '全部状态',
    };
  }
  onChange = (value) => {
    let label = '';
    let cLabel = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
              cLabel = cItem.label;
            }
          });
        }
      }
    });
    setTimeout(() => {
      this.setState({
        show: false,
      });
      if (cLabel !== '') {
        this.setState({
          filterLabel: cLabel,
        });
      }
    });
    console.log(label);
  }

  render() {
    const { initData, show, filterLabel } = this.state;
    const menuEl = (
      <Menu
        className="foo-menu"
        data={initData}
        value={['1', '3']}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div>
        <Filter
          data={[{
            text: filterLabel,
            selected: show,
            onClick: (el) => {
              this.setState({
                show: !el.selected,
              });
              if (!this.state.initData) {
                setTimeout(() => {
                  this.setState({
                    initData: data,
                  });
                }, 500);
              }
            },
            className: 'custom-filter-item',
          }]}
        />
        {show ? initData ? menuEl : loadingEl : null}
      </div>
    );
  }
}

ReactDOM.render(<MenuExample />, mountNode);
````

```css
.foo-menu {
  position: relative;
  z-index: 1000 !important;
}
```
