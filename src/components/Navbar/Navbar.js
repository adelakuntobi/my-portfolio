import React, { useState } from 'react'
import mylogo from '../../images/mylogo.svg'
import { NavLink } from 'react-router-dom'
import '../../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div className="w-full pl-3 md:pl-0 mx-auto h-20">
        <nav style={{ backgroundColor: " #0f0d0df5" }} className={isOpen ?
          "container mx-auto py-8 flex justify-between items-center" :
          "items-center container w-full  mx-auto py-8 flex justify-between fixed z-10 navbarstyle"}>
          <NavLink exact to="/">
            <img className="w-48" src={mylogo} alt="Tobi's logo" />
          </NavLink>

          <div className="flex ">
            <ul className={ isOpen ? "hidden " : "lg:flex gap-4 items-center text-xl mx-6"}>
              <li><NavLink onClick={closeNav} activeClassName="active" exact to="/">Home</NavLink></li>
              <li><NavLink onClick={closeNav} activeClassName="active" to="/about">About</NavLink></li>
              <li><NavLink onClick={closeNav} activeClassName="active" to="/projects">Projects</NavLink></li>
              <li><NavLink onClick={closeNav} activeClassName="active" to="/contact">Contact</NavLink></li>
            </ul>
            <div id="openButton" className={isOpen ? "mobile__hamburger block" : "open mobile__hamburger block"} onClick={closeNav}>

              <div></div>
            </div>
          </div>
        </nav>
      </div>
      <div id="myModal" className={isOpen ? "hidden" : "fixed mobile__nav__bg bg-opacity-50 flex lg:hidden"}>
        <div className="mobile__nav">
          <ul style={{ listStyle: "decimal-leading-zero" }} className="">
            <li><NavLink onClick={closeNav} activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink onClick={closeNav} activeClassName="active" to="/about">About </NavLink></li>
            <li><NavLink onClick={closeNav} activeClassName="active" to={{ pathname: "/projects" }}>Projects </NavLink></li>
            <li><NavLink onClick={closeNav} activeClassName="active" to="/contact">Contact Me </NavLink></li>
          </ul>
          <div className="social grid grid-flow-col gap-8 my-10">
            <a rel="noopener noreferrer" href="https://www.github.com/adelakuntobi" target="_blank">
              <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
            </a>
            <a rel="noopener noreferrer" href="https://www.instagram.com/lakun_b" target="_blank">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
            </a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/adelakuntobi" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
            </a>
            <a rel="noopener noreferrer" href="https://www.twitter.com/larkun_" target="_blank">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
            </a>
            {/* <FontAwesomeIcon icon="check-square" /> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar
