import styled from "styled-components";
import { FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {Link as LinkS} from "react-scroll";

export const FooterContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    grid-gap: 1rem;
    background: #D36060;

    @media screen and (max-width: 768px) {
        grid-gap: 0.5rem;
        grid-template-columns: repeat(1, 1fr);
        padding: 1rem;
    }
`;

export const FooterColumn = styled.div`
    display: block;
    height: 100%;
    padding: 1rem;
    color: #fff;

    @media screen and (max-width: 768px) {
        padding: 1rem 0;
        text-align: center;
        height: min-content;
    }
`;

export const FooterLogo = styled.div`
    font-family: 'Exo 2', sans-serif;
    Font-size: 24px;
    display: block;
    margin-bottom: 0.1rem;
    colr: #fff;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
    }
`;

export const FooterLinkOut = styled.a`
    font-size: 12px;
    border-bottom: 1px dotted;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: block;
    margin-bottom: 1rem;
    width: max-content;
    color: #fff;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #CFD6EA;
    }

    &:visited {
        color: inherit;
    }

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        margin-bottom: 0.5rem;
    }

    `;

export const FooterLinkS = styled(LinkS)`
    font-size: 12px;
    border-bottom: 1px dotted;
    width: max-content;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: block;
    margin-bottom: 1rem;
    color: #fff;
    
    &:visited {
        color: inherit;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #CFD6EA;
    }

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        margin-bottom: 0.5rem;
    }
`;

export const FooterLocation = styled.div`
    display: block;
    font-size: 12px;
`;

export const FooterRibbon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    background: #0B3954;
`;

export const FooterRibbonLink = styled.a`
    margin-left: 5px;
    border-bottom: 1px dotted;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    color: #fff;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #CFD6EA;
    }

    &:visited {
        color: inherit;
    }
`;

export const DownloadIcon = styled(FaFileDownload)`
    padding-right: 10px;
    height: 0.75rem;
    width: auto;
`;

export const LinkedInIcon = styled(FaLinkedin)`
    padding-right: 10px;
    height: 0.75rem;
    width: auto;
`;

export const GitHubIcon = styled(FaGithub)`
    padding-right: 10px;
    height: 0.75rem;
    width: auto;
`;

export const TwitterIcon = styled(FaTwitter)`
    padding-right: 10px;
    height: 0.75rem;
    width: auto;
`;

export const Spacer = styled.div`
    display: none;
    height: 1rem;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;