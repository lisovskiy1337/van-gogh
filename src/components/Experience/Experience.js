import React from 'react'
import ArtWorks from '../ArtWorks/ArtWorks'
import { ExperienceSectionStyle } from './ExperinceStyle'
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <ExperienceSectionStyle>
        <Fade left>
          <img src="/images/exp.svg" alt="" />
        </Fade>
        <ArtWorks/> 
    </ExperienceSectionStyle>
  )
}

export default Experience