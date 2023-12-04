'use client';

import styled, { css } from "styled-components";
import { GlobalStyles } from '../../../styles/styles'


export const StyledDropdownMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99999;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    

    &>div:last-child{
        max-width: 360px;
        background-color: ${GlobalStyles.colors.terciary};
        border-left: 1px solid ${GlobalStyles.colors.border};
        right: -100%;
        
        &>div{
            gap: 0;
            width: 100%; 
        }
    }

    .background-menu{
        background: ${GlobalStyles.colors.terciary};
        cursor: pointer;
        right: 0;
        opacity: 0;
    }

    &>div:last-child, .background-menu{
        z-index: -999;
        top: 0;
        height: 100%;
        width: 100%;
        padding:  30px;
        position: fixed;
        transition: .5s cubic-bezier(0.42, 0, 0.53, 1);
    }

    &>div:last-child{
        height: 100%;
        width: 100%;
        padding:  30px;
        position: fixed;
    }

    img{
        cursor: pointer;
    }

    .top{
        width: 100%;
    }

    @media (max-width: 768px){
        hr{
            border-color: ${GlobalStyles.colors.border};
            opacity: 1;
            margin: 16px 0 32px 0;
        }
    }

    @media (max-width: 480px){
        &>div:last-child{
            max-width: 100%;
        }
    }

    ${({ isopen }) => isopen === 'true' && css`
        pointer-events: visible;

        &>div:last-child {
            right: 0;
        }

        .background-menu {
            opacity: .5;
        }
    `}
    
`
