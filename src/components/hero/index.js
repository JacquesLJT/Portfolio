import React from 'react'
import profile from '../../webAssets/profile.jpeg'
import { HeroContainer, HeroTextContainer, HeroH1, HeroBody, LinkOut, HeroImageContainer, HeroImage } from './heroElements'

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
                <HeroImage src={profile} alt="Picture of Landon Thibodeau"></HeroImage>
            </HeroImageContainer>
        </HeroContainer>
    )
}

export default Hero