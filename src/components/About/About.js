import React from 'react'
import myImage from '../../images/theImage.svg'

function About() {
  return (
    <div className="about">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center w-full lg:w-11/12">
        <div className="">
          <div className="flex justify-start items-center">
            <h1 className="primaryColor text-5xl">About Me</h1><hr className="w-2/12 mx-2" />
          </div>
          <p className="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. vero eos et accusamet justo duo dolores et ea rebum. Stet clita kasd gubergren, noseatakimatasanctus est Lorem</p>
          <p className="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyeirmod temporinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. vero eos et accusamet justo</p>
          <h2 className="text-3xl my-5">My Skillsets</h2>
          <div className="flex justify-between skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>C++</li>
              <li>JQuery</li>
              <li>Git & GitHub</li>
            </ul>
            <ul>
              <li>Tailwind & Bootstrap</li>
              <li>Adobe Lightroom</li>
              <li>PHP</li>
            </ul>
          </div>
          <button className="border-transparent hover:border my-6 py-2 greenBtn w-full md:w-5/12">Download CV</button>
        </div>
      <img className="w-full md:10/12 lg:w-1/2" src={myImage} alt="Client" />
      </div>
    </div>
  )
}

export default About
