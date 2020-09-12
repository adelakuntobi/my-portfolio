import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projectstemplate() {
  // library.add(fab, faCheckSquare, faCoffee)
  // const github = <FontAwesomeIcon icon={faGithub} />
  return (
    <div style={{ background: "#201F1F" }} className="p-5">
      <div className="pb-4 flex justify-between">
      <FontAwesomeIcon icon={['fas', 'code']} size="2x" cursor="pointer"/>
        <div className="grid-cols-2 grid gap-5">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={['fab', 'github']} size="1x" cursor="pointer"/>
            <p className="my-2 text-sm">Github</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={['fas', 'eye']} size="1x" />
            <p className="my-2 text-sm">Live</p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold">MicroAPI</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
      <div className="mt-8 grid-flow-col grid">
      <FontAwesomeIcon icon={['fab', 'html5']} size="1x" cursor="pointer"/>
      <FontAwesomeIcon icon={['fab', 'react']} size="1x" cursor="pointer"/>
      <FontAwesomeIcon icon={['fab', 'css3-alt']} size="1x" cursor="pointer"/>
      <FontAwesomeIcon icon={['fab', 'github']} size="1x" cursor="pointer"/>
      <FontAwesomeIcon icon={['fab', 'js-square']} size="1x" cursor="pointer"/>
      </div>
    </div>
  )
}

export default Projectstemplate
