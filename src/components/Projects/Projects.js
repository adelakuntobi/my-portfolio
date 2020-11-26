
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Projectstemplate from './Projectstemplate'
import wtee from '../../images/Wtee.jpg'
import unique from '../../images/unique-ideas.jpg'
import dashboard from '../../images/dashboard.jpg'
import microapi from '../../images/microapi.jpg'
import appfleet from '../../images/appfleet.jpg'
import FindIt from '../../images/FindIt.jpg'
import faydecor from '../../images/faydecor.jpg'
import where from '../../images/where.jpg'
import store from '../../images/store-assisto.jpg'


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
      <div className={"container width w-full px-2 sm:px-6"}>
        <div className="flex justify-between items-center">
          <Heading name="Projects" />
          {
            isSlide ?
              <FontAwesomeIcon icon={['fas', 'list']} size="2x" cursor="pointer" onClick={changeView} className="mx-2" /> :
              <FontAwesomeIcon icon={['fas', 'th']} size="2x" cursor="pointer" onClick={changeView} className="mx-2" />
          }
        </div>
        <div className={isSlide ? "overflow-x-scroll" : "overflow-y-scroll the-hth"}>
          <div className={isSlide ? "grid grid-flow-col grid-rows-2 gap-4 overflow-x-scroll" :
            "overflow-x-hidden mx-auto lg:gap-10 gap-6 grid-rows-2 grid lg:w-9/12 px-2 md:px-8 lg:px-0 lg:grid-flow-row"}>
            {/* <Projectstemplate
              isSlide={isSlide}
              banner1={microapi}
              gitLink="microapidev/dashboard"
              liveLink="microapi.dev"
              title="MircoAPI"
              description="MicroAPI is an API integration website which provides various API options"
              show=" hidden" css3="hidden" php="hidden" react="hidden"
            /> */}
            <Projectstemplate
              isSlide={isSlide}
              banner1={FindIt}
              gitLink="adelakuntobi/fxnigeria"
              liveLink="fxnigeria.netlify.app"
              title="FindIt"
              description="An E-Commerce website"
              react="react" sass="sass" show=" hidden" html5="hidden" css3="hidden" php="hidden"
            />
            <Projectstemplate
              isSlide={isSlide}
              banner1={store}
              gitLink="adelakuntobi/Store-Assisto"
              liveLink="store-assisto.herokuapp.com"
              title="Store Assisto"
              description="Store Assisto is an app that lets you search for goods in nearby shops"
              show=" hidden" react="hidden" sass="hidden"
            />
            <Projectstemplate
              isSlide={isSlide}
              banner1={appfleet}
              gitLink="adelakuntobi/Appfleet-Landing-Page"
              liveLink="adelakuntobi.github.io/Appfleet-Landing-Page/"
              title="Appfleet"
              description="A clone of the Appfleet landing page"
              react="hidden" sass="hidden" php="hidden"
              show=" hidden"
            />
            <Projectstemplate
              isSlide={isSlide}
              banner1={faydecor}
              gitLink="adelakuntobi/interior-decoration"
              liveLink="faydecor.netlify.app/"
              title="Faydecor"
              description="A basic landing page for an interior design company"
              react="react" sass="sass" show=" hidden" html5="hidden" css3="hidden" php="hidden"
            />
            <Projectstemplate
              isSlide={isSlide}
              banner1={unique}
              gitLink="adelakuntobi/unique-portfolio"
              liveLink="uniqueideas.me"
              title="Unique Ideas"
              description="This is a portfolio website built for Unique Ideas"
              show=" hidden" html5="hidden" sass="hidden" php="hidden"
            />


            <Projectstemplate
              isSlide={isSlide}
              banner1={where}
              gitLink="adelakuntobi/where-in-the-world"
              liveLink="countries-lists.netlify.app/"
              title="Countries List"
              description="List of countries in the world with other details about them"
              react="react" sass="sass" show=" hidden" html5="hidden" css3="hidden" php="hidden"
            />
            <Projectstemplate
              banner1={dashboard}
              isSlide={isSlide}
              gitLink="adelakuntobi/Social-Media-Dashboard"
              liveLink="adelakuntobi.github.io/Social-Media-Dashboard/"
              title="Dashboard"
              description="A basic landing page for a social media accounts of a company"
              show=" hidden" react="hidden" css="hidden" php="hidden"
            />

            {/* <Projectstemplate
              isSlide={isSlide}
              gitLink="github.com/adelakuntobi/To-Do-With-FireBase"
              liveLink="adelakuntobi.github.io/To-Do-With-FireBase/"
              title="To Do List"
              description="A Firebase App that saves to do tasks to a database"
              react="hidden" sass="hidden" php="hidden"
              firebase="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" show=" block"
            /> */}

            <Projectstemplate
              isSlide={isSlide}
              banner1={wtee}
              gitLink="adelakuntobi/weather-forecast"
              liveLink="tobi11.web.app"
              title="WTee"
              description="A weather forecast app which predicts weather conditions"
              react="hidden" sass="hidden" php="hidden" show=" hidden"
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
