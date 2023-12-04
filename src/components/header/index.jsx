'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { StyledHeader } from './styles'
import DropdownButton from '../buttons/dropdown-button';
import DropdownMenu from './dropdown-menu/dropdown-menu';
import MenuItems from './menu-items';
import LanguageSwitcherButton from '../buttons/language-switcher-button'

export default function Header({ lang }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isLanguageOpen, setLanguageOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen((prevValue) => !prevValue);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleLanguageToggle = () => {
        setLanguageOpen((prevValue) => !prevValue);
    };
    
    const closeLanguage = () => {
        setLanguageOpen(false);
    };

    return (
        <StyledHeader id='header'>
            <div className='flash' />
            <header className='flex'>
                <div>
                    <div className='header-um flex jc-between'>
                        <Link href={'/'}>
                            <p className='title-secondary'>
                                /raupp
                            </p>
                        </Link>
                        <div className='only-mobile flex gap-lg'>
                            <LanguageSwitcherButton
                                isOpen={isLanguageOpen}
                                onToggle={handleLanguageToggle}
                                lang={lang} />
                            <DropdownButton isOpen={isDropdownOpen} onToggle={handleDropdownToggle} />
                        </div>


                        <div className='only-desktop flex gap-lg'>
                            <MenuItems closeDropdown={closeDropdown} lang={lang} />

                            <LanguageSwitcherButton
                                isOpen={isLanguageOpen}
                                onToggle={handleLanguageToggle}
                                lang={lang} />
                        </div>

                    </div>
                </div>
            </header>

            <div className='only-mobile'>

                <DropdownMenu
                    closeDropdown={closeDropdown}
                    isDropdownOpen={isDropdownOpen}
                    lang={lang} />

            </div>

        </StyledHeader>
    )
}
