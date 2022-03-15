import React from 'react'
import {
    FooterContainer,
    FooterColumn,
    FooterLogo,
    FooterLinkOut,
    FooterLinkS,
    FooterLocation,
    FooterRibbon,
    FooterRibbonLink,
    DownloadIcon,
    LinkedInIcon,
    GitHubIcon,
    TwitterIcon,
    Spacer
} from './footerElements'

const Footer = () => {
    return (
        <div>
        <FooterContainer>
            <FooterColumn>
                <FooterLogo>Landon Thibodeau</FooterLogo>
                <FooterLinkOut href="mailto:me@landonthibodeau.com" alt="me@landonthibodeau.com">me@landonthibodeau.com</FooterLinkOut>
                <FooterLocation>Freeport, ME</FooterLocation>
            </FooterColumn>

            <FooterColumn>
                <Spacer />
                <FooterLinkS to="home" offset={-80} smooth={true} duration={1000}>Home</FooterLinkS>
                <FooterLinkS to="about" offset={-80} smooth={true} duration={1000}>About</FooterLinkS>
                <FooterLinkS to="skills" offset={-80} smooth={true} duration={1000}>Skills</FooterLinkS>
                <FooterLinkS to="portfolio" offset={-80} smooth={true} duration={1000}>Portfolio</FooterLinkS>
                <FooterLinkS to="experience" offset={-80} smooth={true} duration={1000}>Experience</FooterLinkS>
                <FooterLinkS to="contact" offset={-80} smooth={true} duration={1000}>Contact</FooterLinkS>
            </FooterColumn>

            <FooterColumn>
                <Spacer />
                <FooterLinkOut href="/resume" target="_blank" alt="Resume">
                    <DownloadIcon />
                    Resume PDF Download
                </FooterLinkOut>
                <FooterLinkOut href="https://www.linkedin.com/in/landonthibodeau/" target="_blank" alt="LinkedIn">
                    <LinkedInIcon />
                    LinkedIn
                </FooterLinkOut>
                <FooterLinkOut href="https://github.com/JacquesLJT" target="_blank" alt="GitHub">
                    <GitHubIcon />
                    GitHub
                </FooterLinkOut>
                <FooterLinkOut href="https://twitter.com/landonthibodeau" target="_blank" alt="Twitter">
                    <TwitterIcon />
                    Twitter
                </FooterLinkOut>
            </FooterColumn>
        </FooterContainer>
        <FooterRibbon>
            Site by Landon Thibodeau | © 2022 | <FooterRibbonLink href="https://github.com/JacquesLJT/Portfolio" target="_blank" alt="GitHub Repo">GitHub Repo</FooterRibbonLink>
        </FooterRibbon>
        </div>
    )
}

export default Footer
