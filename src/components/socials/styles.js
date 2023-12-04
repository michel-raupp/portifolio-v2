'use client'

import { GlobalStyles } from "../../styles/styles"
import styled from "styled-components"

export const StyledSocial = styled.div`
    a{
        background: ${GlobalStyles.colors.secondary}; 
        width: 60px;
        height: 60px;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s cubic-bezier(0.4, 0, 0.2, 1);

        &:after {
            background-color :${GlobalStyles.colors.secondary}; 
            padding: 4px 4px;
            width: 80px;
            text-align: center;
            opacity: 0;
            position: absolute;
            transition: all 0.3s cubic-bezier(0, 0, 0, 1) 0s;
            bottom: 0px;
            font-size: 14px;
            color: ${GlobalStyles.colors.text};
        }

        
    }

    /* .github::after {
         content: "github";
    }

    .instagram::after {
         content: "instagram";
    }

    .linkedin::after {
        content: "linkedin";
    }

    .email::after {
         content: "email";
    } */

    a:hover{
        background: ${GlobalStyles.colors.primary}; 
        filter: drop-shadow(0px 0px 10px rgba(238, 89, 181, 0.50));

        img{
            animation: floating 1s ease-in-out infinite;  
        }

        &::after {
            opacity: 1;
            bottom: -40px;
        }
    }    
`