import React from 'react';
import Page from '../common/Page';
import { Progress, WhiteSpace, Button, Flex, WingBlank} from 'antm';

const ProgressExample = React.createClass({
  getInitialState(){
      return {
          percent: 0 ,
          status: 'invalid',
      };
  },
  increase(){
      let percent = this.state.percent + 10;
      let status = 'active';
      if (percent >= 100) {
          percent = 100;
          status = 'invalid';
      }
      this.setState({ percent ,status});
  },
  decline() {
      let percent = this.state.percent - 10;
      let status = 'active';
      if (percent < 0) {
          percent = 0;
      }
      this.setState({ percent ,status});
  },
  render() {
    return (
      <Page title="Progress" subtitle="&lt;Progress /&gt;">
        <div className="progress-container">
          <Progress percent={this.state.percent} status={this.state.status}/>
          <Progress percent={this.state.percent} position="normal"/>
          <WhiteSpace mpde={20}/>
          <WingBlank mode={20}>
              <Flex>
                  <Flex.Item>
                      <Button onClick={this.increase}> + </Button>
                  </Flex.Item>
                  <Flex.Item>
                      <Button onClick={this.decline}> - </Button>
                  </Flex.Item>
              </Flex>
          </WingBlank>
          <WhiteSpace mpde={20}/>
        </div>
      </Page>
    );
  },
});

export default ProgressExample;
