import React from 'react'
import {
    PortfolioContainer,
    PortfolioElement,
    PortfolioHeader,
    PortfolioBody,
    PortfolioElementTitle,
    PortfolioElementDescription
} from './portfolioElements'

const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">

            <PortfolioHeader>Portfolio</PortfolioHeader>

            <PortfolioBody>

                <PortfolioElement>
                    <PortfolioElementTitle>Personal Website</PortfolioElementTitle>
                    <PortfolioElementDescription>Content Coming Soon</PortfolioElementDescription>
                </PortfolioElement>

                <PortfolioElement>
                    <PortfolioElementTitle>Crypocurrency White Paper</PortfolioElementTitle>
                    <PortfolioElementDescription>Content Coming Soon</PortfolioElementDescription>
                </PortfolioElement>
            
            </PortfolioBody>
        </PortfolioContainer>
    )
}

export default Portfolio