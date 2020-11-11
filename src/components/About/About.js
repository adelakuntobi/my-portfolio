import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import myImage from '../../images/theImage.svg'
import Heading from '../Heading/Heading'

function About() {
  return (
    <div className="about">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center w-full lg:w-11/12">
        <div className="">
          <Heading name="About me" />
          <p className="my-2">I am a Adelakun Oluwatobiloba, pretty good with developing, building, and designing web pages, applications across various platforms. </p>
          <p className="my-2">In my many years of development, I have acquired skill sets in various project</p>
        
          <h2 className="text-3xl my-5">My Skillsets</h2>
          <div className="flex justify-between skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>C++</li>
            </ul>
            <ul>
              <li>PHP</li>
              <li>GitHub</li>
              <li>Sass</li>
            </ul>
            <ul>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>Adobe Lightroom</li>
            </ul>
          </div>
          <button className="border-transparent hover:border my-6 py-2 greenBtn w-full md:w-5/12">
            <a target="_blank" rel="noopener noreferrer"
             href="https://drive.google.com/file/d/1SnPDJD8JqVsjwt6AZQwTxKXWSZUMfEdV/view?usp=sharing">
          <FontAwesomeIcon icon={['fas', 'download']} className="mx-2" />
            Download CV
            </a>
            </button>
        </div>
      <img className="w-full md:10/12 lg:w-1/2" src={myImage} alt="Client" />
      </div>
    </div>
  )
}

export default About
