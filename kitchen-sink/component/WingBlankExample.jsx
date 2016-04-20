import React from 'react';
import Page from '../common/Page';
import { WingBlank, WhiteSpace, Button } from '../../index.js';

const WingBlankExample = React.createClass({
  render() {
    return (
      <Page title="两翼留白" subtitle="&lt;WingBlank mode={12} /&gt;">
        <WhiteSpace/>
        <WingBlank>
          <Button>两翼留白10px</Button>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank mode={20}>
          <Button>两翼留白20px</Button>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank mode={30}>
          <Button>两翼留白30px</Button>
        </WingBlank>
      </Page>
    );
  },
});

export default WingBlankExample;
