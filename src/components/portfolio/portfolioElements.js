import styled from "styled-components";

export const PortfolioContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

`;

export const PortfolioTextContainer = styled.div`
    width: 80%;
    padding: 30px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.7);
`;

export const PortfolioH1 = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: #D36060;
`;

export const PortfolioElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PortfolioElementBody = styled.div`
    border: 3px solid #fff;
    background-color: #D36060;
    border-radius: 10px;
    padding: 30px;
    margin: 30px;
`;

export const PortfolioElementTitle = styled.h2`
    display: flex;
    justify-content: center;
    color: #fff;
`;

export const PortfolioElementDescription = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
`;

export const PortfolioImage = styled.img``;