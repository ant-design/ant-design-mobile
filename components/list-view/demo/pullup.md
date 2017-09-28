---
order: 4
title:
  zh-CN: '上拉'
  en-US: 'pull up'
---

pull up feature


````jsx
/* eslint no-dupe-keys: 0 */
import { ListView, Button } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
let index = data.length - 1;

const NUM_ROWS = 6;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push((pIndex * NUM_ROWS) + i);
  }
  return dataArr;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      useBodyScroll: true,
      pullUpRefreshing: false,
    };
  }

  componentDidMount() {
    // simulate initial Ajax
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
      });
    }, 600);
  }

  render() {
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.title}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="icon" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
            </div>
          </div>
        </div>
      );
    };

    const myRenderer = location.href.toLocaleLowerCase().indexOf('cn') > -1 ?
      {} : { pullUpRenderer: st => <div>{st}</div> };

    return (<div>
      <Button
        style={{ marginBottom: 15 }}
        onClick={() => this.setState({ useBodyScroll: !this.state.useBodyScroll })}
      >
        useBodyScroll: {this.state.useBodyScroll ? 'true' : 'false'}
      </Button>
      <ListView
        key={this.state.useBodyScroll ? 1 : 0}
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderRow={row}
        useBodyScroll={this.state.useBodyScroll}
        style={!this.state.useBodyScroll ? { height: 200, border: '1px solid gray' } : {}}
        pullUpEnabled
        pullUpRefreshing={this.state.pullUpRefreshing}
        pullUpOnRefresh={() => {
          this.setState({ pullUpRefreshing: true });
          setTimeout(() => {
            this.setState({ pullUpRefreshing: false });
          }, 1000);
        }}
        {...myRenderer}
      />
    </div>);
  }
}

ReactDOM.render(<Demo />, mountNode);
````
