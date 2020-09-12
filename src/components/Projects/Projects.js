import React from 'react'
import Projectstemplate from './Projectstemplate'


function Projects() {
  return (
    <div className="mx-0">
      <div className="container w-full mx-0 my-8">
        <div className="flex justify-start items-center mb-12">
          <h1 className="primaryColor text-5xl ">Projects</h1><hr className="w-2/12 mx-2" />
        </div>
          <div>
        <div className="flex w-10/12">
          <Projectstemplate />
          <Projectstemplate />
          <Projectstemplate />
          <Projectstemplate />
          <Projectstemplate />
          <Projectstemplate />
          <Projectstemplate />
          <Projectstemplate />
          <Projectstemplate />
          <Projectstemplate />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
