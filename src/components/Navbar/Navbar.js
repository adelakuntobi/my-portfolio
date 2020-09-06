import React from 'react'
import mylogo from '../../images/mylogo.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="container mx-auto py-8 flex justify-between">
        <img className="w-48" src={mylogo} alt="Tobi's logo" />

        <ul className="flex gap-4 items-center text-xl">
          <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar
