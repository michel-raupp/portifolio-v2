/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import Link from 'next/link'

//imagens
import profile from '../../../assets/images/profile.webp'

import { StyledHeroSection } from './styles'
import Socials from '../../socials'

function HeroSection({dict}) {
    return (
        <StyledHeroSection id='home'>
            <div className='flex gap-xl al-end'>
                <div className='window flex col'>
                    <div className='window-bar flex jc-end gap-sm'>
                        <div className='button minimize relative'></div>
                        <div className='button fullscreen relative'></div>
                        <div className='button close relative'></div>
                    </div>

                    <div className='profile  flex al-end'>
                        <Image
                            src={profile}
                            alt='Michel Raupp'
                            width={"auto"}
                            height={360}
                        />
                        <div className='status flex jc-start gap-base absolute'>
                            <div></div>
                            <p>Hello world
                                <span>:)</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='wrapper flex col gap-lg al-start'>
                    <h1 className='title title-primary'>
                    {dict.hero.title}
                    </h1>

                    <div className='container flex col al-start gap-base'>
                        <h2>Michel Raupp</h2>

                        <p>
                        {dict.hero.description}
                        </p>
                    </div>

                    <Socials />
                </div>

            </div>
        </StyledHeroSection >
    )
}

export default HeroSection