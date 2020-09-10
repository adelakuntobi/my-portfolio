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
      <div className="w-11/12 md:w-8/12 lg:w-full mx-auto">

        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Redirect to="/" />
        </Switch>
      </div>
      <Bottomnav />
      <Showcase />
    </div>
  )
}

export default Fullpage
