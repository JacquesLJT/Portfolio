import React from 'react'
import {
    ExperienceContainer,
    ExperienceH1,
    ExperienceElementWrapper,
    ExperienceTextContainer,
    ExperienceElement,
    ExperienceElementBody,
    ExperienceTitle,
    ExperienceLocation,
    ExperienceDates,
    ExperienceDescription,
    ExperienceItems
} from './experienceElements'

const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <ExperienceTextContainer>

                <ExperienceH1>Experience</ExperienceH1>

                <ExperienceElementWrapper>

                <ExperienceElement>
                    <ExperienceElementBody>
                    <ExperienceTitle>Greenhouse Retail Sales</ExperienceTitle>
                    <ExperienceLocation>Estabrook's, Yarmouth, ME</ExperienceLocation>
                    <ExperienceDates>May 2021 - August 2021</ExperienceDates>
                    <ExperienceDescription>
                        <ExperienceItems>Maintained the health of flora</ExperienceItems>
                        <ExperienceItems>Kept the greenhouses stocked and clean</ExperienceItems>
                        <ExperienceItems>Resolved questions from customers</ExperienceItems>
                    </ExperienceDescription>
                    </ExperienceElementBody>
                </ExperienceElement>

                <ExperienceElement>
                    <ExperienceElementBody>
                    <ExperienceTitle>General Merchandise Team Member</ExperienceTitle>
                    <ExperienceLocation>Target, Topsham, ME</ExperienceLocation>
                    <ExperienceDates>September 2017 - January 2021</ExperienceDates>
                    <ExperienceDescription>
                        <ExperienceItems>Modified workflow depending on where help was needed</ExperienceItems>
                        <ExperienceItems>Kept shelves stocked and organized to maintain a high standard of quality</ExperienceItems>
                        <ExperienceItems>Resolved questions from customers</ExperienceItems>
                    </ExperienceDescription>
                    </ExperienceElementBody>
                </ExperienceElement>

                </ExperienceElementWrapper>

            </ExperienceTextContainer>
        </ExperienceContainer>
    )
}

export default Experience
