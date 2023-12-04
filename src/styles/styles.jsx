'use client'

import styled from "styled-components"

export const GlobalStyles = {
    colors: {
        primary: '#EE59B5',
        secondary: '#072A41',
        terciary: '#021623',
        glass: 'rgba(2, 16, 24, 0.80)',
        border: '#194866',
        background: '#021018',
        text: '#fff',//#DFF1FC
        accent: '#FFB400',
    },
    sectionSizes: {
        sm: '480px',
        md: '768px',
        lg: '1376px',
    },
    gradient: {
        primary: 'linear-gradient(-90deg, #EE59B5 0%, #FFB400 100%)',
    },
    effects: {
        blur: 'blur(16px)',
        lightPinkGlow: 'drop-shadow(0px 0px 50px rgba(238, 89, 181, 0.20))',
        pinkGlow: 'drop-shadow(0px 0px 100px rgba(238, 89, 181, 0.50))',
        blueGlow: 'drop-shadow(0px 0px 50px rgba(0, 225, 255, 0.20))'
    }
}

export const BaseSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 0 auto;
    height: auto;
    
    &>div{
        width: calc(100% - 32px);
        max-width: 1024px;
        height: auto;

        div{
            border-radius: 2px;
        }
    }
    
`
