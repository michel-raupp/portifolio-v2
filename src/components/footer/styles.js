'use client'

import { GlobalStyles } from "../../styles/styles"
import styled from "styled-components"

export const StyledFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @keyframes zombieAnimation {
        0% {
            left: -100%;
            transform: scaleX(1);
        }
        55% {
            left: 100%;
            transform: scaleX(1);
        }
        56% {
            transform: scaleX(-1);
        }
        60%{
            left: 100%;
        }
        99% {
            transform: scaleX(-1);
            left: -100%;
        }
    }
    @keyframes charAnimation {
        0% {
            left: -100%;
            transform: scaleX(1);
        }
        45% {
            left: 100%;
            transform: scaleX(1);
        }
        46% {
            transform: scaleX(-1);
        }
        55%{
            left: 100%;
        }
        90% {
            transform: scaleX(-1);
            left: -100%;
        }
    }

    .chars {
        width: 100vw;
        height: 100px;

        .zombie,
        .tiny-char {
            left: -100%;
            bottom: 0;
            width: 80px;
            height: 80px;  /* Adicione esta linha para garantir uma altura fixa */
        }

        .zombie {
            animation: zombieAnimation 20s linear infinite;
        }

        .tiny-char {
            animation: charAnimation 20s linear infinite;
        }
    }

    footer{
        width: 100%; 
        padding: 24px;
        background: ${GlobalStyles.colors.glass};
        border-top: 4px solid ${GlobalStyles.colors.primary};
        border-image: linear-gradient(to right, ${GlobalStyles.colors.primary}, ${GlobalStyles.colors.accent}) 1 1 1 1;

        backdrop-filter: ${GlobalStyles.effects.blur};
        filter: ${GlobalStyles.effects.pinkGlow};

        &>div{
            max-width: 1024px;
            width: 100%;
        }
    }

    @media(max-width: 768px){
        footer{
            div{
                flex-direction: column;
                gap: 8px;
            }
        }

        .chars {
            .zombie {
                animation: zombieAnimation 10s linear infinite;
            }

            .tiny-char {
                animation: charAnimation 10s linear infinite;
            }
        }
    }
`
