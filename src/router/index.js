import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import * as t from 'react-router-dom'

import login from '../pages/login/index'
import home from '../pages/home/index'
import layout from '../components/layout'
import a from '../pages/module1'
import b from '../pages/module1'
// <Redirect to="/login"/>

// <Route path="/a" component={a} />
//       <Route path="/b" component={a} />
export default () => (
  <Router>
    <Route path="/login" component={login} exact/>
    <Route path="/" component={layout}>
    </Route>
  </Router>
)
