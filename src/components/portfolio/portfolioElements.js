import styled from "styled-components";

export const PortfolioContainer = styled.div`
    display: block;
    background: #CFD6EA;
    padding: 30px;
    justify-content: space-between;
    position: relative;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    @media and screen (max-width: 768px) {
        display: block;
        padding: 0;
    }
`;

export const PortfolioHeader = styled.h1`
    font-size: 48px;
    color: #D36060;
    width: 100%;
    text-align: left;
`;

export const PortfolioBody = styled.div`
`;

export const PortfolioElement = styled.div`
    display: inline-block;
    padding: 20px;
    margin: 20px;
    border: 5px solid #fff;
    border-radius: 10px;
    background: #D36060;
    color: #fff;

    @media and screen (max-width: 768px) {
        display: block;
    }
`;

export const PortfolioElementTitle = styled.h2``;

export const PortfolioElementDescription = styled.p``;
