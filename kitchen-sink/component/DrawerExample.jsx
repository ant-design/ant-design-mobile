/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Drawer, Button, List } from 'antm';

export default React.createClass({
  getInitialState() {
    return {
      docked: false,
      open: false,
      position: 'left',
    };
  },
  onOpenChange() {
    this.setState({ open: !this.state.open });
  },
  onDock() {
    const docked = !this.state.docked;
    this.setState({
      docked,
    });
    if (!docked) {
      this.setState({ open: false });
    }
  },
  render() {
    const sidebar = (<List>
      <List.Body>
        {[1, 2, 3, 4, 5, 6].map((i, index) => {
          if (index === 0) {
            return (<List.Item key={index}
              thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
              line={2}
            ><div className="am-list-title">收银员</div><div className="am-list-brief">仅可进行收款、退款及查账操作</div></List.Item>);
          }
          return (<List.Item key={index}
            line={2}
          ><div className="am-list-title">运营</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></List.Item>);
        })}
      </List.Body>
    </List>);

    const drawerProps = {
      docked: this.state.docked,
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<Page title="抽屉" subtitle="&lt;Drawer /&gt;">
      <div className="drawer-container">
        <Drawer sidebar={sidebar}
          sidebarStyle={{ backgroundColor: '#efefef', maxWidth: 260 }}
          contentStyle={{ padding: 10 }} {...drawerProps}>
          <div style={{ marginTop: 140 }}>
            <p>Drawer component</p>
            <Button type="primary" size="small" inline
              onClick={this.onOpenChange} disabled={this.state.docked}
            >
              {this.state.open ? 'hide menu' : 'show overlay menu'}
            </Button><br />
            <Button type="primary" size="small" inline
              onClick={this.onDock} style={{ marginTop: 10 }}
            >
              {this.state.docked ? 'hide menu' : 'dock docked menu'}
            </Button>
            <p>
              {['left', 'right'/* , 'top', 'bottom' */].map((i, index) => (<span
                key={index} style={{ marginRight: 10 }}
              >
                <input type="radio" value={i} id={`pos-${index}`}
                  checked={this.state.position === i}
                  onChange={(e) => { this.setState({ position: e.target.value }); }}
                /> <label htmlFor={`pos-${index}`}>{i}</label>
              </span>))}
            </p>
            <p style={{ float: 'right' }}>right content</p>
            <p style={{ position: 'absolute', bottom: 10 }}>bottom content</p>
          </div>
        </Drawer>
      </div>
    </Page>);
  },
});
