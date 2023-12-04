'use client';

import { GlobalStyles } from "../../styles/styles"
import styled from "styled-components"

export const StyledHeader = styled.div`
    width: 100%;
    z-index: 9999;
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .flash{
        background: ${GlobalStyles.gradient.primary}; 
        height: 8px;
        width: 100%;
    }

    header{
        width: 100%; 
        padding: 16px;
        background: ${GlobalStyles.colors.glass};
        filter: ${GlobalStyles.effects.pinkGlow};
        backdrop-filter: ${GlobalStyles.effects.blur};
        border-bottom: 1px solid ${GlobalStyles.colors.border};

        &>div{
            max-width: 1024px;
            width: 100%;
        }
    }

    @media(max-width: 768px){
        header{
            padding: 8px 16px;
        }
    }
`
