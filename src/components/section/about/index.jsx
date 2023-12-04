/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { StyledAboutSection } from './styles'
import Socials from '../../socials'

// icons
import javascript from '../../../assets/icons/javascript.svg'
import react from '../../../assets/icons/react.svg'
import next from '../../../assets/icons/next.svg'
import figma from '../../../assets/icons/figma.svg'
import photoshop from '../../../assets/icons/photoshop.svg'
import drawing from '../../../assets/icons/drawing.svg'
import download from '../../../assets/icons/download.svg'

// CV
import docEn from "../../../assets/CV-Michel-Raupp-EN.pdf";
import docPt from "../../../assets/CV-Michel-Raupp-PT-BR.pdf";

function AboutSection({ dict, lang }) {
    const filePath = lang === 'en-US' ? docEn : docPt;

    return (
        <StyledAboutSection id='about'>
            <div className='window flex gap-xl al-start'>
                <div className='flex col gap-lg al-start'>
                    <h2 className='title-secondary'>
                        {dict.about.first_title}
                    </h2>

                    <div className='container'>
                        <p>
                            {dict.about.first_description}
                        </p>
                    </div>
                  
                    <a className="flex gap-base" href={filePath} download="Michel-Raupp-CV">
                        <p>{dict.about.download}</p>
                        <Image
                            src={download}
                            alt='download'
                            height={24}
                            width={24}
                        />
                    </a>
                </div>

                <div className='flex col gap-lg al-start'>
                    <h2 className='title-secondary'>
                        /hard-skills
                    </h2>

                    <div className='skills flex gap-base'>
                        <div className='flex col gap-sm'>
                            <div className='container flex'>
                                <Image
                                    src={javascript}
                                    alt='javascript'
                                    height={45}
                                    width={45}
                                />

                            </div>
                            <p>
                                javascript
                            </p>
                        </div>

                        <div className='flex col gap-sm'>
                            <div className='container flex'>
                                <Image
                                    src={next}
                                    alt='next'
                                    height={45}
                                    width={45}
                                />

                            </div>
                            <p>
                                next.js
                            </p>
                        </div>

                        <div className='flex col gap-sm'>
                            <div className='container flex'>
                                <Image
                                    src={react}
                                    alt='react'
                                    height={45}
                                    width={45}
                                />

                            </div>
                            <p>
                                react.js
                            </p>
                        </div>

                        <div className='flex col gap-sm'>
                            <div className='container flex'>
                                <Image
                                    src={figma}
                                    alt='figma'
                                    height={45}
                                    width={45}
                                />

                            </div>
                            <p>
                                figma
                            </p>
                        </div>

                        <div className='flex col gap-sm'>
                            <div className='container flex'>
                                <Image
                                    src={photoshop}
                                    alt='photoshop'
                                    height={45}
                                    width={45}
                                />

                            </div>
                            <p>
                                photoshop
                            </p>
                        </div>

                        <div className='flex col gap-sm'>
                            <div className='container flex'>
                                <Image
                                    src={drawing}
                                    alt='drawing'
                                    height={45}
                                    width={45}
                                />

                            </div>
                            <p>
                                {dict.about.drawing_skill}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledAboutSection >
    )
}

export default AboutSection