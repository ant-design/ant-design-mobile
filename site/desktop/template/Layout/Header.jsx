import React from 'react';
import { Link } from 'bisheng/router';
import enquire from 'enquire.js';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import Menu from 'antd/lib/menu';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
import Select from 'antd/lib/select';
import { siteTitle } from '../../';

const Option = Select.Option;

export default class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    intl: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.onScroll = debounce(() => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop >= 2 * clientHeight) {
        this.setState({ isFirstFrame: false });
      } else {
        this.setState({ isFirstFrame: true });
      }
    }, 100);

    this.onDocumentClick = (e) => {
      if (document.querySelector('#header .nav').contains(e.target)) {
        return;
      }
      this.setState({
        menuVisible: false,
      });
    };

    this.state = {
      menuVisible: false,
      menuMode: 'horizontal',
      isFirstFrame: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);

    document.addEventListener('click', this.onDocumentClick);
    document.addEventListener('touchstart', this.onDocumentClick);

    enquire.register('only screen and (min-width: 320Px) and (max-width: 767Px)', {
      match: () => {
        this.setState({ menuMode: 'inline' });
      },
      unmatch: () => {
        this.setState({ menuMode: 'horizontal' });
      },
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('click', this.onDocumentClick);
    document.removeEventListener('touchstart', this.onDocumentClick);
  }

  handleMenuIconClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      menuVisible: true,
    });
  }

  handleSearch = (value) => this.context.router.push({ pathname: value });

  handleSelectFilter = (value, option) => (
    option.props['data-label'].indexOf(value.toLowerCase()) > -1
  )

  render() {
    const { location, picked } = this.props;
    const components = picked.components;
    const module = location.pathname.split('/').slice(0, -1).join('/');
    let activeMenuItem = module || 'home';

    if (activeMenuItem === 'components' || activeMenuItem === 'docs/react' || location.pathname === 'changelog') {
      activeMenuItem = 'components';
    }

    const options = components
      .map(({ meta }) => {
        const pathSnippet = meta.filename.split('/')[1];
        const url = `/components/${pathSnippet}`;
        return (
          <Option value={url} key={url} data-label={`${(meta.title || meta.english).toLowerCase()} ${meta.subtitle || meta.chinese}`}>
            <strong>{meta.title || meta.english}</strong>
            <span className="ant-component-decs">{meta.subtitle || meta.chinese}</span>
          </Option>
        );
      });

    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !this.state.isFirstFrame,
    });

    return (
      <header id="header" className={headerClassName}>
        <Row>
          <Col lg={5} md={6} sm={7} xs={24}>
            <Icon
              className="nav-phone-icon"
              onClick={this.handleMenuIconClick}
              type="menu"
            />
            <Link to="/" id="logo">
              <img alt="logo" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png" />
              <span>{siteTitle}</span>
            </Link>
          </Col>
          <Col className={`nav ${this.state.menuVisible ? 'nav-show' : ''}`}
            lg={19} md={18} sm={17} xs={0} style={{ display: 'block' }}
          >
            <div id="search-box">
              <Select combobox
                dropdownClassName="component-select"
                placeholder="搜索组件..."
                value={undefined}
                optionFilterProp="data-label"
                optionLabelProp="data-label"
                filterOption={this.handleSelectFilter}
                onSelect={this.handleSearch}
              >
                {options}
              </Select>
            </div>

            <Menu mode={this.state.menuMode} selectedKeys={[activeMenuItem]} id="nav">
              <Menu.Item key="home">
                <Link to="/">
                  首页
                </Link>
              </Menu.Item>
              <Menu.Item key="components">
                <Link to="/docs/react/introduce">
                  组件
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}
