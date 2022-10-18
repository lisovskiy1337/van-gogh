import React from 'react'
import FullWidthImgSection from '../FullWidthImgSection/FullWidthImgSection'
import Header from '../Header/Header'
import HeroStaryNight from '../HeroStaryNight/HeroStaryNight'
import ImgScreen from '../ImgScreen/ImgScreen'
import RoundLinks from '../RoundLinks/RoundLinks'
import RoundLinksContainer from '../RoundLinksContainer/RoundLinksContainer'
import Section from '../Section/Section'
import Table from '../Table/Table'
import TextBlock from '../TextBlock/TextBlock'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const TableDb = [
    {col1 : 'year', col2 : '1888', col3 : 'The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.'},
    {col1 : 'MEDIUM', col2 : 'Oil on canvas'}, 
    {col1 : 'LOCATION', col2 : 'AYale University Gallery'}, 
    {col1 : 'SIZE', col2 : '28.5 in × 36.3 in'},
]

const StaryNightContent = () => {
  return (
    <>
        <HeroStaryNight 
            Bg={'images/hero1.svg'} 
            textColor={'#000'} 
            text={'The Starry Night is an oil on canvas painting by Dutch Post Impressionist painter van Gogh. Painted in June 1889.'}>
        </HeroStaryNight>
        <Section>
          <Slide right>
            <ImgScreen fullw="true">
              <img  src="/images/full-img.svg" alt="" />
            </ImgScreen>
          </Slide>
          <Table>
          {TableDb.map((item, i) => ( 
                <tr key={i}>
                  <td>{item.col1}</td>
                  <td>{item.col2}</td>
                  {item?.col3 && <td rowSpan={TableDb.length}>{item.col3}</td>}  
                </tr>
              )
            )}
          </Table>
          <ImgScreen maxW>
            <Fade top>
              <img src="/images/img-2.svg" alt="" />
            </Fade>
           
            <Fade top delay={500}>
              <img src="/images/img-3.svg" alt="" />
            </Fade>
          </ImgScreen>
          <FullWidthImgSection BgUrl='/images/img-4.svg' BgColor='#2EBCC7'>
            <p>it depicts the view from the east-facing window of his asylum room at Saint Rémy de Provence,
              just before sunrise, with the addition of an imaginary village. It has been in the permanent 
              collection of the Museum of Modern Art in New York City since 1941, acquired through the
              Lizzie Plummer Bliss Bequest.
            </p>
          </FullWidthImgSection>
          <TextBlock/>
          <RoundLinksContainer>
            <RoundLinks BgHover={'images/gallery/img-6.svg'} text={`Paul Gauguin's Armchair`} link='coming-soon'/>
            <RoundLinks BgHover={'images/gallery/img-2.svg'} text={`The Night Café`} link='night-cafe'/>
          </RoundLinksContainer>    
        </Section>
    </>
  )
}

export default StaryNightContent