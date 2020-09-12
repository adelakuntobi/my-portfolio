import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import banner1 from '../../images/landing1.png'

function Projectstemplate(props) {
  const {isSlide} = props
  return (
    <a className="flex flex-row-reverse justify-center mx-0 lg:mx-auto" rel="noopener noreferrer" href="https://www.github.com" target="_blank">
      <div style={{ background: "#201F1F"}} className={isSlide ? "summary-width p-5" : "lg:w-1/2 summary-width lg:py-12 p-5"}>
        <div className="pb-4 flex justify-between">
          <FontAwesomeIcon icon={['fas', 'code']} size="2x" cursor="pointer" />
          <div className="grid-cols-2 grid gap-5">
            <div className="flex flex-col items-center cursor-pointer" cursor="pointer">
              <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
              <p className="my-2 text-sm font-light">Github</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <FontAwesomeIcon icon={['fas', 'eye']} size="1x" />
              <p className="my-2 text-sm font-light">Live</p>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">MicroAPI</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
        <div className="mt-12 grid-flow-col grid">
          <FontAwesomeIcon icon={['fab', 'html5']} size="1x" cursor="pointer" />
          <FontAwesomeIcon icon={['fab', 'react']} size="1x" cursor="pointer" />
          <FontAwesomeIcon icon={['fab', 'css3-alt']} size="1x" cursor="pointer" />
          <FontAwesomeIcon icon={['fab', 'sass']} size="1x" cursor="pointer" />
          <FontAwesomeIcon icon={['fab', 'js-square']} size="1x" cursor="pointer" />
        </div>
      </div>
      <div style={{ backgroundColor: "#201F1F" }} className={ isSlide? "hidden": "w-1/2 lg:flex hidden justify-center items-center"}>
        <img src={banner1} alt="banner" className="p-6" />
      </div>
    </a>
  )
}

export default Projectstemplate
