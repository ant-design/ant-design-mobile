/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Drawer, Button } from 'antm';

export default React.createClass({
  getInitialState() {
    return {
      docked: false,
      open: false,
      position: 'left',
    };
  },
  onOpenChange(open) {
    console.log('onOpenChange', open);
    this.setState({ open });
  },
  onDock() {
    const docked = !this.state.docked;
    this.setState({
      docked,
    });
    if (!docked) {
      this.onOpenChange(false);
    }
  },
  render() {
    const sidebar = (<div>
      <h3>
        sideMenu
      </h3>
      <p>this is content!</p>
    </div>);

    const drawerProps = {
      docked: this.state.docked,
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<Page title="抽屉" subtitle="&lt;Drawer /&gt;">
      <div className="drawer-container">
        <Drawer sidebar={sidebar}
          sidebarStyle={{ padding: 10, backgroundColor: '#e4f6fe' }}
          contentStyle={{ padding: 10 }} {...drawerProps}>
          <p>React component</p>
          <Button type="primary" inline onClick={this.onDock}>
            {this.state.docked ? 'hide menu' : 'show menu'}
          </Button>
          <p>
            {['left', 'right', 'top', 'bottom'].map((i, index) => (<span
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
        </Drawer>
      </div>
    </Page>);
  },
});
