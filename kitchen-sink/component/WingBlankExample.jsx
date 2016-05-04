import React from 'react';
import Page from '../common/Page';
import { WingBlank, WhiteSpace, Button } from 'antm';

const WingBlankExample = React.createClass({
  render() {
    return (
      <Page title="两翼留白" subtitle="&lt;WingBlank mode={12} /&gt;">
        <WhiteSpace/>
        <WingBlank>
          <Button>两翼留白8px</Button>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank mode={20}>
          <Button>两翼留白20px</Button>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank mode={32}>
          <Button>两翼留白32px</Button>
        </WingBlank>
      </Page>
    );
  },
});

export default WingBlankExample;
