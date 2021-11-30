import React from 'react'
import {
    AboutContainer,
    AboutTextContainer,
    AboutH1,
    AboutBody,
    AboutP,
    Space
} from './aboutElements'

const About = () => {
    return (
        <AboutContainer id="about">

            <AboutTextContainer>
                <AboutH1>About Me!</AboutH1>
                <AboutBody>
                    <AboutP>
                        As a kid I could sit in front of microsoft paint for hours. just drawing lines and shapes. Filling them with colors. I thought it was so interesting. I was facinated with
                        how I could draw things with the computer. Later in my childhood, I wanted to understand how computers ran programs and for that I watched youtube videos. My first introduction
                        to programing was watching a video on how to make a program with the Batch scripting language. I didn't comprehend what was actually happening, but I was intrigued.
                        <Space />
                        I was likely on the internet more than other kids, and from that I wanted to learn how to make a website. I watched hours of video on HTML struggling to grasp what was happening, but
                        From that I built a very simple site of just plain text and images. I thought that was the coolest thing at the time.
                        This was still before I knew what CSS or Javascript was. Continuing, I was introduced to the Arduino language from a neighborhood friend, as well as an 
                        introduction to robotics through a summer camp offered by the University of Southern Maine. 
                        <Space />
                        During highschool, I was very excited to take a dedicated programming class. There I learned an introduction to Java. I wanted to learn more, but due to the circumstances, I had difficulty
                        learning more on my own.
                        <Space />
                        Currently as a Junior at the University of Maine, I have a solid foundation in Python, Java, Javascript, and C from material taught in my courses. I'm self taught in HTML, CSS, and Javascript
                        with some knowledge of React. I've also been learning C++, also self taught.
                    </AboutP>
                </AboutBody>
            </AboutTextContainer>
        </AboutContainer>
    )
}

export default About
