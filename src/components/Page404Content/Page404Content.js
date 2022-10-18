import React from 'react'
import Section from '../Section/Section'
import { Page404BackHome, Page404ContentStyled } from './Page404ContentStyle'
import { WavyLink } from "react-wavy-transitions";
const Page404Content = () => {
  return (
    <Section>
        <Page404ContentStyled>
            <div>
                <span>4</span>
                <img src="/images/ufo.svg" alt="" />
                <span>4</span>
            </div>
            <WavyLink to={`/`} color="#8f44fd">
              <Page404BackHome>Back Home</Page404BackHome>
            </WavyLink>
        </Page404ContentStyled>
    </Section>
   
  )
}

export default Page404Content