import React from 'react'
import Projectstemplate from './Projectstemplate'


function Projects() {
  return (
    <div className="container mx-auto my-8 w-11/12">
      <div className="flex justify-start items-center">
        <h1 className="primaryColor text-5xl">Projects</h1><hr className="w-2/12 mx-2" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-10/12 md:w-full">
        <Projectstemplate />
        <Projectstemplate />
        <Projectstemplate />
        <Projectstemplate />
        <Projectstemplate />
        <Projectstemplate />
      </div>
    </div>
  )
}

export default Projects
