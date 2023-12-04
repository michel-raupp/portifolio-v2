'use client'
import Link from 'next/link'
import { StyledMenuItems } from './styles'
import { getDictionaryUseClient } from '../../../dictionaries/default-dictionaries-use-client';


function MenuItems({ closeDropdown, lang }) {
    const dict = getDictionaryUseClient(lang);

    const menuData = [
        // { text: dict.menu_items.home, link: '#home' },
        { text: dict.menu_items.about, link: '#about' },
        { text: dict.menu_items.projects, link: '#projects' },
        { text: dict.menu_items.experiences, link: '#experiences' },
        { text: dict.menu_items.contact, link: '#contact' },
    ];

    const handleCloseMenu = () => {
        closeDropdown();
        console.log('fechou');
    };

    const handleLinkClick = (link) => (e) => {
        e.preventDefault();
        const targetElement = document.querySelector(link);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop - 160;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            handleCloseMenu();
        }
    };

    const handleLinkClickWrapper = (link) => (e) => {
        handleCloseMenu();
        handleLinkClick(link)(e);
    };

    return (
        <StyledMenuItems>
            <div className='flex gap-lg'>
                {menuData.map((menuItem, index) => (
                    <Link
                        key={index}
                        href={menuItem.link}
                        onClick={handleLinkClickWrapper(menuItem.link)}
                    >
                        <div className='flex gap-xs'>
                            <span>#</span>
                            <p>{menuItem.text}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </StyledMenuItems>
    );
}

export default MenuItems;