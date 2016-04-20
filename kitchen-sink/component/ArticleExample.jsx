import React from 'react';
import Page from '../common/Page';
import { Article } from '../../index.js';
// import Article from '../../components/article/index.jsx';

const ArticleExample = React.createClass({
  render() {
    return (
      <Page title="文章" subtitle="&lt;Article title='标题' time='时间' onMoreClick={() => {}}/&gt;">
        <Article
          title="中石化加油卡办卡章程"
          time="2013-11-23 12:20:00"
          img="http://lorempixel.com/290/200/nature/2/"
          onMoreClick={() => {alert(0);}}
        >
          文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
        </Article>
      </Page>
    );
  },
});

export default ArticleExample;
