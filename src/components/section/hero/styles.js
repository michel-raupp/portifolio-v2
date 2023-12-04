'use client'

import { BaseSection, GlobalStyles } from "../../../styles/styles"
import styled from "styled-components"

export const StyledHeroSection = styled(BaseSection)`
    padding: 108px 0 32px 0;
    /* opacity: 0; */
    /* animation: fadeIn 1.6s cubic-bezier(0.6, -0.28, 0, 1.25) 1s forwards; */

    @keyframes fadeIn {
        0%{
            opacity: 0;
            scale: 0.8;
            rotate: 25deg;
        }
        100%{
            opacity: 1;
            scale: 1;
            rotate: 0deg;
        }
    }
    .window-bar{
        padding: 8px;
        width: 100%;
        background: ${GlobalStyles.colors.background};
    }

    .window, .window::after{
        width: 328px;
        height: 100%;
    }
    
    h2{
        font-size: 20px;
    }

    .button{
        font-size: 16px;
        background-color: ${GlobalStyles.colors.text};
        width: 20px;
        height: 20px;
        color: ${GlobalStyles.colors.background};

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 10px;
            background-color: ${GlobalStyles.colors.background};
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &.minimize::before {
            content: '';
        }

        &.fullscreen::after {
            display: none;
        }

        &.fullscreen::before{
            border: 2px solid ${GlobalStyles.colors.background};
            border-radius: 2px;
            height: 6px;
            width: 10px;
            background-color: transparent;
        }


        &.close::before,
        &.close::after {
            content: '';
            width: 12px;
            background-color: #333;
        }

        &.close::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &.close::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
  
    } 

    span{
        margin-left: 16px;
    }

    .profile{
        background: ${GlobalStyles.gradient.primary};
        border-radius: 0;
        img{
            width: 324px;
            height: 360px;
        }

        .status{
            width: 100%;
            max-width: 288px;
            padding-left: 16px;
            height: 40px;
            background-color: ${GlobalStyles.colors.secondary}; 
            border: 1px solid ${GlobalStyles.colors.border};
            bottom: 16px;

            div{
                background-color: ${GlobalStyles.colors.primary}; 
                width: 16px;
                height: 16px;
                animation: blinking 1.6s ease-in-out infinite;
            }
        }
     }

    @keyframes blinking {
        0%{
            opacity: 1;
        }
        50%{
            opacity: .5;
        }
        100%{
            opacity: 1; 
        }
    }

   @media(max-width: 768px){
        padding: 32px 0;
        animation: none;
        opacity: 1;


        &>div{
            flex-direction: column;
            align-items: center;

            .container{
                max-width: 340px;
            }
        }

        .wrapper, .window, .window::after{
            width: 100%;
            max-width: 340px;
        }

        .profile{
            background: ${GlobalStyles.gradient.primary};
            
            img{
                width: 338px;
                height: 366px;
            }
        }


   }
`
