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
    Subtitle,
    PortfolioImageContainer,
    PortfolioImage,
    Space,
    PortfolioButton,
    ButtomContainer,
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
                    <PortfolioElementDescription>
                        <Subtitle>Proposal</Subtitle>
                            During the first semester of my Junior year of college, I took a course called Business and Technical Writing. One of the units for that course
                            was to write a white paper on a topic of our choosing that tied in well with our interests and/or major/career goals. I had some experience with buying 
                            and selling cryptocurrencies, and at the time I was planning on minoring in economics, so I wanted to explore the feasability of cryptocurrencies being used
                            more as a fiat currency.
                            <Space />
                            My original thought for a paper was to explore and solidifty my idea that cryptocurrencies had no future as a replacement or addition to fiat currencies
                            due to their poor ability to hold value. Through my reaserch, I discovered the development and implementation of Central Bank Digital Currencies (CBDCs) as a response to the rise of
                            stablecoins and discovered a paper written by Columbia SIPA that explored the use of cryptocurrencies in the remittance industry. I wanted to explore that idea further of using
                            cryptocurrencies as a means to pay remtances.
                            <Space />
                            At the bottom of this element is a link to the research proposal and to the final white paper.
                        <Subtitle>White Paper</Subtitle>
                            For the final white paper, I further explored the idea of using cryptocurrencies as a means to pay remittances. I explained what cryptocurrencies are and discussed both their
                            advantages and disadvantages. I took a look at what remittances are and the traditional ways that remittances are payed. Finally, I discussed how
                            cryptocurrencies can aid in the sending of remittances back home. 
                            <Space />
                            The final paper can be viewed below
                    </PortfolioElementDescription>
                    <PortfolioImageContainer>
                        <PortfolioImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2FResearch%20Proposal.jpg?alt=media&token=ee14bc24-d2b7-4fae-986c-097e46566b29"></PortfolioImage>
                        <PortfolioImage src="https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2FCryptocurrency%20white%20paper.jpg?alt=media&token=88f38d3d-c84d-4bc0-a77e-de891ae08758"></PortfolioImage>
                    </PortfolioImageContainer>
                </PortfolioElementBody>
                <ButtomContainer>
                    <PortfolioButton href="/proposal" target="_blank">View Proposal</PortfolioButton>
                    <PortfolioButton href="/paper" target="_blank">View Paper</PortfolioButton>
                </ButtomContainer>
            </PortfolioElement>

            <PortfolioElement>
                <PortfolioElementTitle>Pong game in Verilog</PortfolioElementTitle>
                <PortfolioElementBody>
                    <PortfolioImageContainer>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SYCcguFv3_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </PortfolioImageContainer>
                    <PortfolioElementDescription>
                        One of the courses that I took to progress towards a minor in Computer Engineering was Sequential Logic Systems. 
                        This course taught me, on an introductory level, how to design sequential logic and implementing logic on Altera FPGAs.
                        <Space />
                        As a final project in the course, we were tasked in groups of two to recreate the game of pong using Verilog and implement on the FPGA. 
                        We were provided with the modules resposible with correct output to a VGA monitor, as well as a demonstration on how to use the module, but we were
                        responsible for the rest of the functionality. 
                        <Space />
                        My role in the project was to design the play area of the game, draw the ball, and draw the paddles. 
                        I was also responsible for writting the logic to move the ball as well as for detecting collisions between the ball and the paddles, and between the ball and the edges of the play area.
                        <Space />
                        Below the final project report can be read as well as a link to the Github repository where the verilog code can be found.
                    </PortfolioElementDescription>
                </PortfolioElementBody>
                <ButtomContainer>
                    <PortfolioButton href="/projectreport" target="_blank">View Project report</PortfolioButton>
                    <PortfolioButton href="https://github.com/JacquesLJT/Pong" target="_blank">View Github</PortfolioButton>
                </ButtomContainer>
            </PortfolioElement>

            </PortfolioElementWrapper>

        </PortfolioTextContainer>
        </PortfolioContainer>
    )
}

export default Portfolio