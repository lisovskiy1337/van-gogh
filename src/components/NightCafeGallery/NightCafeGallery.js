import React from 'react'
import { NightCafeGalleryItemStyled, NightCafeGalleryStyled } from './NightCafeGalleryStyle'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const NightCafeGallery = () => {
  return (
    <NightCafeGalleryStyled>
        <NightCafeGalleryItemStyled gridCol={'3 / 11'}>
          <Fade duration={1500}>
            <div>
              <img src="/images/cafe-img-1.svg" alt="" />
            </div>
          </Fade>
        </NightCafeGalleryItemStyled>
   
      <NightCafeGalleryItemStyled gridCol={'3 / 6'}>
        <Fade left delay={600}>
          <div>
            <img src="/images/cafe-img-2.svg" alt="" />
          </div>
        </Fade>
      </NightCafeGalleryItemStyled>
      <NightCafeGalleryItemStyled gridCol={'8 / 12'} style={{marginTop: '80px'}}>
        <Fade right >
          <div>
            <img src="/images/cafe-img-3.svg" alt="" />
          </div>
        </Fade>
      </NightCafeGalleryItemStyled>
      <NightCafeGalleryItemStyled gridCol={'2 / 7'} style={{marginTop: '-180px'}}>
        <Zoom delay={500} duration={2000}>
          <div>
            <p>The interior depicted is the Café de la Gare, 
              30 Place Lamartine, run by Joseph Ginoux and his wife Marie, 
              who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; 
              a bit later, Joseph Ginoux evidently posed for both artists.
            </p>
          </div>
        </Zoom>
      </NightCafeGalleryItemStyled>
      <NightCafeGalleryItemStyled gridCol={'3 / 11'}>
        <Fade top >
          <div>
            <img src="/images/cafe-img-4.svg" alt="" />
          </div>
        </Fade>
      </NightCafeGalleryItemStyled>
      <NightCafeGalleryItemStyled gridCol={'5 / 12'}>
        <Zoom delay={500} duration={2000}>
          <div>
            <p>he Night Café (French: Le Café de nuit) is an oil painting created by Dutch 
              artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed 
              lower right beneath the signature. The painting is owned by Yale University and is currently 
              held at the Yale University Art Gallery in New Haven, Connecticut.
            </p>
          </div> 
        </Zoom>
      </NightCafeGalleryItemStyled>
      <NightCafeGalleryItemStyled gridCol={'3 / 11'}>
        <Fade>
        <div>
          <img src="/images/cafe-img-5.svg" alt="" />
        </div>
        </Fade>
      </NightCafeGalleryItemStyled>
    </NightCafeGalleryStyled>
  )
}

export default NightCafeGallery