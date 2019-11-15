import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import ReactGA from 'react-ga';

import Navbar from './Components/Navbar.js'
import Home from './pages/Home/home.js'
import Work from './pages/Work/work.js'
import About from './pages/About/about.js'
import Footer from './Components/Footer.js'
import Instagram from './pages/Home/pages/insta.js'

ReactGA.initialize('UA-102330182-1');
ReactGA.pageview('/');

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
                      <Route path="/resume" render={Work} />
                      <Route path="/about" render={About} />
                      <Route path="/insta" render={Instagram} />
                  </Switch>
              </CSSTransition>
          </TransitionGroup>
          <Footer />
      </div>
    );
}

export default withRouter(App);
