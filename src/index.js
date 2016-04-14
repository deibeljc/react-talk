import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import NoPageFound from './error/NoPageFound';

render((
   <Router history={browserHistory}>
       <Route path='*' component={NoPageFound} />
   </Router>
), document.getElementsByClassName('todoapp')[0]);