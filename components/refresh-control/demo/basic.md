---
order: 0
title:
  zh-CN: 'ListView 下拉刷新'
  en-US: 'ListView RefreshControl'
---

下拉刷新


````jsx
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { RefreshControl, ListView } from 'antd-mobile';

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

let pageIndex = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.initData = [];
    for (let i = 0; i < 20; i++) {
      this.initData.push(`r${i}`);
    }
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
    };
  }
  componentDidMount() {
    this.manuallyRefresh = true;
    setTimeout(() => this.setState({ refreshing: true }), 10);
  }
  onRefresh = () => {
    console.log('onRefresh');
    if (!this.manuallyRefresh) {
      this.setState({ refreshing: true });
    } else {
      this.manuallyRefresh = false;
    }
    setTimeout(() => {
      this.initData = [`ref${pageIndex++}`, ...this.initData];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        refreshing: false,
      });
    }, 1000);
  };
  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID}
          style={{
            padding: '0.08rem 0.16rem',
            backgroundColor: 'white',
          }}
        >
          <h3 style={{ padding: 2, marginBottom: '0.08rem', borderBottom: '1px solid #F6F6F6' }}>
            {obj.title}
          </h3>
          <div style={{ display: '-webkit-box', display: 'flex' }}>
            <img style={{ height: '1.28rem', marginRight: '0.08rem' }} src={obj.img} alt="icon" />
            <div style={{ display: 'inline-block' }}>
              <div style={{ margin: '0.1rem 0 0.2rem 0' }}>{obj.des}-{rowData}</div>
              <div><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>35</span>元/任务</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={row}
        renderSeparator={separator}
        initialListSize={5}
        pageSize={5}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={20}
        style={{
          height: document.documentElement.clientHeight,
          border: '1px solid #ddd',
          margin: '0.1rem 0',
        }}
        scrollerOptions={{ scrollbars: true }}
        refreshControl={<RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
