'use client';

import { StyledDropdownButton } from './styles'

function DropdownButton({ isOpen, onToggle }) {
    return (
        <StyledDropdownButton>
            <input
                className="check-icon"
                id="check-icon"
                name="check-icon"
                type="checkbox"
                checked={isOpen}
                onChange={onToggle}
            />
            <label className="icon-menu flex col al-end relative" htmlFor="check-icon">
                <div className="bar relative bar--1"></div>
                <div className="bar relative bar--2"></div>
                <div className="bar relative bar--3"></div>
            </label>
        </StyledDropdownButton>
    );
}

export default DropdownButton;