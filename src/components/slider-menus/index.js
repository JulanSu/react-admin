
import React from 'react';
import {  Menu, Icon  } from 'antd';
import { withRouter } from 'react-router-dom'

import "./index.scss"
const {SubMenu} = Menu

export default class Menus extends React.Component {
    constructor(props) {
        super(props)
    }
    changeTab(item) {
        console.log(item)
        this.props.history.push(item.path)
    }
    render() {
        console.log(this.props)
        const SubMenus = []
        this.props.list.map(item => {
            console.log(item)
            if(!item.children) {
                SubMenus.push(
                    <Menu.Item key={item.title} onClick={() => this.changeTab(item)}>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </Menu.Item>
                )
            }else {
                let sub = item.children.map(child => {
                    return <Menu.Item key={child.title} onClick={() => this.changeTab(child)}>{child.title}</Menu.Item>
                })
                SubMenus.push(
                    <SubMenu key="sub3" title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }>
                        {sub}
                    </SubMenu>
                )
            }
        })
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {SubMenus}
            </Menu>
        )
    }

}