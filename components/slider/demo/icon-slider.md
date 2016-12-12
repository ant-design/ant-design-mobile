---
order: 2
title: 带 icon 的滑块
---

滑块左右可以设置图标来表达业务含义。



````jsx
import { Slider, WhiteSpace, WingBlank } from 'antd-mobile';
import Icon from '../../icon';

const IconSlider = React.createClass({
  getInitialState() {
    const max = this.props.max;
    const min = this.props.min;
    const mid = ((max - min) / 2).toFixed(5);
    return {
      preIconClass: this.props.value >= mid ? '' : 'anticon-highlight',
      nextIconClass: this.props.value >= mid ? 'anticon-highlight' : '',
      mid,
      sliderValue: this.props.value,
    };
  },

  handleChange(v) {
    this.setState({
      preIconClass: v >= this.state.mid ? '' : 'anticon-highlight',
      nextIconClass: v >= this.state.mid ? 'anticon-highlight' : '',
      sliderValue: v,
    });
  },

  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <div className="iconWrapper">
            <Icon className={this.state.preIconClass} type={this.props.icon[0]} />
            <Slider {...this.props} onChange={this.handleChange} value={this.state.sliderValue} />
            <Icon className={this.state.nextIconClass} type={this.props.icon[1]} />
          </div>
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(
  <IconSlider min={0} max={20} value={0} icon={['frown', 'smile']} />
, mountNode);
````

````css
.iconWrapper {
  position: relative;
  padding: 0 0.62rem;
}

.iconWrapper .anticon {
  position: absolute;
  top: -0.18rem;
  width: 0.44rem;
  height: 0.44rem;
  line-height: 1;
  font-size: 0.44rem;
  color: #000;
}

.iconWrapper .anticon:first-child {
  left: 0;
}

.iconWrapper .anticon:last-child {
  right: 0;
}

.anticon.anticon-highlight {
  color: #666;
}
````
