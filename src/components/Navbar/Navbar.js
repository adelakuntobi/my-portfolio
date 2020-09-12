import React, { useState } from 'react'
import mylogo from '../../images/mylogo.svg'
import { Link, NavLink } from 'react-router-dom'
import '../../css/Navbar.css'

function Navbar() {

  const [isOpen, setisOpen] = useState(true)
  const closeNav = () => {

    if (isOpen === true) {
      setisOpen(
        Opennav => Opennav = false
      )
    }
    else {
      setisOpen(
        Opennav => Opennav = true
      )
    }
  }
  return (
    <div>
      <nav className="container w-11/12 mx-auto py-8 flex justify-between">
        <Link to="/">
          <img className="w-48" src={mylogo} alt="Tobi's logo" />
        </Link>

        {/* <ul className="hidden lg:flex gap-4 items-center text-xl">
          <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
        </ul> */}
        <div id="openButton" className={isOpen ? "mobile__hamburger block" : "open mobile__hamburger block"} onClick={closeNav}>

          <div></div>
        </div>
      </nav>
      <div id="myModal" className={isOpen ? "hidden" : "mobile__nav__bg bg-opacity-50 flex"}>
        <div className="mobile__nav">
          <ul style={{ listStyle: "decimal-leading-zero" }} className="">
            <li><NavLink onClick={closeNav} activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink onClick={closeNav} activeClassName="active" to="/about">About </NavLink></li>
            <li><NavLink onClick={closeNav} activeClassName="active" to={{ pathname: "/projects" }}>Projects </NavLink></li>
            <li><NavLink onClick={closeNav} activeClassName="active" to="/contact">Contact Me </NavLink></li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Navbar
