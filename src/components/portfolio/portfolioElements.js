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

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const PortfolioTextContainer = styled.div`
    position: relative;
    width: 60%;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 25px;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 0;
        padding: 10px;
    }
`;

export const PortfolioH1 = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: #D36060;
`;

export const PortfolioElementWrapper = styled.div``;

export const PortfolioElement = styled.div`
    padding: 30px;
    border-bottom: 3px dashed #0B3954;

    @media screen and (max-width: 768px) {
    }
`;

export const PortfolioElementTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 36px;
    color: #D36060;
    padding-bottom: 10px;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;

export const PortfolioElementBody = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const PortfolioImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
`;

export const PortfolioImage = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 1:1;

    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        aspect-ratio: 1:1;
    }
`;

export const PortfolioElementDescription = styled.p`
    width: 50%;
    font-size: 20px;
    color: #0B3954;
    padding-left: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 10px;
    }
`;

export const Space = styled.div`
    height: 10px;
`;

export const ButtomContainer = styled.div`
    display: flex;
    padding-top: 30px;
    justify-content: center;
    align-items: center;
`;

export const PortfolioButton = styled.button`
    display: flex;
    height: 100px;
    width: 200px;
    font-size: 24px;
    color: #fff;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-color: #D36060;
    border: 3px solid #fff;
    border-radius: 10px;

    &:hover {
        opacity: 0.9;
    }
`;