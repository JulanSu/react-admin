import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


import "./index.scss"
class LoginForm extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
        name: '',
        password: ''
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
  componentDidMount() {
  }



    /**
     * prop更新之后，dom更新之前
     */
  componentWillReceiveProps(nextProps) {
   
  }

  handleSubmit = e => {
    const { history } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        history.push('/home')
        console.log(this.props)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={this.props.class}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入账号!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入账号"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住账号</Checkbox>)}
          <Button type="primary" htmlType="button" className="login-form-button" onClick={this.handleSubmit}>
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}


export default Form.create({ name: 'normal_login' })(LoginForm);

