import React from 'react';
import './index.less';
import Banner from './Banner';
import Link from './Link';
import Page1 from './Page1';
import Page2 from './Page2';

import * as utils from '../utils';

class Home extends React.Component {
  componentWillMount() {
    document.body.className += ' app-home';
  }

  componentDidMount() {
    utils.setTitle('Ant Mobile - 移动端H5规范库');
  }

  componentWillUnmount() {
    document.body.className = document.body.className.replace(' app-home', '');
  }

  render() {
    return (
      <div className="index-wrapper">
        <Link />
        <Banner />
        <Page1 />
        <Page2 />
        <iframe
          style={{ width: 320, height: 548, display: 'block', margin: '100px auto' }}
          frameBorder="0"
          src="kitchen-sink.html"
        />
      </div>
    );
  }
}

export default Home;
