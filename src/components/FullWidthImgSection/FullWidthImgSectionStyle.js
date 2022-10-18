import styled from 'styled-components'


export const FWImgSectionStyled = styled.div`
    min-height: 100vh;
    margin: 0 -8.8%;
    background: green;
    position: relative;
    background: ${p => p.BgColor ? p.BgColor : 'var(--bkg-color)'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 7.5% 1rem 27.5%;
    & > * {
      margin-left:50%;

    }

    & p {
      font-size: 1.5rem;
      line-height: 130%;
      text-transform: uppercase;
    }

    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width:50%;
      height: 100%;
      background: ${p => p.BgUrl ? `url(${p.BgUrl})` : 'var(--bkg-color)'};
      background-size: cover;
      z-index: 1;
    }

    @media screen and (max-width: 768px){
        margin: 0 -5.5%;
        padding: 1rem 5%;
        & > * {
          margin-left:  0;
        }
        &::before{
          display: none;
        }
    }

`