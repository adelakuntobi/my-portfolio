
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
          <div className={isSlide ? "grid grid-flow-col grid-rows-2 gap-4 overflow-x-scroll" : "overflow-x-hidden mx-auto lg:gap-10 gap-6 grid-rows-2 grid lg:w-9/12 px-2 md:px-8 lg:px-0 lg:grid-flow-row"}>

            <Projectstemplate
              isSlide={isSlide}
              gitLink="adelakuntobi/weather-forecast"
              liveLink="tobi11.web.app"
              title="WTee"
              description="A weather forecast app which predicts weather conditions of a certain location "
            />
            <Projectstemplate
              isSlide={isSlide}
              gitLink="adelakuntobi/unique-portfolio"
              liveLink="uniqueideas.me"
              title="Unique Ideas"
              description="This is a portfolio built for Unique Ideas"
            />
            <Projectstemplate
              isSlide={isSlide}
              gitLink="https://github.com/microapidev/dashboard"
              liveLink="microapi.dev"
              title="MircoAPI"
              description="MicroAPI is an API integratio website"
            />
            <Projectstemplate
              isSlide={isSlide}
              gitLink="github.com/adelakuntobi/Rock-Paper-Scissors"
              liveLink="adelakuntobi.github.io/Rock-Paper-Scissors/"
              title="Rock Paper Scissors"
              description="A simple Rock Paper Scissors game created with Vanilla JavaScript"
            />
            <Projectstemplate
              isSlide={isSlide}
              gitLink="github.com/adelakuntobi/To-Do-With-FireBase"
              liveLink="adelakuntobi.github.io/To-Do-With-FireBase/"
              title="To Do List"
              description="A Firebase App that saves to do tasks to a database"
            />
            <Projectstemplate
              isSlide={isSlide}
              gitLink="github.com/adelakuntobi/Shorten-url"
              liveLink="rel.ink/gpwlzw"
              title="Shorten URL"
              description="A website that shorten URLs"
            />
            <Projectstemplate
              isSlide={isSlide}
              gitLink="github.com/adelakuntobi/Store-Assisto"
              liveLink="store-assisto.herokuapp.com"
              title="Store Assisto"
              description="Store Assisto is an app that lets you search for goods in nearby shops"
            />
            <Projectstemplate
              isSlide={isSlide}
              gitLink="github.com/adelakuntobi/Social-Media-Dashboard"
              liveLink="adelakuntobi.github.io/Social-Media-Dashboard/"
              title="Social Media Dashboard"
              description="A basic landing page for a social media accounts of a company"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
