import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Showcase = () => (
  <div className="social md:grid hidden grid-cols-1 gap-8 px-10">
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
    {/* Pointing down Arrow
    <svg className="animate-bounce w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg> */}
    {/* <FontAwesomeIcon icon="check-square" /> */}
  </div>
)