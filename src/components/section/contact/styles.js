'use client'

import { BaseSection, GlobalStyles } from "../../../styles/styles"
import styled from "styled-components"

export const StyledContactSection = styled(BaseSection)`

    .wrapper{
        background-color: ${GlobalStyles.colors.terciary};
        border: 1px solid ${GlobalStyles.colors.border};
        padding: 32px;
        margin: -108px 0 108px 0;

        filter: ${GlobalStyles.effects.blueGlow};
    }

    .tiny-char{
        bottom: 32px;
        right: 32px;
    }

    .profile-char{
        border-radius: 2px;
        border: 1px solid ${GlobalStyles.colors.border}; 
    }

   @media(max-width: 768px){
        max-width: 374px;

        .wrapper{
            flex-direction: column;
            padding:  16px;
            width: 100%;
            max-width: 340px;
            gap: 32px;

            .profile-char{
                width: 100%;
                height: auto;
            }
            .container{
                max-width: 340px;
            }

            .tiny-char{
                display: none;
            }
        }      
    }
`
