import * as React from 'react'
import { unstable_TabBar as TabBar } from '@ant-design/mobile'
import {
  Alipay,
  MoneyCircle,
  Koubei,
  KoubeiFill,
  People,
  PeopleFill,
  Person,
  LogoAlipayFill,
} from '@ant-design/mobile-icons'

const Item = TabBar.Item
import './demo.less'

const handleChange = (index: number) => {
  console.log('handleChange', index)
}

class TabBarDemo extends React.Component<
  any,
  {
    demo1ActiveTab: string
    demo2ActiveTab: string
  }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      demo1ActiveTab: 'friends',
      demo2ActiveTab: 'time',
    }
  }

  renderContent(pageText: string) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <div style={{ paddingTop: '0.6rem', fontSize: '0.26rem' }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="demo-tabbar-wrap">
        {/* <div className="demo-tabbar-1">
          <TabBar onChange={handleChange} className="demo-class">
            <Item
              value="home"
              icon={Alipay}
              activeIcon={LogoAlipayFill}
              active={this.state.demo1ActiveTab === 'home'}
              title="首页"
              onPress={() => {
                this.setState({ demo1ActiveTab: 'home' })
              }}
            />
            <Item
              value="wealth"
              icon={MoneyCircle}
              activeIcon={MoneyCircle}
              active={this.state.demo1ActiveTab === 'wealth'}
              title="财富"
              onPress={() => {
                this.setState({ demo1ActiveTab: 'wealth' })
              }}
            />
            <Item
              value="koubei"
              icon={Koubei}
              activeIcon={KoubeiFill}
              active={this.state.demo1ActiveTab === 'koubei'}
              title="口碑"
              onPress={() => {
                this.setState({ demo1ActiveTab: 'koubei' })
              }}
            />
            <Item
              value="friends"
              icon={People}
              activeIcon={PeopleFill}
              active={this.state.demo1ActiveTab === 'friends'}
              title="朋友"
              onPress={() => {
                this.setState({ demo1ActiveTab: 'friends' })
              }}
            />
            <Item
              value="my"
              icon={Person}
              activeIcon={Person}
              active={this.state.demo1ActiveTab === 'my'}
              title="我的"
              onPress={() => {
                this.setState({ demo1ActiveTab: 'my' })
              }}
            />
          </TabBar>
        </div> */}

        <div className="demo-tabbar-2">
          <TabBar>
            <Item
              activeClassName="active-tab"
              key="time"
              value="time"
              icon={`https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*hcUHRrt9I0UAAAAAAAAAAABkARQnAQ`}
              activeIcon={`https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*S0_KQozuRjMAAAAAAAAAAABkARQnAQ`}
              title="时间"
              active={this.state.demo2ActiveTab === 'time'}
              onPress={() => {
                this.setState({ demo2ActiveTab: 'time' })
              }}
            >
              {this.renderContent('time')}
            </Item>

            <Item
              activeClassName="active-tab"
              key="wealth"
              value="wealth"
              icon={`https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*PNChSazFds8AAAAAAAAAAABkARQnAQ`}
              activeIcon={`https://gw.alipayobjects.com/mdn/rms_f317b9/afts/img/A*tdqUR7NiUhoAAAAAAAAAAABkARQnAQ`}
              title="财富"
              active={this.state.demo2ActiveTab === 'wealth'}
              onPress={() => {
                this.setState({ demo2ActiveTab: 'wealth' })
              }}
            >
              {this.renderContent('wealth')}
            </Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

export default TabBarDemo
