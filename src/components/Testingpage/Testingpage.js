import React from 'react'
import About from '../About/About'
import { Showcase } from '../About/Showcase'
import Bottomnav from '../Bottomnav/Bottomnav'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Projects from '../Projects/Projects'

function Testingpage() {
  return (
    <div>
      <Navbar />

      <div className="container flex items-center justify-between w-11/12 md:w-8/12 lg:w-11/12 mx-auto">
        <div className=" md:w-11/12 my-8">
          <Header />
          <About />
          <Projects />
          <Contact />
        </div>
        <div className="w-1/12">
          <Showcase />
        </div>
      </div>
      <Bottomnav />
    </div>
  )
}

export default Testingpage
