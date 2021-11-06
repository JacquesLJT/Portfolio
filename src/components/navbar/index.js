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

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon> 
                    <NavMenu>
                        <NavItem>
                            <NavLink to='home' offset={-80} smooth={true} duration={1000}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='about' offset={-80} smooth={true} duration={1000}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='skills' offset={-80} smooth={true} duration={1000}>Skills</NavLink>
                        </NavItem>
                        <NavLogo href='/'>Landon Thibodeau</NavLogo>
                        <NavItem>
                            <NavLink to='portfolio' offset={-80} smooth={true} duration={1000}>Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='experience' offset={-80} smooth={true} duration={1000}>Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact' offset={-80} smooth={true} duration={1000}>Contact Me</NavLink>
                        </NavItem>
                    </NavMenu>   
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
