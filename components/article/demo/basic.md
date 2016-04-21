---
order: 0
title: 基本
---



````jsx
import { Article } from 'antm';


let ArticleExample = React.createClass({
  render() {
    return (
      <div>
        <Article
          title="中石化加油卡办卡章程"
          time="2013-11-23 12:20:00"
          img="http://lorempixel.com/290/200/nature/2/"
          onMoreClick={() => {alert(0);}}
        >
          文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
        </Article>
      </div>
    );
  }
});

ReactDOM.render(<ArticleExample />, mountNode);
````
