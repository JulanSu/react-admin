import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import SMenus from '../slider-menus'
import { Route } from 'react-router-dom'
import "./index.scss"
import Home from '../../pages/home'

import a from '../../pages/module1'
import b from '../../pages/module2'

const { Header, Sider, Content } = Layout;

const list = [
  {
    title: '订单管理',
    compoent: a,
    path: '/a',
    icon: 'user'
  },
  {
    title: '人员管理',
    compoent: b,
    path: '/b',
    icon: 'user'
    
  },
  {
    title: '系统设置',
    compoent: b,
    icon: 'user',
    children: [
      {
        title: '系统设置1',
        compoent: b,
        path: '/ccc'
      },
      {
        title: '系统设置2',
        compoent: a,
        path: '/ddd'
      },
      {
        title: '系统设置3',
        compoent: b,
        path: '/eee'
      }
    ]
  },
]

export default class layout extends Component {
  constructor(props) {
    super()
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  /**
   * 组件将要渲染
   * 此时dom未出现，一般用在服务器渲染环节
   */
  componentWillMount() {}

  /**
   * 可以在这里使用refs，获取真实dom元素 
   * 该钩子内也可以发起异步请求，并在异步请求中可以进行setState
   */
  componentDidMount() {}

  /**
   * prop更新之后，dom更新之前
   */
  componentWillReceiveProps(nextProps) {
   
  }

  
  render() {
    let name = '', home = ''
    if(!this.state.collapsed) {
      name = <span>后台系统</span>
    }
    if(this.props.location.pathname === '/') {
      home = <Home />
    }
    const dropItems = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" >
            注销
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" >
            修改密码
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            回到首页
          </a>
        </Menu.Item>
      </Menu>
    );

    const routes = []
    list.map(item => {
      if(item.children) {
        item.children.map(child => {
          routes.push(<Route path={child.path} component={child.compoent} key={child.path} />)
        })
      }else {
        routes.push(<Route path={item.path} component={item.compoent} key={item.path} />)
      }
    })

    console.log(routes)
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >
            <img src={require("../../assets/images/logo.png")} alt=""/>
            {name}
          </div>
          <SMenus list={list} history={this.props.history}/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className="header g-flex">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className="info g-flex">
              <p>芙兰朵露</p>
              <img src={require('../../assets/images/avatar.png')} alt=""/>
              <Dropdown overlay={dropItems} className="drop">
                  <Icon type="down" />
              </Dropdown>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            { home }
            { routes }
          </Content>
        </Layout>
      </Layout>
    );
  }
}