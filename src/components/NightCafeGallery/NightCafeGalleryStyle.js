import styled from "styled-components";

export const NightCafeGalleryStyled = styled.div `
        width: 100%;
        
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 3%;
        row-gap: 80px;

        @media screen and (max-width: 768px){
        grid-template-columns: repeat(6, 1fr);
    }
`


export const NightCafeGalleryItemStyled = styled.div `
        grid-column: ${p => p.gridCol ? p.gridCol : ''};

        & p {
                font-size: 1.25rem;
                line-height: 130%;
                text-transform: uppercase;
        }
        & img {
                max-width: 100%;
                border-radius: 20px;
                transition: all 250ms ease-in;
        
    
        /* &:hover{
                filter: grayscale(50%);
                position: relative;
                z-index: 2;
            } */
        }

        @media screen and (max-width: 768px){
        margin-top: 0 !important;
        
        &:nth-child(odd){
            grid-column: 1 / 7;
        }

        &:nth-child(even){
            grid-column: 3 / 7;
        }
    }
    @media screen and (max-width: 520px){
        &:nth-child(odd),
        &:nth-child(even){
            grid-column: 1 / 7;
        }
        
    }
`