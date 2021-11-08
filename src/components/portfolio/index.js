import React from 'react'
import {
    PortfolioContainer,
    PortfolioH1,
    PortfolioElement,
    PortfolioElementBody,
    PortfolioElementTitle,
    PortfolioElementDescription,
    PortfolioImage
} from './portfolioElements'

const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">
        
            <PortfolioH1>Portfolio</PortfolioH1>
            
            <PortfolioElement>
                <PortfolioElementBody>
                    <PortfolioElementTitle>Personal Website</PortfolioElementTitle>
                    <PortfolioElementDescription>
                        Content coming soon
                    </PortfolioElementDescription>
                    <PortfolioImage></PortfolioImage>
                </PortfolioElementBody>
            </PortfolioElement>

            <PortfolioElement>
                <PortfolioElementBody>
                    <PortfolioElementTitle>Cryptocurency White Paper</PortfolioElementTitle>
                    <PortfolioElementDescription>
                        Content coming soon
                    </PortfolioElementDescription>
                    <PortfolioImage></PortfolioImage>
                </PortfolioElementBody>
            </PortfolioElement>
        </PortfolioContainer>
    )
}

export default Portfolio