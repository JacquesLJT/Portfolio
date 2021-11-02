import React from 'react'
import { 
        HeroContainer,
        HeroTextContainer,
        HeroH1, 
        HeroBody, 
        LinkOut, 
        HeroImageContainer, 
        HeroImage  
    } from './heroElements'

const Hero = () => {
    return (
        <HeroContainer id="home">
            <HeroTextContainer>
                <HeroH1>Hey, I'm Landon!</HeroH1>
                <HeroBody>
                    I'm a student studying at the <LinkOut target="_blank" href="https://umaine.edu">University of Maine</LinkOut>, in Orono. Pursuing
                    a Bachelor's of science in Computer Science with a minor in Computer Engineering.
                </HeroBody>
            </HeroTextContainer>
            <HeroImageContainer>
                <HeroImage src='https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fprofile.jpeg?alt=media&token=6954e6cd-d7b3-4343-9e21-f5642105141d' alt="Picture of Landon Thibodeau"></HeroImage>
            </HeroImageContainer>
        </HeroContainer>
    )
}

export default Hero