'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { StyledFooter } from './styles'
import Image from 'next/image'

// images
import tinyChar from '../../assets/images/tiny-char2.gif'
import zombie from '../../assets/images/tiny-zombie.gif'

export default function Footer() {

    return (
        <StyledFooter>
            <div className='chars relative'>
                <div className="zombie absolute">
                    <Image
                        src={zombie}
                        alt={'zombie'}
                        height={80}
                        width={'auto'}
                    />
                </div>

                <div className="tiny-char absolute">
                    <Image
                        src={tinyChar}
                        alt={'tinyChar'}
                        height={80}
                        width={'auto'}
                    />
                </div>
            </div>
            <footer className='flex col'>
                <div className='flex jc-between'>
                    <p className='title-terciary'>
                        made with coffee ☕
                    </p>

                    <p className='title-terciary'>
                        Michel Raupp - @2023
                    </p>
                </div>
            </footer >
        </StyledFooter>
    )
}
