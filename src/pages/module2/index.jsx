import React, { Component } from 'react';

import "./index.scss"

 export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '郭亚宁'
    };
  }

  render() {
    return (
      <p>俺是模块B</p>
    )
  }
}


