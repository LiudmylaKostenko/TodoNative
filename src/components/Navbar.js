import  React from 'react';
import { NavbarStyled, TitleApplication } from '../styledComponents';

export const Navbar = ({ title }) => {
    return (
        <NavbarStyled>
            <TitleApplication>{title}</TitleApplication>
        </NavbarStyled>
    )
};


