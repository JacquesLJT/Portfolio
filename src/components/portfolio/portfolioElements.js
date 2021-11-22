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
    width: 70%;
    padding: 30px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 25px;
    box-shadow: 12px 12px 10px #0B3954;

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
    padding-bottom: 10px;
    border-bottom: 3px dashed #0B3954;
`;

export const PortfolioElementWrapper = styled.div``;

export const PortfolioElement = styled.div`
    padding: 20px;
    border-bottom: 3px dashed #0B3954;

    @media screen and (max-width: 768px) {
    }
`;

export const PortfolioElementTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 36px;
    color: #D36060;
    padding-bottom: 20px;

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
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    padding-right: 10px;
`;

export const PortfolioImage = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 1:1;
    box-shadow: 12px 12px 10px #0B3954;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        aspect-ratio: 1:1;
    }
`;

export const PortfolioElementDescription = styled.p`
    width: 50%;
    font-size: 20px;
    font-weight: 800;
    color: #0B3954;
    padding-left: 30px;

    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 10px;
    }
`;

export const Subtitle = styled.h2`
    text-align: center;
    color: #D36060;
    padding: 20px;
`;

export const Space = styled.div`
    height: 30px;
`;

export const ButtomContainer = styled.div`
    display: flex;
    padding-top: 30px;
    justify-content: center;
    align-items: center;
`;

export const PortfolioButton = styled.button`
    display: flex;
    height: 75px;
    width: 250px;
    font-size: 24px;
    color: #fff;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-color: #D36060;
    border: 5px solid #0B3954;
    border-radius: 10px;
    cursor: pointer;
    //box-shadow: 12px 12px 10px #0B3954;
    text-decoration: underline;

    &:hover {
        opacity: 0.8;
    }
`;