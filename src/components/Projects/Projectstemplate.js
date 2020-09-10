import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projectstemplate() {
  // library.add(fab, faCheckSquare, faCoffee)
  // const github = <FontAwesomeIcon icon={faGithub} />
  return (
    <div style={{ background: "#201F1F" }} className="p-5">
      <div className="pb-4 flex justify-between">
        <h1 className="text-3xl"><span>&lt; </span> <span> &gt;</span></h1>
        <div className="flex flex-col">
          {/* {github} */}
        </div>
      </div>
      <h1 className="text-2xl font-semibold">MicroAPI</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
      <div>
        <FontAwesomeIcon icon="check-square" />
    With Coffee Checked, these companies always know their coffee is hot and ready!
  </div>
    </div>
  )
}

export default Projectstemplate
