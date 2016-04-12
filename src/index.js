import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import BasicComponent from './basic/BasicComponent';
import NoPageFound from './error/NoPageFound';

render((
   <Router history={browserHistory}>
       <Route path='/basic' component={BasicComponent} />
       <Route path='*' component={NoPageFound} />
   </Router>
), document.getElementById('root'));