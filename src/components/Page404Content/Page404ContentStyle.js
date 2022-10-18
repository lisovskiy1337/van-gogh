import styled from 'styled-components'


export const Page404ContentStyled = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
   


    & div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & span {
        font-weight: 700;
        font-size: 350px;
        font-family: 'Silkscreen', cursive;

      
    }

    & img {
        width: 60%;
    }

    @media screen and (max-width: 1340px){
        & span{
            font-size: 300px;
        }

        & img {
        width: 50%;
        }
    }

    @media screen and (max-width: 790px){
        & span{
            font-size: 200px;
        }

        & img {
        width: 50%;
        }
    }

    @media screen and (max-width: 550px){
        & div {
            flex-direction: column;
        }

        & img {
            width: 100%;
        }
    }
`


export const Page404BackHome = styled.div`
    width: 250px;
    padding: 12px 8px;
    font-size: 1.5rem;
    background: #2EBCC7;
    border: none;
    border-radius: 4rem;
    margin: 4rem 0;
    text-transform: uppercase;
`