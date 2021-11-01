import React from 'react'
import {
    PortfolioContainer,
    PortfolioHeaderDiv,
    PortfolioElement,
    PortfolioHeader,
    PortfolioBody,
    PortfolioElementTitle,
    PortfolioItemDescription
} from './portfolioElements'

const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">
            <PortfolioHeaderDiv>
                <PortfolioHeader>Portfolio</PortfolioHeader>
            </PortfolioHeaderDiv>
            <PortfolioBody>
                <PortfolioElement>
                    <PortfolioElementTitle>Personal Website</PortfolioElementTitle>
                    <PortfolioItemDescription>This is filler</PortfolioItemDescription>
                </PortfolioElement>
            </PortfolioBody>
        </PortfolioContainer>
    )
}

export default Portfolio