import React from 'react'

function Heading(props) {
  const {name} = props
  return (
    <div className="flex justify-start items-center">
    <h1 className="primaryColor text-4xl md:text-5xl">{name}</h1><hr className="mx-2" />
  </div>
  )
}

export default Heading
