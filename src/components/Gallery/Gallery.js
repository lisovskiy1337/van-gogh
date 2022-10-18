import React from 'react'
import { GalleryItemStyled, GalleryStyled } from './GalleryStyle'
import { WavyLink } from "react-wavy-transitions";
import Fade from 'react-reveal/Fade';
const galleryDb = [
    {gridCol: '1 / 5', imgUrl: 'img-1.svg', link: 'starry-night', title: 'The Starry Night'},
    {gridCol: '7 / 12', imgUrl: 'img-2.svg', link: 'night-cafe', title: 'The Night Café', mt: '35px'},
    {gridCol: '3 / 6', imgUrl: 'img-3.svg', link: 'coming-soon', title: 'The Red Vineyard'},
    {gridCol: '8 / 13', imgUrl: 'img-4.svg', link: 'coming-soon', title: 'Ward in the Hospital in Arles'},
    {gridCol: '2 / 6', imgUrl: 'img-5.svg', link: 'coming-soon', title: 'Ploughman in the Fields near Arles'},
    {gridCol: '7 / 13', imgUrl: 'img-6.svg', link: 'coming-soon', title: 'Paul Gauguin`s Armchair', mt: '35px'},
]

const Gallery = () => {
  return (
    <GalleryStyled>
        {galleryDb.map((item, i) => {
            const {gridCol, imgUrl, link, title, mt }  = item;
            return (
                    <GalleryItemStyled gridCol={gridCol} style={{marginTop: `${mt}`}} key={i}>
                        <Fade bottom>
                        <WavyLink to={`${link}`} color="#8f44fd">
                            <div className='img__wrapper'>
                                <img src={`/images/gallery/${imgUrl}`} alt="" />
                            </div>
                            <div className='info'>
                                <span>{i + 1}</span>
                                <p>{title}</p>
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z" fill="white"/>
                                </svg>
                            </div>
                        </WavyLink>
                        </Fade>
                    </GalleryItemStyled>               
            )
        })}
    </GalleryStyled>
  )
}

export default Gallery