import React from 'react'
import Experience from '../Experience/Experience'
import Gallery from '../Gallery/Gallery'
import Section from '../Section/Section'
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { HomeSubtitleStyle, HomeTitleStyle } from './HomeSectionStyle'

const HomeSection = () => {
  return (
    <Section>
      <Pulse duration={1000}>
        <HomeTitleStyle style={{maxWidth: '60rem'}}>
              Vincent Van Gogh.
              post-impressionist painter and artist
        </HomeTitleStyle>
      </Pulse>
       
        <Gallery/>
        <Pulse duration={1000}>
          <HomeTitleStyle style={{maxWidth: '70rem'}}>
              Van Gogh painted several landscapes with flowers, roses, lilacs, and sunflowers.           
          </HomeTitleStyle>
        </Pulse>
        <Fade duration={2000}>
          <HomeSubtitleStyle style={{maxWidth: '70rem'}}>Some reflect his interests in the language of colour, and also in Japanese ukiyo-e. 
              There are two series of dying sunflowers. The first was painted in Paris in 1887 and shows flowers lying 
              on the ground.
          </HomeSubtitleStyle>
        </Fade>
        <Experience/>
    </Section>
  )
}

export default HomeSection