'use client'

import { BaseSection, GlobalStyles } from "../../../styles/styles"
import styled from "styled-components"

export const StyledExperienceSection = styled(BaseSection)`

    .arrow{
        left: 8px;
        transition: .3s cubic-bezier(0.74, -0.15, 0.29, 0.96);
    }
    .wrapper{
        padding: 0 0 48px 48px;
        border-left: 1px solid ${GlobalStyles.colors.border};
    }
    
    @media(max-width: 768px){
        padding: 32px 0px;

        .text-wrapper{
            max-width: 340px;
        }

        &>div{
            flex-direction: column;
            align-items: center;

            .container{
                max-width: 340px;
            }
        }
        .wrapper{
            padding: 0 0 48px 0;
            border-left: none;
        }
        .arrow{
            display: none;
        }
    }
`
