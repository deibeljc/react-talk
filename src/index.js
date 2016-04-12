import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import BasicComponent from './basic/basic-component';
import App from './todo/App';
import NoPageFound from './error/NoPageFound';

render((
   <Router history={browserHistory}>
       <Route path='/basic' component={BasicComponent} />
       <Route path='/todo' component={App} />
       <Route path='*' component={NoPageFound} />
   </Router>
), document.getElementsByClassName('todoapp')[0]);