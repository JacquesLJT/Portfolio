import styled from "styled-components";

export const PortfolioContainer = styled.div`
    background: #CFD6EA;
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 30px;
    position: relative;

    @media screen and (max-width: 768px) {
        display: flex;
        padding: 0;
    }
`;

export const PortfolioHeaderDiv = styled.div`
    display: relative;
    width: 100%;
`;

export const PortfolioBody = styled.div`
    display: relative;
    width: 100%;
`;

export const PortfolioElement = styled.div``;

export const PortfolioHeader = styled.h1`
    color: #D36060;
    font-size: 48px;
    position: relative;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        padding-top: 4rem;
        width: 100%;
        display: block;
        text-align: center;
    }
`;

export const PortfolioElementTitle = styled.h2`
    color: #0B3954;
    font-size: 24px;
    position: relative;

`;

export const PortfolioItemDescription = styled.p``;