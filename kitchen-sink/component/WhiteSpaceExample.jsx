import React from 'react';
import Page from '../common/Page';
import { WingBlank, WhiteSpace, Button } from 'antm';

const WhiteSpaceExample = React.createClass({
  render() {
    return (
      <Page title="上下留白" subtitle="&lt;WhiteSpace mode={12} /&gt;">
        <WhiteSpace/>
        <WingBlank>
          <Button>上下留白10px</Button>
        </WingBlank>
        <WhiteSpace mode={20}/>
        <WingBlank>
          <Button>上下留白20px</Button>
        </WingBlank>
        <WhiteSpace mode={40}/>
        <WingBlank>
          <Button>上下留白40px</Button>
        </WingBlank>
      </Page>
    );
  },
});

export default WhiteSpaceExample;
