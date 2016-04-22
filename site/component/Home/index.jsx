import React from 'react';
import './index.less';

import * as utils from '../utils';

class Home extends React.Component {
  componentWillMount() {
    document.body.className += ` app-home`;
  }

  componentDidMount() {
    utils.setTitle('Ant Design - 一个 UI 设计语言');
  }

  componentWillUnmount() {
    document.body.className = document.body.className.replace(' app-home', '');
  }

  render() {
    return (
      <div className="main-wrapper">
        <iframe
          style={{width: 320, height: 548, display: 'block', margin: '100px auto'}}
          frameBorder="0"
          src="kitchen-sink.html"
        />
      </div>
    );
  }
}

export default Home;
