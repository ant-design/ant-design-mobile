import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as utils from '../utils';
import { Modal, Button } from 'antd';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
    };
  }

  handleCodeExapnd = () => {
    this.props.handleCodeExpandList(this.props.index, !this.props.codeExpand);
  }

  handleClick = (e) => {
    const togglePreview = this.props.togglePreview;
    const { index } = this.props;

    if (e.target.className !== 'collapse anticon anticon-circle-o-right' &&
      e.target.className !== 'fullscreen anticon anticon-arrow-salt') {
      togglePreview({
        index,
      });
    }
  }

  viewFullscreen = () => {
    this.setState({
      fullscreen: true,
    });
  }

  handleCancel = () => {
    this.setState({
      fullscreen: false,
    });
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
        <Modal ref="modal"
          visible={this.state.fullscreen}
          title={ meta.title } onCancel={this.handleCancel}
          width = {900}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返 回</Button>,
          ]}
        >
          <div className="highlight" style={{ padding: '16px', backgroundColor: '#F7F7F7', height: '500px', overflowY: 'scroll' }}>
            <pre>
              <code className="javascript" dangerouslySetInnerHTML={{
                __html: highlightedCode,
              }} />
            </pre>
          </div>
        </Modal>

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

          {
          codeExpand &&
          <span className="fullscreen anticon anticon-arrow-salt"
            onClick={this.viewFullscreen}
            unselectable="none" />
          }

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
