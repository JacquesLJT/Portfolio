import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #D36060;
    height: 80px;
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
    position: fixed;
    font-size: 2rem;
    top: 0;
    z-index: 10;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
`;

export const NavLogo = styled.a`
    color: #fff;
    font-family: 'Exo 2', sans-serif;
    cursor: pointer;
    font-size: 24px;
    text-decoration: none;
    font-weight: bold;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    width: 130px;
    text-align: center;
`;

export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 100%;
    width: 100%;
    cursor: pointer;
    font-size: 20px;
`;
