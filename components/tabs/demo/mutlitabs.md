---
order: 9
title:
  zh-CN: '超出界面宽度，多于5个标签'
  en-US: 'overflow, more than 5 tabs'
---

There are at most 5 tab panes in the visible area, click on the both sides of `Tabs` to scroll.


````jsx
import { Tabs, WhiteSpace, ListView } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

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

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }


  renderTabBar(props) {
    return (<Sticky style={{ zIndex: 1 }}>
      <Tabs.DefaultTabBar {...props} />
    </Sticky>);
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`}
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
        <div key={rowID} className="row">
          <div className="row-title">{obj.title}</div>
          <div style={{ display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="icon" />
            <div className="row-text">
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
            </div>
          </div>
        </div>
      );
    };

    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];

    return (
      <div>
        <WhiteSpace />
        <StickyContainer>
          <Tabs tabs={tabs}
            renderTabBar={this.renderTabBar}
          >
            <ListView
              ref={el => this.lv = el}
              dataSource={this.state.dataSource}
              renderHeader={() => <span>header</span>}
              renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
              </div>)}
              renderRow={row}
              renderSeparator={separator}
              className="am-list"
              pageSize={4}
              useBodyScroll
              onScroll={() => { console.log('scroll'); }}
              scrollRenderAheadDistance={100}
              scrollEventThrottle={32}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={10}
            />
          </Tabs>
        </StickyContainer>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````
````css
.row {
  padding: 0 15px;
  background-color: white;
}
.row-title {
  height: 50px;
  line-height: 50px;
  color: #888;
  font-size: 18px;
  border-bottom: 1px solid #F6F6F6;
}
.row-text {
  display: inline-block;
  font-size: 16px;
  line-height: 1;
}
````
