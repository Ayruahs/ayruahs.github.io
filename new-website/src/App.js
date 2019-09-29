import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import Navbar from './Components/Navbar.js'
import Home from './pages/Home/home.js'
import Work from './pages/Work/work.js'
import About from './pages/About/about.js'

function App({location}) {
    return (
      <div>
          <Navbar />
          <TransitionGroup>
              <CSSTransition
              key={location.key} 
              classNames={"SlideIn"}
              timeout={800}
              >
                  <Switch location={location} >
                      <Route exact path="/" render={Home} />
                      <Route path="/work" render={Work} />
                      <Route path="/contact" render={About} />
                  </Switch>
              </CSSTransition>
          </TransitionGroup>
      </div>
    );
}

export default withRouter(App);
