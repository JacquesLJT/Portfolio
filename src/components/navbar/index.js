import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLink,
    MobileIcon
} from './navbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Landon Thibodeau</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon> 
                    <NavMenu>
                        <NavItem>
                            <NavLink to='home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='skills'>Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='portfolio'>Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='experience'>Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact'>Contact Me</NavLink>
                        </NavItem>
                    </NavMenu>   
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
