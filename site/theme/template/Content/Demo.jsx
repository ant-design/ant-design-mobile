import React from 'react';
import classNames from 'classnames';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';

export default class Demo extends React.Component {
  static contextTypes = {
    intl: React.PropTypes.object,
  }

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
    const { index, currentIndex } = this.props;

    if (index !== currentIndex && e.target.className !== 'collapse anticon anticon-circle-o-right' &&
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
    const props = this.props;
    const {
      meta,
      content,
      highlightedCode,
      highlightedStyle,
      className,
    } = props;

    const codeExpand = this.props.codeExpand;
    const codeBoxClass = classNames({
      'code-box': true,
      [className]: className,
      expand: codeExpand,
    });

    const locale = this.context.intl.locale;
    const localizedTitle = meta.title[locale] || meta.title;
    const localizeIntro = content[locale] || content;
    const introChildren = props.utils
      .toReactComponent(['div'].concat(localizeIntro));

    return (
      <section className={codeBoxClass} id={meta.id} onClick={this.handleClick}>
        <Modal
          ref="modal"
          visible={this.state.fullscreen}
          title={meta.title} onCancel={this.handleCancel}
          width={900}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返 回</Button>,
          ]}
        >
          <div
            className="highlight"
            style={{ padding: '16Px', backgroundColor: '#F7F7F7', height: '500Px', overflowY: 'scroll' }}
          >
            {props.utils.toReactComponent(highlightedCode)}
          </div>
        </Modal>

        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <a href={`#${meta.id}`}>
              {localizedTitle}
            </a>
          </div>
          {introChildren}

          <span
            className="collapse anticon anticon-circle-o-right"
            onClick={this.handleCodeExapnd}
            unselectable="none"
          />

          {
            codeExpand &&
            (<span
              className="fullscreen anticon anticon-arrow-salt"
              onClick={this.viewFullscreen}
              unselectable="none"
            />)
          }
        </section>

        <section
          className={`highlight-wrapper ${codeExpand ? 'highlight-wrapper-expand' : ''}`}
          key="code"
        >
          <div className="highlight">
            {props.utils.toReactComponent(highlightedCode)}
          </div>
          {
            highlightedStyle ?
              <div key="style" className="highlight">
                <pre>
                  <code
                    className="css"
                    dangerouslySetInnerHTML={{
                      __html: highlightedStyle,
                    }}
                  />
                </pre>
              </div> :
              null
          }
        </section>
      </section>
    );
  }
}
