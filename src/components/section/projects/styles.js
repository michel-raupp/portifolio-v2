'use client'

import { BaseSection, GlobalStyles } from "../../../styles/styles"
import styled from "styled-components"

export const StyledProjectsSection = styled(BaseSection)`
    border: 1px solid ${GlobalStyles.colors.primary};
    border-image: linear-gradient(to right, ${GlobalStyles.colors.primary}, ${GlobalStyles.colors.accent}) 1 0 1 0;
    background: ${GlobalStyles.colors.terciary};
    filter: ${GlobalStyles.effects.lightPinkGlow};
    padding: 32px;

    .wrapper{
        width: 100%; 
    }

    .tabs{
        border-bottom: 1px solid ${GlobalStyles.colors.border};
        width: 100%;

        button{
            background: ${GlobalStyles.colors.terciary};
            border: 1px solid ${GlobalStyles.colors.border};
            border-bottom: none !important;
            padding: 8px 16px;
            transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            &:hover{
                background: ${GlobalStyles.colors.secondary};
            }

            &.active{
                background: ${GlobalStyles.colors.secondary};
            }
        }
    }

    .projects{
        flex-wrap: wrap;
    }

    @media(max-width: 768px){
        padding: 32px 0px;

        &>div{
            flex-direction: column;
            align-items: center;

            .container{
                max-width: 340px;
            }
        }

        .projects{
            justify-content: flex-start;
            width: calc(100vw - 32px);
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 16px;

            img{
                    width: 240px;
                    height: auto;
                }
        }

        .tabs{
            p{
                font-size: 14px;
            }
        }
    }
`
