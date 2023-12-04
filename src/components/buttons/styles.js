'use client'

import { GlobalStyles } from "../../styles/styles"
import styled, { css } from "styled-components"

export const StyledDropdownButton = styled.div`
    display: none;
    
  

    input#check-icon {
        display: none;
    }
    @media(max-width: 768px){
        display: flex !important
    }
    .icon-menu {
        --gap: 8px;
        --height-bar: 2px;
        --pos-y-bar-one: 0;
        --pos-y-bar-three: 0;
        --scale-bar: 1;
        --rotate-bar-one: 0;
        --rotate-bar-three: 0;
        width: 35px;
        height: 35px;
        gap: var(--gap);
        cursor: pointer;
    }

    .bar {
        height: var(--height-bar);
        width: 100%;
        border-radius: .5rem;
        background-color: ${GlobalStyles.colors.accent}
    }

    .bar--1 {
        top: var(--pos-y-bar-one);
        transform: rotate(var(--rotate-bar-one));
        transition: top 200ms 100ms, transform 100ms;
    }

    .bar--2 {
        transform: scaleX(var(--scale-bar));
        transition: transform 150ms 100ms;
        width: 70%;
    }

    .bar--3 {
        bottom: var(--pos-y-bar-three);
        transform: rotate(var(--rotate-bar-three));
        transition: bottom 200ms 100ms, transform 100ms;
        width: 85%;
    }

    /* .check-icon:checked + .icon-menu > .bar--1 {
        width: 100%;
        transition: top 200ms, transform 200ms 100ms;
    }

    .check-icon:checked + .icon-menu > .bar--3 {
        width: 100%;
        transition: bottom 200ms, transform 200ms 100ms;
    }

    .check-icon:checked + .icon-menu {
        --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
        --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
        --scale-bar: 0;
        --rotate-bar-one: 45deg;
        --rotate-bar-three: -45deg;
    } */
`

export const StyledLanguageButton = styled.div`
    position: relative;

    button{
        border-radius: 2px;
        padding: 6px 12px;
        background-color: transparent;
        border: 1px solid ${GlobalStyles.colors.primary};
        border-image: linear-gradient(to right, ${GlobalStyles.colors.primary}, ${GlobalStyles.colors.accent}) 1 1 1 1;
        cursor: pointer;
        transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
        p{
            text-transform: uppercase;
        }

        &:hover{
            background-color: ${GlobalStyles.colors.secondary};
        }
    }

    ul{
        position: absolute;
        display: none;
        background-color: ${GlobalStyles.colors.secondary};
        border: 1px solid ${GlobalStyles.colors.border};
        width: 100%;
        padding: 0 12px ;

        &.open{
            display: flex;
        }

        li{
            color: ${GlobalStyles.colors.text};
            padding: 16px 0;
            width: 100%;
            text-align: end;
            cursor: pointer;
            transition: .3s cubic-bezier(0.4, 0, 0.2, 1);

            &:first-child{
                border-bottom: 1px solid ${GlobalStyles.colors.border}; 
            }

            &:hover{
                color: ${GlobalStyles.colors.accent};
            }
        }
    }
`