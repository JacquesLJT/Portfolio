import React from 'react'
import {
    AboutContainer,
    AboutTextContainer,
    AboutH1,
    AboutBody,
    AboutP,
} from './aboutElements'

const About = () => {
    return (
        <AboutContainer id="about">

            <AboutTextContainer>
                <AboutH1>About Me!</AboutH1>
                <AboutBody>
                    <AboutP>
                        My first introduction into computing that I can remember was sitting in my fathers office as a kid and doodling in Microsoft paint.
                        I remember being fascinated by how I could control the mouse and put color on the screen. I wanted to know how it worked and that 
                        fascination never left me as I grew up. As a kid I've spent hours watching turtorials on youtube wanting to build my own website.
                        I created a very simple batch program quiz game that I brought to thanksgiving one year. 
                    </AboutP>
                    <AboutP>
                        More Soon!
                    </AboutP>
                </AboutBody>
            </AboutTextContainer>
        </AboutContainer>
    )
}

export default About
