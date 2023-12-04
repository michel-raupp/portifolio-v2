'use client';
import Image from 'next/image'
import { StyledDropdownMenu } from './styles'
import DropdownButton from '../../buttons/dropdown-button'

//imagens
import close from '../../../assets/icons/close-button.svg'
import MenuItems from '../menu-items'
import Socials from '../../socials'

function DropdownMenu({ closeDropdown, isDropdownOpen }) {

    const handleBackgroundClick = () => {
        closeDropdown();
        console.log('fechou', isDropdownOpen)

    };

    return (
        <StyledDropdownMenu isopen={isDropdownOpen ? 'true' : 'false'}>
            <div className='flex col jc-between'>
                <div className='top flex jc-between'>
                    <Image
                        onClick={handleBackgroundClick}
                        src={close}
                        alt='close'
                        width={24}
                        height={24}
                    />
                </div>

                <MenuItems closeDropdown={closeDropdown} />

                <div className='flex col al-end jc-between'>
                    <hr />
                    <Socials />
                </div>
                
                <div
                    className='background-menu'
                    onClick={handleBackgroundClick}
                ></div>
            </div>

        </StyledDropdownMenu>
    )
}

export default DropdownMenu