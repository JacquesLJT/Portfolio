import React from 'react'
import {
    ContactContainer,
    ContactTextContainer,
    ContactH1,
    ItemWrapper,
    ContactLink
} from './contactElements'

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactTextContainer>
            <ContactH1>Contact Me!</ContactH1>

                <ItemWrapper>
                    <ContactLink href="mailto:me@landonthibodeau.com">Email Me</ContactLink>
                    <ContactLink href="/resume" target="_blank">Download my Resume</ContactLink>
                </ItemWrapper>

            </ContactTextContainer>
        </ContactContainer>
    )
}

export default Contact
