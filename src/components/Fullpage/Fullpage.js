import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Bottomnav from '../Bottomnav/Bottomnav';
import { Showcase } from '../About/Showcase';

function Fullpage() {
  return (
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Redirect to="/" />
        </Switch>
      <Bottomnav />
      <Showcase />
    </div>
  )
}

export default Fullpage
