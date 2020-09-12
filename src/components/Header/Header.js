import React from 'react'
import { Link } from 'react-router-dom'
// import myImage1 from '../../images/Layer 1.png'
import myImage from '../../images/theImage.svg'

function Header() {
  return (
    <div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <img className="w-full lg:w-6/12" src={myImage} alt="Client" />
        <div className="container mx-auto lg:mx-0">
          <p className="primaryColor mt-12 lg:mt-0">Hi, Meet</p>
          <h1 className="py-3 lg:py-5 text-4xl lg:text-6xl font-bold leading-tight">
            Oluwatobiloba <br />
            Adelakun
          </h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumyeirmod temporinvidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. vero eos et accusamet
          justo duo dolores et ea rebum. Stet clita kasd gubergren,
            noseatakimatasanctus est Lorem</p>
          <Link to="/contact">
            <button className="border hover:border-transparent px-12 my-6 py-2 whiteBtn">Get In Touch</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
