import styled from "styled-components";

export const FooterStyled = styled.footer`
    padding: 0 7.5%;
    margin: 40px 0;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    span {
        font-size: 0.9rem;
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px){
        padding: 0 5%;
        flex-direction: column-reverse;
        justify-content: center;

    }
`

export const FooterListStyled = styled.ul`
    display: flex;    

    & li {
        padding: 4px 32px;
        text-transform: uppercase;
        font-size: 0.9rem;

        & a {
            display: flex;
            text-decoration: none;
            color: inherit;

        }
        & svg {
            margin-left: 10px;
        }
        & svg > path {
            fill: var(--text-color);
        }
        &:not(:last-child){
            border-right: 1px solid rgb(150,150,150);
        }
    }
    @media screen and (max-width: 768px){       
       flex-direction: column;
       gap: 1rem;
       
       li {
        text-align: center;
        &:not(:last-child){
            border-right: none;
        }
       }
   }
`

export const FooterGoTopStyled = styled.button`
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: 1px solid var(--text-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg > path {
            fill: var(--text-color);
        }
`