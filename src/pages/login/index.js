import React, { Component } from 'react';
import LoginForm from '../../components/login-form'

import "./index.scss"

 export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '郭亚宁'
    };
  }

  /**
   * 组件将要渲染
   * 此时dom未出现，一般用在服务器渲染环节
   */
  componentWillMount() {
   
  }

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

  handleSubmit = e => {
    
  }

  render() {
    return (
      <div className="login">
        <div className='content g-flex animated fadeInDown'>
          <div className="left g-flex">
            <img src={require('../../assets/images/logo.png')} alt=""/>
            <p>小善通用管理后台 REACT-1.0.0</p>
          </div>
          <div className="right g-flex g-flex-c">
            <p className="title">
              登录后台系统
            </p>
            <LoginForm class="form" history={this.props.history}/>
          </div>
        </div>
      </div>
    )
  }
}


