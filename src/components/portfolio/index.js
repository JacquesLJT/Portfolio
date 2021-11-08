import React from 'react'
import {
    PortfolioContainer,
    PortfolioTextContainer,
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
        <PortfolioTextContainer>
            <PortfolioH1>Portfolio</PortfolioH1>
            
            <PortfolioElement>
                <PortfolioElementBody>
                    <PortfolioElementTitle>Personal Website</PortfolioElementTitle>
                    <PortfolioElementDescription>
                        Content coming soon
                    </PortfolioElementDescription>
                    <PortfolioImage src=""></PortfolioImage>
                </PortfolioElementBody>
            </PortfolioElement>

            <PortfolioElement>
                <PortfolioElementBody>
                    <PortfolioElementTitle>Cryptocurency White Paper</PortfolioElementTitle>
                    <PortfolioElementDescription>
                        Content coming soon
                    </PortfolioElementDescription>
                    <PortfolioImage src=""></PortfolioImage>
                </PortfolioElementBody>
            </PortfolioElement>
            
        </PortfolioTextContainer>
        </PortfolioContainer>
    )
}

export default Portfolio