import React from 'react'
import { SectionStyled } from './SectionStyle'

const Section = ({children}) => {
  return (
    <SectionStyled>
        {children}
    </SectionStyled>
  )
}

export default Section