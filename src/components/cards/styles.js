'use client'

import { GlobalStyles } from "../../styles/styles"
import styled from "styled-components"

export const StyledProjectCard = styled.div`
    border: 1px solid ${GlobalStyles.colors.border};
    background: ${GlobalStyles.colors.terciary};
    padding: 16px;
    transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    p, h3{
        white-space: nowrap;
        font-size: 16px;
        line-height: 100%;
        color: ${GlobalStyles.colors.text};
        max-width: 270px;
    }

    span{
        color: ${GlobalStyles.colors.primary};
        margin-right: 8px;
    }

    ul{
        flex-wrap: wrap;
        li{
            background: ${GlobalStyles.colors.secondary};
            padding: 4px 8px;

            p{
                font-size: 14px;
            }
        }
    }

    img{
        border-radius: 2px; 
    }

    div.link-btn{
        padding: 0 16px;
        height: 40px;
        border-radius: 2px;
        border: 1px solid ${GlobalStyles.colors.border};
        border-image: linear-gradient(to right, ${GlobalStyles.colors.primary}, ${GlobalStyles.colors.accent}) 1 1 1 1;
        transition: .3s cubic-bezier(0.4, 0, 0.2, 1);

        p{
            font-size: 16px;
        }

        &:hover{
            background-color: ${GlobalStyles.colors.secondary};
        }
    }

    &:hover{
        scale: 1.04;
        rotate: 2deg;
        filter: ${GlobalStyles.effects.blueGlow};
    }
    @media(max-width: 768px){
        &:hover{
            scale: 1;
            rotate: 0deg;
            filter: none;
        }
    }
`
export const StyledExperienceCard = styled.div`
    display: flex;
    gap: 32px;
    flex-direction: row;

    .infos, .container{
        width: 100%;
    }

    .container{
        padding: 16px;
    }

    img{
        border: 1px solid ${GlobalStyles.colors.secondary};
        border-radius: 2px;
        width: 270px;
        height:  270px;
    }

    @media(max-width: 768px){
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        background-color: ${GlobalStyles.colors.terciary};
        border: 1px solid ${GlobalStyles.colors.secondary};

        img{
            width: 100%;
            max-width: 340px;
            height: auto;
        }

        .infos{
            flex-direction: column;
            align-items: flex-start;
        }

    }
`
