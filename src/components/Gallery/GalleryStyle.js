import styled from "styled-components";

export const GalleryStyled = styled.div `
    margin-top: 112px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 3%;
    row-gap: 80px;

    @media screen and (max-width: 1120px){
        grid-template-columns: repeat(6, 1fr);
    }

    @media screen and (max-width: 768px){
        row-gap: 40px;
    }
`

export const GalleryItemStyled = styled.div `
    grid-column: ${p => p.gridCol ? p.gridCol : ''};

    @media screen and (max-width: 1120px){
        &:nth-child(odd){
            grid-column: 1 / 4;
        }

        &:nth-child(even){
            grid-column: 4 / 7;
        }
       
    }
    @media screen and (max-width: 768px){
        &:nth-child(odd){
            grid-column: 1 / 7;
        }

        &:nth-child(even){
            grid-column: 2 / 7;
        }
    }
    @media screen and (max-width: 520px){
        &:nth-child(odd),
        &:nth-child(even){
            grid-column: 1 / 7;
        }
        
    }
        & .img__wrapper{
            overflow: hidden;
            border-radius: 20px;
        }

        & img {
        max-width: 100%;
        border-radius: 20px;
        transition: all 250ms ease-in;
    
        &:hover{
                transform: scale(1.05);
            }
        }
   
   
    & .info {
        margin-top: 5px;
        display: flex;
        align-items: center;    

        & span {
            font-size: .9rem;
            text-transform: uppercase;
            color: rgb(150, 150, 150);
            margin-right: 20px;
        }

        & p {
            font-size: .9rem;
            text-transform: uppercase;
            position: relative;
           
            &::before{
                content: '';
                position: absolute;
                left: 0;
                bottom: -1px;
                width: 0px;
                height: 1px;
                background: var(--text-color);
                transition: 200ms ease-in;              
            }

            &:hover::before {
                width: 100%;             
            }
        }
        
        & svg {
            margin-left: 15px;
        }
        & svg > path{  
            fill: var(--text-color);
        }
    }
`