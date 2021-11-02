import React from 'react'
import {
    ContactContainer,
    H1Wrapper,
    ContactH1,
    ContactBody,
    ContactItem
} from './contactElements'

const Contact = () => {
    return (
        <ContactContainer>
            <H1Wrapper>
                <ContactH1>Contact Me</ContactH1>
            </H1Wrapper>
            <ContactBody>
                <ContactItem href="mailto:me@landonthibodeau.com">Email Me</ContactItem>
                <ContactItem href="/resume" target="_blank">Download my Resume</ContactItem>
            </ContactBody>
        </ContactContainer>
    )
}

export default Contact
