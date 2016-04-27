import React from 'react';
import Page from '../common/Page';
import { List, InputItem, Badge, Button } from 'antm';

const BadgeExample = React.createClass({
  getInitialState() {
    return {
      count: 15,
      show: true,
    };
  },
  increase() {
    const count = this.state.count + 1;
    this.setState({ count });
  },
  decline() {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  },
  onClick() {
    this.setState({
      show: !this.state.show,
    });
  },
  render() {
    return (
      <Page title="徽标数" subtitle="&lt;Badge text='2' onClick={() => {}}/&gt;">
        <form>
          <List>
          	<List.Header>列表</List.Header>
          	<List.Body>
          	  <List.Item extra="内容内容">
          	    文本内容<Badge dot style={{marginLeft:8}}/>
          	  </List.Item>
          	  <List.Item extra="内容内容" arrow="horizontal">
          	    文本内容<Badge text={'new'} style={{marginLeft:8}} />
          	  </List.Item>
          	  <List.Item extra="内容内容" arrow="horizontal">
          	    文本内容<Badge text={4} style={{marginLeft:8}} />
          	  </List.Item>
          	  <List.Item extra="内容内容" arrow="horizontal">
          	    文本内容<Badge text={100} style={{marginLeft:8}} />
          	  </List.Item>
          	</List.Body>
          </List>
          <List>
          	<List.Header>带icon</List.Header>
          	<List.Body>
          	  <List.Item extra="内容内容" arrow="horizontal">
          	  	<div style={{padding:'4px 0'}}>
          	    <Badge dot>
    	  		  <a style={{ width:28, height:28, background:'rgba(255, 140, 101, 0.15)', display:'inline-block'}} href="#" className="head-example"></a>
                </Badge><span style={{marginLeft: 8}}>小圆点</span>
                </div>
          	  </List.Item>
          	  <List.Item thumb="https://os.alipayobjects.com/rmsportal/JteFDJaPwHuwXgs.jpg" 
          	  extra={ <Badge text={77} />}
          	  arrow="horizontal">
          	    右侧内容
          	  </List.Item>
          	  <List.Item thumb="https://os.alipayobjects.com/rmsportal/JteFDJaPwHuwXgs.jpg">
          	    内容内容
          	  </List.Item>
          	</List.Body>
          </List>
          <List>
          	<List.Body>
          	  <List.Item extra="内容内容" arrow="horizontal">
          	  	<div style={{padding:'4px 0'}}>
          	      <Badge text={'new'} corner>
    	            <a style={{ width:52, height:52, background:'rgba(255, 140, 101, 0.15)', display:'inline-block'}} href="#" className="head-example"></a>
                  </Badge><span style={{marginLeft: 8}}>有角标</span>
                </div>
          	  </List.Item>
          	  <List.Item extra="内容内容" arrow="horizontal">
          	  	<div style={{padding:'10px 0'}}>
          	      <Badge text={9}>
    	            <a style={{ width:52, height:52, background:'rgba(255, 140, 101, 0.15)', display:'inline-block'}} href="#" className="head-example"></a>
                  </Badge><span style={{marginLeft: 8}}>数字数字</span>
                </div>
          	  </List.Item>
          	  <List.Item extra="内容内容" arrow="horizontal">
          	  	<div style={{padding:'10px 0'}}>
          	      <Badge text={108}>
    	            <a style={{ width:52, height:52, background:'rgba(255, 140, 101, 0.15)', display:'inline-block'}} href="#" className="head-example"></a>
                  </Badge><span style={{marginLeft: 8}}>超出99显示99+</span>
                </div>
          	  </List.Item>
          	</List.Body>
          </List>
          <List>
          	<List.Body>
          	  <List.Item extra="内容内容" arrow="horizontal">
          	  	<div style={{padding:'4px 0'}}>
          	      <Badge text={'限时优惠'} corner size="large">
    	            <a style={{ width:72, height:72, background:'rgba(255, 140, 101, 0.15)', display:'inline-block'}} href="#" className="head-example"></a>
                  </Badge><span style={{marginLeft: 8}}>大角标</span>
                </div>
          	  </List.Item>
          	</List.Body>
          </List>
        </form>
        
        <br/><br/>
      	<a href="#">
      	<Badge text={'可点击'}>
          <a style={{width:56, height:56, background:'rgba(255, 140, 101, 0.15)', display:'inline-block'}} href="#" className="head-example"></a>
        </Badge> 
        </a>

        <Badge text={this.state.count}>
          <a style={{ marginLeft:'60px', width:56, height:56,  background:'rgba(255, 140, 101, 0.15)', display:'inline-block'}} href="#" className="head-example"></a>
        </Badge> 
        <span onClick = { this.increase }>
           增加数字
        </span>|
        <span onClick = { this.decline }>
           减小数字
        </span>

        <Badge style={{marginLeft:'60px'}} text={'new'}>
        </Badge> 

        <Badge dot={this.state.show}>
    	  <a style={{marginLeft:'60px'}} href="#">一个链接</a>
        </Badge>
        <span style={{marginLeft:'6px', }} onClick = { this.onClick }>
           切换红点显隐
        </span>
        
        <Badge dot size="large">
    	  <a style={{ marginLeft:'60px', width:56, height:56, background:'rgba(255, 140, 101, 0.15)', display:'inline-block'}} href="#" className="head-example"></a>
        </Badge>

      </Page>
    );
  },
});

export default BadgeExample;