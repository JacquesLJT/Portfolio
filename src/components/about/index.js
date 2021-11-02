import React from 'react'
import {
    AboutContainer,
    AboutTextContainer,
    AboutH1,
    AboutBody,
    AboutP,
    MobileAbout
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
                </AboutBody>
            </AboutTextContainer>

            <MobileAbout>
                <AboutH1>About Me!</AboutH1>
                <AboutBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget finibus ex, quis molestie lacus. Nulla vitae dolor ut odio pretium condimentum.
                    Nullam non dui euismod, vestibulum ex non, varius elit. Vestibulum id arcu lobortis, tempor risus nec, consectetur quam. Nulla malesuada eu est eu
                    rhoncus. Sed non laoreet metus. Curabitur auctor at orci a fringilla. Vivamus rutrum nibh nec tincidunt venenatis. Etiam tristique turpis erat, quis
                    sodales arcu laoreet quis. Pellentesque feugiat consequat tellus vitae commodo. Cras vitae ligula vitae diam euismod imperdiet non non orci. Vivamus
                    egestas eget magna nec placerat. Pellentesque ut odio a tortor commodo blandit. Nunc placerat erat a orci egestas semper.
                </AboutBody>
            </MobileAbout>
        </AboutContainer>
    )
}

export default About
