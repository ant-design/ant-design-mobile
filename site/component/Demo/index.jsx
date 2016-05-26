import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as utils from '../utils';

export default class Demo extends React.Component {
  handleCodeExapnd = () => {
    this.props.handleCodeExpandList(this.props.index, !this.props.codeExpand);
  }

  handleClick = (e) => {
    const togglePreview = this.props.togglePreview;
    const { index } = this.props;
    if (e.target.className !== 'collapse anticon anticon-circle-o-right') {
      togglePreview({
        index,
      });
    }
  }

  render() {
    const { id, className, meta, intro, style,
            highlightedCode, highlightedStyle, pathname } = this.props;
    const codeExpand = this.props.codeExpand;
    const codeBoxClass = classNames({
      'code-box': true,
      [className]: className,
      expand: codeExpand,
    });

    const introChildren = utils.jsonmlToComponent(pathname, ['div'].concat(intro));
    return (
      <section className={codeBoxClass} id={id} onClick={ this.handleClick }>
        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <Link to={{ pathname, query: { scrollTo: id } }}>
              { meta.title }
            </Link>
          </div>
          { introChildren }

          <span className="collapse anticon anticon-circle-o-right"
            onClick={this.handleCodeExapnd}
            unselectable="none" />
        </section>
        <section className={`highlight-wrapper ${codeExpand ? 'highlight-wrapper-expand' : ''}`}
          key="code">
          <div className="highlight">
            <pre>
              <code className="javascript" dangerouslySetInnerHTML={{
                __html: highlightedCode,
              }} />
            </pre>
          </div>
          {
            style ?
              <div key="style" className="highlight">
                <pre>
                  <code className="css" dangerouslySetInnerHTML={{
                    __html: highlightedStyle,
                  }} />
                </pre>
              </div> :
              null
          }
        </section>
      </section>
    );
  }
}
