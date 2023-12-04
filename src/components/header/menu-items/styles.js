'use client';

import styled from "styled-components";
import { GlobalStyles } from "../../../styles/styles"


export const StyledMenuItems = styled.div`
    color: ${GlobalStyles.colors.text};

    div{
        flex-direction: row;
    }

    span{
        color: ${GlobalStyles.colors.primary};  
    }
    p, span{
        font-size: 18px;
    }

    p{
        transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    a:hover{
        p{
            color: ${GlobalStyles.colors.accent};  
        }
    }
    
    @media(max-width: 768px){
        
        p, span{
            font-size: 32px;
        }

        &>div{
            height: 100%;
            flex-direction: column;
            align-items: flex-end;
        }

        .header-um{
            div, a{
                display: flex !important;
            }
        }
    }

`
