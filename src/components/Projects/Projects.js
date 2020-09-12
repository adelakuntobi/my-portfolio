
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Projectstemplate from './Projectstemplate'


function Projects() {
  const [isSlide, setisSlide] = useState(false)

  const changeView = () => {
    if (isSlide === true) {
      setisSlide(
        Opennav => Opennav = false
      )
    }
    else {
      setisSlide(
        Opennav => Opennav = true
      )
    }
  }
  return (
    <div className="">
      <div className="container w-full mx-0 my-8">
        <div className="flex justify-between items-center">
          <Heading name="Projects" />
          {
            isSlide ? 
            <FontAwesomeIcon icon={['fas', 'list']} size="2x" cursor="pointer" onClick={changeView} className="mx-2" /> :
            <FontAwesomeIcon icon={['fas', 'th']} size="2x" cursor="pointer" onClick={changeView} className="mx-2" />
          }
        </div>
        <div className={isSlide ? "" : "overflow-y-scroll the-hth"}>
          <div className={isSlide ? "grid grid-flow-col grid-rows-2 gap-4 overflow-x-scroll" : "overflow-x-hidden mx-auto lg:gap-10 gap-6 grid-rows-2 grid lg:w-9/12 px-8 lg:px-0 lg:grid-flow-row"}>

            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
            <Projectstemplate isSlide={isSlide} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
