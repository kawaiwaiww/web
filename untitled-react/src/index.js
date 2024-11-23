import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import About from './views/about'
import Myphoto from './views/myphoto'
import Contant from './views/contant'
import Project from './views/project'
import Home from './views/home'
import Aiphoto from './views/aiphoto'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={Myphoto} exact path="/myphoto" />
        <Route component={Contant} exact path="/contant" />
        <Route component={Project} exact path="/project" />
        <Route component={Home} exact path="/" />
        <Route component={Aiphoto} exact path="/aiphoto" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
