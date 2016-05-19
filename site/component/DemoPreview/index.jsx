import React from 'react';
import classNames from 'classnames';

export default class DemoPreview extends React.Component {

  render() {
    const { id, meta, preview, style, src, } = this.props;
    const codeBoxClass = classNames({
      'code-box': true,
      'code-box-preview': true
    });
    return (
      <section className={codeBoxClass} id={ `preview-${id}` }>
        <section className="code-box-demo code-box-demo-preview">
        {
          meta.iframe ?
          <iframe src={src} /> :
          preview
        }
        {
          !!style ?
          <style dangerouslySetInnerHTML={{ __html: style }} /> :
          null
        }
        </section>
      </section>
    );
  }
}
