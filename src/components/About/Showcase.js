import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Showcase = () => (
  <div className="grid grid-cols-1 gap-8 px-10">
    <a rel="noopener noreferrer" href="https://www.github.com/adelakuntobi" target="_blank">
      <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
    </a>
    <a rel="noopener noreferrer" href="https://www.instagram.com/lakun_b" target="_blank">
      <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
    </a>
    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/adelakuntobi" target="_blank">
      <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
    </a>
    <a rel="noopener noreferrer" href="https://www.twitter.com/larkun_" target="_blank">
      <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
    </a>
    {/* <FontAwesomeIcon icon="check-square" /> */}
  </div>
)