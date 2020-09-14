import React from 'react'
import { NavLink } from 'react-router-dom'

function Bottomnav() {
  return (
    <div className="container my-0 lg:my-6 mx-auto">
      <ul className="flex lg:gap-6 justify-evenly lg:justify-start lg:mx-10 items-baseline font-bold text-xl">
        <li><NavLink activeClassName="bottomactive" exact to="/">01</NavLink></li>
        <li><NavLink activeClassName="bottomactive" to="/about">02</NavLink></li>
        <li><NavLink activeClassName="bottomactive" to="/projects">03</NavLink></li>
        <li><NavLink activeClassName="bottomactive" to="/contact">04</NavLink></li>
      </ul>
    </div>
  )
}

export default Bottomnav
