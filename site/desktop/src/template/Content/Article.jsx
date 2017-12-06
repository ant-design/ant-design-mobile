import React, { Children, cloneElement } from 'react';
import DocumentTitle from 'react-document-title';
import { getChildren } from 'jsonml.js/lib/utils';
import Timeline from 'antd/lib/timeline';
import Tabs from 'antd/lib/tabs';

import * as utils from '../../../../utils';

const { TabPane } = Tabs;

export default class Article extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();

    setTimeout(() => {
      const linkTo = this.props.location.hash.replace('#', '');
      if (linkTo) {
        document.getElementById(linkTo).scrollIntoView();
      }
    }, 500);
  }
  componentDidUpdate() {
    const links = document.querySelectorAll('.outside-link.internal');
    if (links.length === 0) {
      return;
    }
    const checkImgUrl = 'http://alipay-rmsdeploy-dev-image.oss-cn-hangzhou-zmf.aliyuncs.com/rmsportal/JdVaTbZzPxEldUi.png';
    utils.ping(checkImgUrl, (status) => {
      if (status === 'responded') {
        links.forEach(link => (link.style.display = 'block'));
      }
    });
  }
  tryToRenderIntroducePageTab = (article) => {
    if (window.location.href.indexOf('introduce') === -1) {
      return article;
    }
    const allChildren = [].slice.call(article.props.children);

    const webIndex = allChildren.findIndex(item => item.type === 'h4' && item.props.id.includes('Web'));
    const RnIndex = allChildren.findIndex(item => item.type === 'h4' && item.props.id.includes('React-Native'));
    if (webIndex === -1 || RnIndex === -1) {
      return article;
    }
    const endIndex = allChildren.findIndex((item, index) => item.type === 'h2' && index > RnIndex);

    const newChildren = allChildren.slice(0, webIndex);
    const webContent = allChildren.slice(webIndex, RnIndex);
    webContent.splice(0, 1);
    const rnContent = allChildren.slice(RnIndex, endIndex);
    rnContent.splice(0, 1);
    const otherContent = allChildren.slice(endIndex, allChildren.length);
    const IntroTabs = (
      <Tabs defaultActiveKey="1" key="tabs">
        <TabPane tab={allChildren[webIndex].props.id.replace(/-/g, ' ')} key="1" className="markdown">{webContent}</TabPane>
        <TabPane tab={allChildren[RnIndex].props.id.replace(/-/g, ' ')} key="2" className="markdown">{rnContent}</TabPane>
      </Tabs>
    );
    newChildren.push(IntroTabs);
    newChildren.push(otherContent);
    article = React.cloneElement(article, {}, newChildren);
    return article;
  }
  getArticle = (article) => {
    // Todo: right now just hack it, wait move to bisheng-plugin-antd
    article = this.tryToRenderIntroducePageTab(article);
    const { content } = this.props;
    const { meta } = content;
    if (!meta.timeline) {
      return article;
    }
    const timelineItems = [];
    let temp = [];
    Children.forEach(article.props.children, (child, i) => {
      if (child.type === 'h2' && temp.length > 0) {
        timelineItems.push(<Timeline.Item key={i}>{temp}</Timeline.Item>);
        temp = [];
      }
      temp.push(child);
    });
    return cloneElement(article, {
      children: <Timeline>{timelineItems}</Timeline>,
    });
  }
  render() {
    const { props } = this;
    const { content } = props;

    const { meta, description } = content;
    const {
      title, subtitle, chinese, english,
    } = meta;
    return (
      <DocumentTitle title={`${title || chinese || english} - Ant Design`}>
        <article className="markdown">
          <h1>
            {title || english}
            {
              (!subtitle && !chinese) ? null : <span className="subtitle">{subtitle || chinese}</span>
            }
          </h1>
          {
            !description ? null :
              props.utils.toReactComponent(['section', { className: 'markdown' }].concat(getChildren(description)))
          }
          {
            (!content.toc || content.toc.length <= 1 || meta.toc === false) ?
              null :
              <section className="toc">{props.utils.toReactComponent(content.toc)}</section>
          }
          {
            this.getArticle(props.utils.toReactComponent(['section', { className: 'markdown' }].concat(getChildren(content.content))))
          }
        </article>
      </DocumentTitle>
    );
  }
}
