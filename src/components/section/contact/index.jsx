/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import Link from 'next/link'

// images
import tinyChar from '../../../assets/images/tiny-char.gif'
import profileChar from '../../../assets/images/profile-char.gif'

import { StyledContactSection } from './styles'
import Socials from '../../socials'

function ContactSection({ dict }) {
    return (
        <StyledContactSection id='contact'>
            <div className='wrapper flex gap-xl al-start'>

                <Image
                    className='profile-char'
                    src={profileChar}
                    alt='Michel Raupp'
                    width={250}
                    height={250}
                />

                <div className='flex col gap-lg al-start'>
                    <h2 className='title title-primary'>
                        {dict.contact.title}
                    </h2>
                    <p>
                        {dict.contact.description}   
                    </p>
                    <Socials />
                </div>

                <Image
                    className='tiny-char absolute'
                    src={tinyChar}
                    alt='Tiny Policeman'
                    width={'auto'}
                    height={80}
                />
            </div>
        </StyledContactSection >
    )
}

export default ContactSection