/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import Link from 'next/link'

import { StyledProjectCard } from './styles'

function ProjectCard({ project, dict }) {
    return (
        <StyledProjectCard>
            <Link
                href={project.link}
                target="_blank" rel="noopener noreferrer"
            >
                <div className='flex col gap-base al-start'>
                    <h3><span>&gt;</span>{project.title}</h3>
                    <Image
                        src={project.image}
                        alt={project.title}
                        height={270}
                        width={270}
                    />

                    <ul className='flex gap-sm'>
                        {project.technologies.map((tech, index) => (
                            <li key={index}>
                                <p>{tech}</p>
                            </li>
                        ))}
                    </ul>

                    <div className='flex link-btn'>
                        <p>{dict.projects.button}</p>
                    </div>

                </div>
            </Link>
        </StyledProjectCard>
    );
}

export default ProjectCard;