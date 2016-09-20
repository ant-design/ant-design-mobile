import React from 'react';
import DocumentTitle from 'react-document-title';
import Link from './Link';
import Banner from './Banner';
// import Page1 from './Page1';
import Page2 from './Page2';
// import Page3 from './Page3';

export default class Home extends React.Component {
  componentWillMount() {
    if (location.hash) {
      const pathname = location.hash.replace(/^#/, '').replace('?scrollTo=', '#');
      location.href = pathname;
    }
  }

  // To store style which is only for Home and has conflicts with others.
  getStyle() {
    return `
      #react-content,
      #react-content > div {
        height: 100%;
      }
      .main-wrapper {
        background: transparent;
        width: auto;
        margin: 0;
        border-radius: 0;
        padding: 0;
        overflow: unset;
        display: inline;
        min-height: 600Px;
      }
      #header {
        position: fixed;
        z-index: 999;
        background: rgba(0, 0, 0, 0.25);
        border-bottom: 1Px solid transparent;
        transition: border .5s cubic-bezier(0.455, 0.03, 0.515, 0.955), background .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      #header .ant-select-selection,
      #header .ant-menu {
        background: transparent;
      }
      #header.home-nav-white {
        background: rgba(255, 255, 255, 0.9);
        border-bottom-color: #EBEDEE;
      }
      .home-nav-white #search-box {
        border-left-color: #EBEDEE;
      }
      .home-nav-white #nav a {
        color: #666;
      }
      .nav-phone-icon:before {
        background: #eee;
        box-shadow: 0 7Px 0 0 #eee, 0 14Px 0 0 #eee;
      }
      .home-nav-white .nav-phone-icon:before {
        background: #777;
        box-shadow: 0 7Px 0 0 #777, 0 14Px 0 0 #777;
      }
      #lang,
      #nav a {
        color: #eee;
        transition: color 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      #search-box {
        border-left-color: rgba(235, 237, 238, .5);
        transition: border 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      section {
        height: 100%;
        width: 100%;
        background: #fff;
      }
      #footer {
        background: #000;
      }
      #footer,
      #footer h2 {
        color: #999;
      }
      #footer a {
        color: #eee;
      }
      .down {
        animation: upDownMove 1.2s ease-in-out infinite;
      }
      #nav li.ant-menu-item-selected a {
        color: #fff;
      }
      .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-item:hover {
        border-bottom: 2Px solid #fff;
      }
      .home-nav-white #nav li.ant-menu-item-selected a {
        color: #108ee9;
      }
      .home-nav-white .ant-menu-horizontal > .ant-menu-item-selected, .home-nav-white .ant-menu-horizontal > .ant-menu-item:hover {
        border-bottom: 2Px solid #108ee9;
      }
      .text-wrapper .ant-btn-primary {
        background-color: #108ee9;
        border-color: #108ee9;
      }
    `;
  }

  render() {
    return (
      <DocumentTitle title="Ant Design Mobile | 移动端设计规范">
        <div className="main-wrapper">
          <Link />
          <Banner />
          {/*
          设计基础先隐藏
          <Page1 />
          */}
          <Page2 />
          <style dangerouslySetInnerHTML={{ __html: this.getStyle() }} />
        </div>
      </DocumentTitle>
    );
  }
}
