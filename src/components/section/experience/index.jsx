'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { StyledExperienceSection } from './styles'
import ProjectCard from "../../cards/project-card"
import { useEffect, useState } from 'react'
import ExperienceCard from '../../cards/experience-card'

// images
import job1 from '../../../assets/images/job-1.webp'
import job2 from '../../../assets/images/job-2.webp'
import job3 from '../../../assets/images/job-3.webp'

//icons
import arrow from '../../../assets/icons/arrow-icon.svg'
import { getDictionaryUseClient } from '../../../dictionaries/default-dictionaries-use-client'

const ExperienceSection = ({dict}) => {

    const experiencesData = [
        {
            id: 1,
            title: dict.experiences.job_1.title,
            summary:  dict.experiences.job_1.summary,
            company:  dict.experiences.job_1.company,
            date:  dict.experiences.job_1.title,
            image: job1,
        },
        {
            id: 2,
            title: dict.experiences.job_2.title,
            summary:  dict.experiences.job_2.summary,
            company:  dict.experiences.job_2.company,
            date:  dict.experiences.job_2.title,
            image: job2,
        },
        {
            id: 3,
            title: dict.experiences.job_3.title,
            summary:  dict.experiences.job_3.summary,
            company:  dict.experiences.job_3.company,
            date:  dict.experiences.job_3.title,
            image: job3,
        },
    
    ];

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const sectionOffsetTop = document.getElementById('home')?.offsetTop || 0;
        const windowHeight = window.innerHeight;

        let newScrollPercentage = ((scrollTop - sectionOffsetTop) / (document.documentElement.scrollHeight - windowHeight)) * 100;

        newScrollPercentage = Math.max(0, Math.min(100, newScrollPercentage));

        setScrollPercentage(newScrollPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledExperienceSection id="experiences">
            <div className='flex col al-start gap-lg'>
                <div className='text-wrapper flex col al-start gap-lg'>
                    <h2 className='title-secondary'>{dict.experiences.title}</h2>
                    <p>
                        {dict.experiences.description}
                    </p>
                </div>
                <div className='wrapper flex al-start gap-lg relative'>
                    <Image
                        className='arrow absolute'
                        src={arrow}
                        alt=''
                        height={30}
                        width={30}
                        style={{ top: `${Math.min(80, Math.max(20, -25 + scrollPercentage))}%` }}
                    />

                    <div className='flex col gap-xl'>
                        {experiencesData.map((experience) => (
                            <ExperienceCard key={experience.id} experience={experience} />
                        ))}
                    </div>
                </div>
            </div>
        </StyledExperienceSection>
    );
};

export default ExperienceSection;