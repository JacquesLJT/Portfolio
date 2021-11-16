import React from 'react'
import {
    PortfolioContainer,
    PortfolioTextContainer,
    PortfolioH1,
    PortfolioElementWrapper,
    PortfolioElement,
    PortfolioElementBody,
    PortfolioElementTitle,
    PortfolioElementDescription,
    PortfolioImageContainer,
    PortfolioImage,
    Space,
    PortfolioButton,
    ButtomContainer
} from './portfolioElements'

const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">
        <PortfolioTextContainer>
            <PortfolioH1>Portfolio</PortfolioH1>
            
            <PortfolioElementWrapper>
            <PortfolioElement>
            <PortfolioElementTitle>Personal Website</PortfolioElementTitle>
                <PortfolioElementBody>
                    <PortfolioImageContainer>
                        <PortfolioImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fwebsite.jpeg?alt=media&token=4fbd3633-f583-447b-9689-0a5abcc2745d"></PortfolioImage>
                    </PortfolioImageContainer>
                    <PortfolioElementDescription>
                        Before building this website, I wanted something that would best set me apart from other students and job applicants. 
                        I thought the best way for me to accomplish that was to build a website that would be a showcase for my skills and talents.
                        <Space />
                        In a matter of a few weeks, I took the initiative to learn introductory HTML, CSS, JavaScript, and React.js to a strong enough
                        extent to build this website to a quality that I am proud of. I went from having no introductory experience in any of those languages,
                        to having a portfolio that I can be proud of showing to potential employers and colegues.
                        <Space />
                        The Github repository for this website is viewable to anyone at the github link in the footer
                    </PortfolioElementDescription>
                </PortfolioElementBody>
            </PortfolioElement>

            <PortfolioElement>
            <PortfolioElementTitle>Crypocurrency White Paper</PortfolioElementTitle>
                <PortfolioElementBody>
                    <PortfolioImageContainer>
                        <PortfolioImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fimage-coming-soon-placeholder.png?alt=media&token=6138fc06-682a-41f5-8e34-0e04c4298aae"></PortfolioImage>
                    </PortfolioImageContainer>
                    <PortfolioElementDescription>
                        Description Coming Soon
                    </PortfolioElementDescription>
                </PortfolioElementBody>
                <ButtomContainer>
                    <PortfolioButton>View Proposal</PortfolioButton>
                    <PortfolioButton>View Paper</PortfolioButton>
                </ButtomContainer>
            </PortfolioElement>
            </PortfolioElementWrapper>

        </PortfolioTextContainer>
        </PortfolioContainer>
    )
}

export default Portfolio