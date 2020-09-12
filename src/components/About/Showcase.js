import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


export const Showcase = () => (
  <div className="grid grid-cols-1 gap-8 px-10">
    <Link to="www.github.com/adelakuntobi">
      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
    </Link>
    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />

    {/* <FontAwesomeIcon icon="check-square" /> */}
  </div>
)