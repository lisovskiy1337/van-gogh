import styled from 'styled-components'

export const Nav = styled.nav`
    position: fixed;
    right: 0;
    top: 0;
    transform: ${p => p.isMenuOpen ? 'translateY(0)' : 'translateY(-200%)'};
    height: 100vh;
    width: 30vw;
    min-width: 400px;
    background: ${p => p.isDarkMode ? '#fff' : '#000'};
    transition: var(--transition-delay);
    z-index: 9;

    @media  screen and (max-width: 580px){
        width: 100%;
    }

    ul {
        padding: 80px 20px 15px 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    ul li {
        display: flex;
        align-items: flex-end;
        color:${p => p.isDarkMode ? '#000' : '#fff' };
        
        img {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            margin-right: 15px;
            object-fit: cover;
        }

        div{
            display: flex;
            align-items: flex-start;
        }

        span {
            margin-right: 10px;
        }

        p {
            position: relative;
            text-align: left;

            &::before{
                content: '';
                position: absolute;
                left: 0;
                bottom: -1px;
                width: 0px;
                height: 1px;
                background: ${p => p.isDarkMode ? '#000' : '#fff' };
                transition: 200ms ease-in;
            }
            &:hover::before {
                width: 100%;
            }
        }
        
        svg {
            margin-left: 15px;
            margin-top: 5px;
            min-width: 16px;
        }
        svg > path {
            fill:${p => p.isDarkMode ? '#000' : '#fff' };
        }
    }
`