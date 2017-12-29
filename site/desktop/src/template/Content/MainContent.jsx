import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import Menu from 'antd/lib/menu';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Article from './Article';
import ComponentDoc from './ComponentDoc';
import * as utils from '../../../../utils';

const SubMenu = Menu.SubMenu;

function getModuleData(props) {
  const pathname = props.location.pathname;
  const moduleName = /^\/?components/.test(pathname) ?
    'components' : pathname.split('/').filter(item => item).slice(0, 2).join('/');
  const moduleData = moduleName === 'components' || moduleName === 'docs/react' ||
    moduleName === 'changelog' || moduleName === 'changelog-cn' ?
    [...props.picked.components, ...props.picked['docs/react'], ...props.picked.changelog] :
    props.picked[moduleName];
  const excludedSuffix = utils.isZhCN(props.location.pathname) ? 'en-US.md' : 'zh-CN.md';
  return moduleData.filter(({ meta }) => !meta.filename.endsWith(excludedSuffix));
}

function getActiveMenuItem(props) {
  const children = props.params.children;
  return (children && children.replace('-cn', '')) ||
    props.location.pathname.replace(/(^\/|-cn$)/g, '');
}

export default class MainContent extends React.Component {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { openKeys: this.getSideBarOpenKeys(props) || [] };
  }

  getSideBarOpenKeys(nextProps) {
    const { pathname } = nextProps.location;
    const prevModule = this.currentModule;
    this.currentModule = pathname.replace(/^\//).split('/')[1] || 'components';
    if (this.currentModule === 'react') {
      this.currentModule = 'components';
    }
    const locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
    if (prevModule !== this.currentModule) {
      const moduleData = getModuleData(nextProps);
      const shouldOpenKeys = Object.keys(utils.getMenuItems(moduleData, locale));
      return shouldOpenKeys;
    }
    return '';
  }

  fileNameToPath(filename) {
    const snippets = filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').split('/');
    return snippets[snippets.length - 1];
  }

  generateMenuItem(isTop, item) {
    const key = this.fileNameToPath(item.filename);
    let text;
    if (isTop) {
      text = item.title || item.chinese || item.english;
    } else {
      text = [
        <span key="english">{item.title || item.english}</span>,
        <span className="chinese" key="chinese">{item.subtitle || item.chinese}</span>,
      ];
    }
    const disabled = item.disabled;
    let url = item.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '').toLowerCase();
    if (item.filename.includes('zh-CN')) {
      url = `${url}-cn`;
    }
    const child = !item.link ? (
      <Link to={/^components/.test(url) ? `${url}/` : url} disabled={disabled}>
        {text}
      </Link>
    ) : (
      <a href={item.link} target="_blank" rel="noopener noreferrer" disabled={disabled}>
        {text}
      </a>
    );

    return (
      <Menu.Item key={key.toLowerCase()} disabled={disabled}>
        {child}
      </Menu.Item>
    );
  }

  isNotTopLevel(level) {
    return level !== 'topLevel';
  }

  generateSubMenuItems(obj) {
    const topLevel = (obj.topLevel || []).map(this.generateMenuItem.bind(this, true));
    const itemGroups = Object.keys(obj).filter(this.isNotTopLevel)
      .sort((a, b) =>
        this.props.themeConfig.categoryOrder.indexOf(a) - this.props.themeConfig.categoryOrder.indexOf(b))
      .map((type, index) => {
        const groupItems = obj[type].sort((a, b) => (
          (a.title || a.english).charCodeAt(0) - (b.title || b.english).charCodeAt(0)
        )).map(this.generateMenuItem.bind(this, false));
        return (
          <Menu.ItemGroup title={type} key={index}>
            {groupItems}
          </Menu.ItemGroup>
        );
      });
    return [...topLevel, ...itemGroups];
  }

  getModuleData() {
    const props = this.props;
    const pathname = props.location.pathname;
    const moduleName = /^components/.test(pathname) ?
      'components' : pathname.split('/').slice(0, 2).join('/');
    const moduleData = moduleName === 'components' || moduleName.includes('changelog') || moduleName === 'docs/react' ?
      [...props.picked.components, ...props.picked['docs/react'], ...props.picked.changelog].filter(item => item.meta.filename.includes(this.context.intl.locale)) :
      props.picked[moduleName];

    return moduleData;
  }

  getMenuItems() {
    const moduleData = this.getModuleData();
    const menuItems = utils.getMenuItems(moduleData);
    const topLevel = this.generateSubMenuItems(menuItems.topLevel);
    const subMenu = Object.keys(menuItems).filter(this.isNotTopLevel)
      .sort((a, b) =>
        this.props.themeConfig.categoryOrder.indexOf(a) - this.props.themeConfig.categoryOrder.indexOf(b))
      .map((category) => {
        const subMenuItems = this.generateSubMenuItems(menuItems[category]);
        return (
          <SubMenu title={<h4>{category}</h4>} key={category}>
            {subMenuItems}
          </SubMenu>
        );
      });
    return [...topLevel, ...subMenu];
  }

  flattenMenu(menu) {
    if (menu.type === Menu.Item) {
      return menu;
    }

    if (Array.isArray(menu)) {
      return menu.reduce((acc, item) => acc.concat(this.flattenMenu(item)), []);
    }

    return this.flattenMenu(menu.props.children);
  }

  getFooterNav(menuItems, activeMenuItem) {
    const menuItemsList = this.flattenMenu(menuItems);
    let activeMenuItemIndex = -1;
    menuItemsList.forEach((menuItem, i) => {
      if (menuItem && menuItem.key === activeMenuItem) {
        activeMenuItemIndex = i;
      }
    });
    const prev = menuItemsList[activeMenuItemIndex - 1];
    const next = menuItemsList[activeMenuItemIndex + 1];
    return { prev, next };
  }

  handleMenuOpenChange = (openKeys) => {
    this.setState({ openKeys });
  }

  componentWillReceiveProps(nextProps) {
    const openKeys = this.getSideBarOpenKeys(nextProps);
    if (openKeys && openKeys !== this.state.openKeys) {
      this.setState({ openKeys });
    }
  }
  render() {
    const { props } = this;
    const activeMenuItem = getActiveMenuItem(props);
    const menuItems = this.getMenuItems();
    const { prev, next } = this.getFooterNav(menuItems, activeMenuItem);

    const localizedPageData = props.localizedPageData;
    const demos = props.demos;
    const DemoEl = demos ?
      (<ComponentDoc {...props} doc={localizedPageData} demos={demos} />) :
      <Article {...props} content={localizedPageData} />;
    return (
      <div className="main-wrapper">
        <Row>
          <Col lg={5} md={6} sm={24} xs={24}>
            <Menu
              inlineIndent="40"
              className="aside-container menu-site"
              mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={[activeMenuItem]}
              onOpenChange={this.handleMenuOpenChange}
            >
              {menuItems}
            </Menu>
          </Col>
          <Col lg={19} md={18} sm={24} xs={24} className="main-container">
            {DemoEl}
          </Col>
        </Row>
        <Row>
          <Col
            lg={{ span: 19, offset: 5 }}
            md={{ span: 18, offset: 6 }}
            sm={24}
            xs={24}
          >
            <section className="prev-next-nav">
              {
                prev ?
                  React.cloneElement(prev.props.children, { className: 'prev-page' }) :
                  null
              }
              {
                next ?
                  React.cloneElement(next.props.children, { className: 'next-page' }) :
                  null
              }
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}
