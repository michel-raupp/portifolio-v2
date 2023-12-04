'use client';
import {useEffect, useState } from 'react'

import {getDictionaryUseClient} from '../../dictionaries/default-dictionaries-use-client'

import HeroSection from "../../components/section/hero";
import AboutSection from "../../components/section/about";
import ProjectsSection from "../../components/section/projects";
import ExperienceSection from "../../components/section/experience";
import ContactSection from "../../components/section/contact";

export default function Home({params}) {
  useEffect(() => {
    const headerElement = document.getElementById('header');

    if (headerElement) {
      const headerHeight = headerElement.offsetHeight;

      document.body.style.marginTop = `${headerHeight}px`;

      return () => {
        document.body.style.marginTop = '0';
      };
    }
  }, []);

  const dict = getDictionaryUseClient(params.lang);

  return (
    <main className='flex col gap-2xl'>
      <HeroSection lang={params.lang} dict={dict} />
      <AboutSection lang={params.lang} dict={dict} />
      <ProjectsSection lang={params.lang} dict={dict} />
      <ExperienceSection lang={params.lang} dict={dict} />
      <ContactSection lang={params.lang} dict={dict} />
    </main>
  )
}
