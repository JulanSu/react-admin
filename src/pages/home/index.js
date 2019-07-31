import React, { Component } from 'react';
import "./index.scss"

 export default class Home extends Component {
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
      <div className="home">
        我是进来之后的首页
      </div>
    )
  }
}


