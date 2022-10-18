import React from 'react'
import HeroNightCafe from '../HeroNightCafe/HeroNightCafe'
import NightCafeGallery from '../NightCafeGallery/NightCafeGallery'
import RoundLinks from '../RoundLinks/RoundLinks'
import RoundLinksContainer from '../RoundLinksContainer/RoundLinksContainer'
import Section from '../Section/Section'
import Table from '../Table/Table'

const TableDb = [
  {col1 : 'year', col2 : '1888', col3 : 'The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.'},
  {col1 : 'MEDIUM', col2 : 'Oil on canvas'}, 
  {col1 : 'LOCATION', col2 : 'AYale University Gallery'}, 
  {col1 : 'SIZE', col2 : '28.5 in × 36.3 in'},
]

const NightCafeContent = () => {
  return (
    <>
      <HeroNightCafe/>
      <Section>
        <Table>
          {TableDb.map((item, i)  => {
            return (
              <tr key={i}>
                <td>{item.col1}</td>
                <td>{item.col2}</td>
                {item?.col3 && <td rowSpan={TableDb.length}>{item.col3}</td>}  
              </tr>
            )
          })}
        </Table>
        <NightCafeGallery/>
        <RoundLinksContainer>
            <RoundLinks BgHover={'images/full-img.svg'} text={`The STARRY NIGHT`} link='starry-night'/>
            <RoundLinks BgHover={'images/gallery/img-3.svg'} text={`The red Vineyard`} link='coming-soon'/>
          </RoundLinksContainer>
      </Section>
      

    </>
  )
}

export default NightCafeContent