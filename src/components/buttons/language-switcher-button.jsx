'use client'

import React, { useEffect, useState } from 'react';
import { defaultDictionary } from '../../dictionaries/default-dictionaries';
import { StyledLanguageButton } from './styles';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// icon
import location from '../../assets/icons/location-icon.svg'
import { getDictionaryUseClient } from '../../dictionaries/default-dictionaries-use-client';

export default function LanguageSwitcherButton({ isOpen, onToggle, lang }) {
    const dict = getDictionaryUseClient(lang);

    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState('en-US');

    useEffect(() => {

        const currentPathname = router.pathname || '/';
        const languageCodeFromPath = currentPathname.substring(1, 7);
        setSelectedLanguage(Object.keys(defaultDictionary).includes(languageCodeFromPath) ? languageCodeFromPath : 'en-US');

    }, [router.pathname]);

    const handleLanguageChange = (languageCode) => {
        const currentPathname = router.pathname || '/';
        const newPathname = `/${languageCode}${currentPathname.substring(6)}`;

        router.push(newPathname, undefined, { locale: languageCode });

        console.log(`Mudar para o idioma: ${languageCode}`);
        setSelectedLanguage(languageCode);
    };

    return (
        <StyledLanguageButton>
            <button
                aria-label="Toggle Language Dropdown"
                className='flex gap-base'
                onClick={onToggle}
            >
                <Image
                    src={location}
                    alt='language'
                    height={18}
                    width={18}
                />
                <p>{dict.lang_button.title}</p>
            </button>

            <ul className={`
                dropdown ${isOpen ? 'open' : ''}
                flex col al-end
            `}>
                {Object.keys(defaultDictionary).map((languageCode) => (
                    <li
                        key={languageCode}
                        onClick={() => handleLanguageChange(languageCode)}
                    >
                        {languageCode}
                    </li>
                ))}
            </ul>
        </StyledLanguageButton>
    );
}