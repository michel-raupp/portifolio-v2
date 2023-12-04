/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StyledProjectsSection } from './styles'
import ProjectCard from "../../cards/project-card"

// images
import frontend_img_1 from '../../../assets/images/front-end-img-1.webp'
import frontend_img_2 from '../../../assets/images/front-end-img-2.webp'
import frontend_img_3 from '../../../assets/images/front-end-img-3.webp'

import ux_img_1 from '../../../assets/images/ux-1.webp'
import ux_img_2 from '../../../assets/images/ux-2.webp'
import ux_img_3 from '../../../assets/images/ux-3.webp'


const projectsData = {
    frontend: [
        {
            id: 1,
            title: 'radiant_lobby.exe',
            image: frontend_img_1,
            technologies: ['next.js', 'javascript'],
            link: 'https://valorant-project-alpha.vercel.app/',
        },
        {
            id: 2,
            title: 'project_dungeon.exe',
            image: frontend_img_2,
            technologies: ['react.js', 'javascript'],
            link: 'https://project-dungeon.vercel.app/',
        },
        {
            id: 3,
            title: 'luigis_pizzaria.exe',
            image: frontend_img_3,
            technologies: ['react.js', 'javascript'],
            link: 'https://project-pizzaria.vercel.app/',
        },
    ],
    uxdesign: [
        {
            id: 4,
            title: 'Game HUDs | UX | UI',
            image: ux_img_1,
            technologies: ['Figma', 'Photoshop'],
            link: 'https://www.figma.com/proto/txUeGuOjqFXpbTXcrxQqeU/Game-HUDs?node-id=1-2',
        },
        {
            id: 5,
            title: 'Game Design | Pixel Arts',
            image: ux_img_2,
            technologies: ['Photoshop', 'Asesprite'],
            link: 'https://www.figma.com/proto/JLnxkoj4zZVSrEcCvj0bZY/Crypto-Farms-Land-Props?node-id=1-2',
        },
        ,
        {
            id: 6,
            title: 'Website Rebranding',
            image: ux_img_3,
            technologies: ['Figma', 'Photoshop'],
            link: 'https://www.youtube.com/watch?v=ub_jb2S0SEM',
        },

    ],
    // digitalarts: [
    //     {
    //         id: 7,
    //         title: 'Projeto Digital Arts 1',
    //         image: frontend_img_1,
    //         technologies: ['React', 'CSS', 'Node.js'],
    //         link: 'https://link-do-projeto7.com',
    //     },
    // ],
};

const categoryNames = {
    frontend: 'Front-end Dev',
    uxdesign: 'Visual Design',
    // digitalarts: 'digital arts',
};

function ProjectsSection({dict}) {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const renderProjects = () => {
        const projects = projectsData[activeCategory];

        return projects.map((project) => (
            <ProjectCard key={project.id} project={project} dict={dict}/>
        ));
    };

    const renderTabs = () => {
        const categories = [
            'frontend',
            'uxdesign',
            //'digitalarts'
        ];

        return categories.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'active' : ''}
            >
                <p>{categoryNames[category]}</p>
            </button>
        ));
    };

    return (
        <StyledProjectsSection id='projects'>
            <div className='flex gap-xl'>
                <div className='wrapper flex col al-start gap-lg '>
                    <h2 className='title-secondary'>
                        {dict.projects.title}
                    </h2>
                    <div className='tabs flex jc-start gap-base'>
                        {renderTabs()}
                    </div>

                    <div className='projects flex gap-lg'>
                        {renderProjects()}
                    </div>
                </div>
            </div>
        </StyledProjectsSection>
    );
}

export default ProjectsSection;