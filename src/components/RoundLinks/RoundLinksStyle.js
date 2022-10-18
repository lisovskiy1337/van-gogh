import styled from 'styled-components'


export const RoundLinksStyled = styled.div`
    width: 256px;
    height: 256px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    padding: 10px;
    background: ${p => p.isDarkMode ? '#fff' : '#000'};
    transition: all 400ms linear;

    &:hover {
        background: ${p => p.BgHover ? `url(${p.BgHover}) no-repeat top right` : 'red'};
        background-position: cover;
    }



    & svg > path {
        fill:${p => p.isDarkMode ? '#000' : '#fff'};
        
    }

    & p {
        font-size: 1.5rem;
        text-align: center;
        text-transform: uppercase;
        color:${p => p.isDarkMode ? '#000' : '#fff'};

    }

    @media screen and (max-width: 580px){
        width: 200px;
        height: 200px;

        p {
        font-size: 1.25rem;
        }
    }

`