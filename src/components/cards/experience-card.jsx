/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import Link from 'next/link'

import { StyledExperienceCard } from './styles'

function ExperienceCard({ experience }) {

    return (
        <StyledExperienceCard>
            <Image
                src={experience.image}
                alt={experience.title}
                height={340}
                width={340}
            />
            <div className='flex col al-start jc-start gap-base'>
                <h3 className='title-secondary'>{experience.title}</h3>

                <div className='container'>
                    <p>{experience.summary}</p>
                </div>

                <div className='infos flex jc-between'>
                    <p>{experience.company}</p>
                    <p>{experience.date}</p>
                </div>
            </div>
        </StyledExperienceCard>
    );
};

export default ExperienceCard;