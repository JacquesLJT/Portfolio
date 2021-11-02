import React from 'react'
import {
    ContactContainer,
    ContactTitle,
    ItemWrapper,
    ContactLink
} from './contactElements'

const Contact = () => {
    return (
        <ContactContainer id="contact">
                <ContactTitle>Contact Me</ContactTitle>

                <ItemWrapper>
                    <ContactLink href="mailto:me@landonthibodeau.com">Email Me</ContactLink>
                </ItemWrapper>

                <ItemWrapper>
                    <ContactLink href="/resume" target="_blank">Download my Resume</ContactLink>
                </ItemWrapper>

        </ContactContainer>
    )
}

export default Contact
