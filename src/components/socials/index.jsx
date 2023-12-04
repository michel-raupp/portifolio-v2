'use client'
import Image from 'next/image'
import Link from 'next/link'

//imagens
import github from '../../assets/icons/github-icon.svg'
import instagram from '../../assets/icons/instagram-icon.svg'
import linkedin from '../../assets/icons/linkedin-icon.svg'
import email from '../../assets/icons/email-icon.svg'
import { StyledSocial } from './styles'

function Socials() {
    return (
        <StyledSocial >
            <div className='flex gap-base'>
                <Link
                    className='github'
                    href={'https://github.com/michel-raupp'}
                    target='blank'
                    rel="noopener noreferrer"
                >
                    <Image
                        src={github}
                        alt='github'
                        height={40}
                        width={'auto'}
                    />
                </Link>

                <Link
                    className='instagram'
                    href={'https://www.instagram.com/rauppmichel/'}
                    target='blank'
                    rel="noopener noreferrer"
                >
                    <Image
                        src={instagram}
                        alt='instagram'
                        height={33}
                        width={'auto'}
                    />
                </Link>

                <Link
                    className='linkedin'
                    href={'https://www.linkedin.com/in/michelraupp/'}
                    target='blank'
                    rel="noopener noreferrer"
                >
                    <Image
                        src={linkedin}
                        alt='linkedin'
                        height={30}
                        width={'auto'}
                    />
                </Link>

                <Link
                    className='email'
                    href={'mailto:michelraupp@outlook.com'}
                    target='blank'
                    rel="noopener noreferrer"
                >
                    <Image
                        src={email}
                        alt='email'
                        height={40}
                        width={'auto'}
                    />
                </Link>
            </div>
        </StyledSocial >
    )
}

export default Socials