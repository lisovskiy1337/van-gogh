import styled from "styled-components";


export const StyleBurger = styled.div `
        padding: 15px 15px;
        display: inline-block;
        transition-duration: 0.15s;
        transition-timing-function: linear;
        text-transform: none;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible;
        position: relative;

        .hamburger-inner {
        display: block;
        top: 50%;
        margin-top: -2px;
        }
        &.hamburger.is-active .hamburger-inner,
        &.hamburger.is-active .hamburger-inner::before,
        &.hamburger.is-active .hamburger-inner::after {
            background-color: ${p =>  p.isDarkMode ? '#000' : '#fff'};
        }

        .hamburger-box {
        width: 30px;
        height: 24px;
        display: inline-block;
        position: relative;
        margin-top: 3px;
        cursor: pointer;
        z-index: 10;
        }
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
        width: 25px;
        height: 2px;
        background-color: var(--text-color);
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
        }

        .hamburger-inner::before,
        .hamburger-inner::after {
        content: "";
        display: block;
        }

        .hamburger-inner::before {
        top: -8px;
        }

        .hamburger-inner::after {
        bottom: -8px;
        }

        &.hamburger--minus .hamburger-inner::before,
        &.hamburger--minus .hamburger-inner::after {
        transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
        }

        &.hamburger--minus.is-active .hamburger-inner::before,
        &.hamburger--minus.is-active .hamburger-inner::after {
        opacity: 0;
        transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
        }

        &.hamburger--minus.is-active .hamburger-inner::before {
        top: 0;
        }

        &.hamburger--minus.is-active .hamburger-inner::after {
        bottom: 0;
        }


       

`