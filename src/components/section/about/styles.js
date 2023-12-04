'use client'

import { BaseSection, GlobalStyles } from "../../../styles/styles"
import styled from "styled-components"

export const StyledAboutSection = styled(BaseSection)`

    .window{
        padding: 32px;
    }

    .window, .window::after{
        width: 100%;
        height: 100%;
        
    }

    .skills{
        flex-wrap: wrap;
        width: 280px;
        .container{
            height: 80px;
            width: 80px;
            padding: 0;
        }

        p{
            font-size: 14px;
        }
    }

    a{
        padding: 0 16px;
        height: 40px;
        border-radius: 2px;
        border: 1px solid ${GlobalStyles.colors.primary};
        border-image: linear-gradient(to right, ${GlobalStyles.colors.primary}, ${GlobalStyles.colors.accent}) 1 1 1 1;
        transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
        
        p{
            font-size: 20px;
        }

        img{
            transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover{
            background-color: ${GlobalStyles.colors.secondary};
        
            filter: drop-shadow(0px 0px 10px #072A41, 0px 0px 10px rgba(0, 225, 255, 0.50));
            img{
                animation: floating 1s ease-in-out infinite;  
            }
        }
    }

   @media(max-width: 768px){
        &>div{
            flex-direction: column;
            align-items: center;

            .container{
                max-width: 340px;
            }
        }

        .window{
            max-width: 340px;
            padding: 32px 16px;
        }
   }


`
