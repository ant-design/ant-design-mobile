import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Icon } from 'antd';

const Footer = () => (
  <footer id="footer">
    <ul>
      <li>
        <h2><Icon type="github" /> GitHub</h2>
        <div>
          <a target="_blank " rel="noopener noreferrer" href="http://github.com/ant-design">antd</a>
        </div>
        <div>
          <a target="_blank " rel="noopener noreferrer" href="http://github.com/ant-design/ant-design-mobile">antd-mobile</a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/react-component">react-component</a>
        </div>
      </li>
      <li>
        <h2><Icon type="link" /> <FormattedMessage id="app.footer.links" /></h2>
        <div>
          <a href="http://motion.ant.design">Ant Motion</a>
          <span> - </span>
          <FormattedMessage id="app.footer.motion" />
        </div>
        <div>
          <a href="http://ux.ant.design">Ant UX</a>
          <span> - </span>
          <FormattedMessage id="app.footer.antux" />
        </div>
      </li>
      <li>
        <h2><Icon type="customer-service" /> <FormattedMessage id="app.footer.community" /></h2>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
            <FormattedMessage id="app.footer.discuss" />
          </a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="http://github.com/ant-design/ant-design-mobile/issues">
            <FormattedMessage id="app.footer.bug-report" />
          </a>
        </div>
      </li>
      <li>
        <h2>Copyright © {new Date().getFullYear()}</h2>
        <div><FormattedMessage id="app.footer.author" /></div>
        <div>Built with <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
      </li>
    </ul>
  </footer>
);

export default injectIntl(Footer);
