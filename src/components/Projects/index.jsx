
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Heading from '../Heading'
// import Projectstemplate from './Projectstemplate'
// import wtee from '../../images/Wtee.jpg'
// import unique from '../../images/unique-ideas.jpg'
// import dashboard from '../../images/dashboard.jpg'
// import appfleet from '../../images/appfleet.jpg'
// import FindIt from '../../images/FindIt.jpg'
// import faydecor from '../../images/faydecor.jpg'
// import where from '../../images/where.jpg'
// import store from '../../images/store-assisto.jpg'

import Makecards from "../../images/makecards.png"
import UnilagID from "../../images/unilagid.png"
import LearnHub from "../../images/learnhub.png"
import Roshambo from "../../images/roshambo.png"
import AltInvest from "../../images/altinvest.png"
import Fiigo from "../../images/fiigo.png"


import { DiReact } from "react-icons/di"
import { SiTailwindcss, SiRedux,SiSass,  SiNextdotjs, SiMongodb, SiTypescript, SiNodedotjs } from "react-icons/si"


function Projects() {
  const [isSlide, setisSlide] = useState(false)

  const changeView = () => {
    if (isSlide === true) {
      setisSlide(false)
    }
    else {
      setisSlide(true)
    }
  }

  const allProjects = [
    {
      title: "Makecards",
      imgAsset: Makecards,
      gitLink: "",
      liveLink: "makecards.co",
      description: "A virtual card creation platform aiding digital transactions with personalized virtual cards.",
      languages: [DiReact, SiTailwindcss, SiRedux]
    },
    {
      title: "UnilagID",
      imgAsset: UnilagID,
      gitLink: "adelakuntobi/unilagid.com",
      liveLink: "unilagid.com",
      description: "A platform for Unilag enabling students to create ID cards from any location."      ,
      languages: [SiNextdotjs, SiMongodb, SiNodedotjs]
    },
    {
      title: "AltInvest",
      imgAsset: AltInvest,
      gitLink: "",
      liveLink: "altinvest.ng",
      description: "Alt Invest is an investment platform which focuses on ethical and impact-focused investment opportunities in the real sectors of the economy.",
      languages: [SiTypescript, SiSass]
    },
    {
      title: "LearnHub",
      imgAsset: LearnHub,
      gitLink: "",
      liveLink: "learnhubpro.vercel.app",
      description: "A learning platform to a tailored experience that caters to a unique needs and goals.",
      languages: [DiReact, SiNodedotjs, SiSass]
    },
    {
      title: "Roshambo",
      imgAsset: Roshambo,
      gitLink: "",
      liveLink: "altinvest.ng",
      description: "A Progressive Web App for enjoying the game of rock-paper-scissors.",
      languages: [SiTypescript, SiSass]
    },
    {
      title: "Fiigo",
      imgAsset: Fiigo,
      gitLink: "",
      liveLink: "altinvest.ng",
      description: "A platform to access and retain top talents",
      languages: [DiReact, SiSass]
    },
  ]
  return (

    <div className="">
      <div className={"container width w-full px-2 sm:px-6"}>
        <div className="flex justify-between items-center mb-10">
          <Heading name="Projects" />
          {
            isSlide ?
              <FontAwesomeIcon icon={['fas', 'list']} size="2x" cursor="pointer" onClick={changeView} className="mx-2" /> :
              <FontAwesomeIcon icon={['fas', 'th']} size="2x" cursor="pointer" onClick={changeView} className="mx-2" />
          }
        </div>
        <div className={isSlide ? "overflow-x-scroll" : "overflow-y-scroll the-hth"}>
          <div className={isSlide ? "grid grid-flow-col grid-rows-2 gap-4 overflow-x-scroll" :
            "overflow-x-hidden mx-auto lg:gap-10 gap-6 grid-rows-2 grid lg:w-12/12 px-2 md:px-8 lg:px-0 lg:grid-flow-row"}>

            {
              allProjects.map((project, index) => {
                const { title, imgAsset, gitLink, liveLink, description, languages } = project
                return (
                  <div key={index} className="flex flex-row-reverse flex-start justify-end md:justify-center mx-auto" >
                    <div style={{ background: "#201F1F" }} className={isSlide ? "summary-width p-5" : "lg:w-1/2 summary-width lg:py-8 p-5"}>
                      <div className="pb-3 flex justify-between">
                        <FontAwesomeIcon icon={['fas', 'code']} size="2x" cursor="pointer" />
                        <div className="flex items-center gap-5 ">
                          {
                            gitLink &&
                            <a rel="noopener noreferrer" href={"https://www.github.com/" + gitLink} target="_blank"
                              className="flex flex-col items-center cursor-pointer" cursor="pointer">
                              <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
                              <p className="my-2 text-sm font-light">Github</p>
                            </a>
                          }

                          <a rel="noopener noreferrer" href={"https://" + liveLink} target="_blank"
                            className="flex flex-col items-center cursor-pointer">
                            <FontAwesomeIcon icon={['fas', 'eye']} size="1x" />
                            <p className="my-2 text-sm font-light">Preview</p>
                          </a>
                        </div>
                      </div>
                      <h1 className="text-2xl lg:text-3xl my-2 font-semibold">{title}</h1>
                      <p>{description}</p>
                      <div className="mt-8 grid-flow-col gap-8 inline-grid">
                        {
                          languages.map((Language, langIndex) => {
                            return (
                              <Language key={langIndex} />
                              // <FontAwesomeIcon className={html5} icon={['fab', `html5`]} size="1x" />
                              // <FontAwesomeIcon className={css3} icon={['fab', `css3-alt`]} size="1x" />
                              // <FontAwesomeIcon className={sass} icon={['fab', `sass`]} size="1x" />
                              // <FontAwesomeIcon className={js} icon={['fab', `js-square`]} size="1x" />
                              // <FontAwesomeIcon className={php} icon={['fab', `php`]} size="1x" />
                              // <div key={index}>{language}</div>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div style={{ backgroundColor: "#201F1F" }} className={isSlide ? "hidden" : "w-1/2 lg:flex hidden justify-center items-center"}>
                      <img src={imgAsset} alt="banner" className="p-6 w-full" />
                    </div>
                  </div>
                )
              })
            }
            {/* <Projectstemplate
              isSlide={isSlide}
              banner1={microapi}
              gitLink="microapidev/dashboard"
              liveLink="microapi.dev"
              title="MircoAPI"
              description="MicroAPI is an API integration website which provides various API options"
              show=" hidden" css3="hidden" php="hidden" react="hidden"
            /> */}
            {/* <Projectstemplate
              isSlide={isSlide}
              banner1={Makecards}
              gitLink=""
              liveLink="makecards.co"
              title="Makecards"
              description="A virtual card creation platform"
              react="react" sass="sass" show=" hidden" html5="hidden" css3="hidden" php="hidden"
            />
            <Projectstemplate
              isSlide={isSlide}
              banner1={UnilagID}
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
            <Projectstemplate
              isSlide={isSlide}
              banner1={wtee}
              gitLink="adelakuntobi/weather-forecast"
              liveLink="tobi11.web.app"
              title="WTee"
              description="A weather forecast app which predicts weather conditions"
              react="hidden" sass="hidden" php="hidden" show=" hidden"
            /> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
