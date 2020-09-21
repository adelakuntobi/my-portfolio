import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projectstemplate(props) {
  const {banner1, isSlide, gitLink, liveLink, title, description, html5, css3, js, react, sass, php, firebase, show} = props
  return (
    <div className="flex flex-row-reverse flex-start justify-end md:justify-center mx-0 lg:mx-auto" >
      <div style={{ background: "#201F1F"}} className={isSlide ? "summary-width p-5" : "lg:w-1/2 summary-width lg:py-8 p-5"}>
        <div className="pb-3 flex justify-between">
          <FontAwesomeIcon icon={['fas', 'code']} size="2x" cursor="pointer" />
          <div className="grid-cols-2 grid gap-5">
            <a rel="noopener noreferrer" href={"https://www.github.com/" + gitLink} target="_blank"
             className="flex flex-col items-center cursor-pointer" cursor="pointer">
              <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
              <p className="my-2 text-sm font-light">Github</p>
            </a>
            <a rel="noopener noreferrer" href={"https://" + liveLink} target="_blank"
             className="flex flex-col items-center cursor-pointer">
              <FontAwesomeIcon icon={['fas', 'eye']} size="1x" />
              <p className="my-2 text-sm font-light">Live</p>
            </a>
          </div>
        </div>
        <h1 className="text-2xl lg:text-3xl my-2 font-semibold">{title}</h1>
        <p>{description}</p>
        <div className="mt-8 grid-flow-col gap-8 inline-grid">
          <FontAwesomeIcon className={react} icon={['fab', `react`]} size="1x"/>
          <FontAwesomeIcon className={html5} icon={['fab',  `html5`]} size="1x"/>
          <FontAwesomeIcon className={css3} icon={['fab', `css3-alt`]} size="1x"/>
          <FontAwesomeIcon className={sass} icon={['fab', `sass`]} size="1x"/>
          <FontAwesomeIcon className={js} icon={['fab', `js-square`]} size="1x"/>
          <FontAwesomeIcon className={php} icon={['fab', `php`]} size="1x"/>
          <img style={{filter: "grayscale(1)"}} className={"w-3" + show} src={firebase} alt="firebase"/>
        </div>
      </div>
      <div style={{ backgroundColor: "#201F1F" }} className={ isSlide? "hidden": "w-1/2 lg:flex hidden justify-center items-center"}>
        <img src={banner1} alt="banner" className="p-6" />
      </div>
    </div>
  )
}

export default Projectstemplate
