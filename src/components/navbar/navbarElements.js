import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #D36060;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    font-size: 1rem;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
        margin: 0;
    }
`;

export const MobileWrapper = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`;

export const MobileLogoContainer = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
`;

export const MobileLogo = styled.a`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        font-family: 'Exo 2', sans-serif;
    }
`;

export const NavLogo = styled.a`
    color: #fff;
    font-family: 'Exo 2', sans-serif;
    cursor: pointer;
    font-size: 36px;
    text-decoration: none;
    font-weight: bold;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
        height: min-content;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-align: center;

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
    cursor: pointer;
    font-size: 20px;

    &:hover {
        border-bottom: 3px solid #fff;
    }
`;
