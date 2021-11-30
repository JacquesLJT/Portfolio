import styled from "styled-components";

export const ContactContainer = styled.div`
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

export const ContactTextContainer = styled.div`
    width: 70%;
    padding: 30px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 12px 12px 10px #0B3954;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
        border-radius: 0;
        box-shadow: none;
    }
`;

export const ContactH1 = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: #D36060;
    width: 100%;
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media and screen (max-width: 768px) {
        display: block;
    }
`;

export const ContactLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
    min-height: 30px;
    min-width: 400px;
    border-radius: 10px;
    border: 5px solid #0B3954;
    background: #D36060;
    font-size: 24px;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s ease-in-out;
    //box-shadow: 12px 12px 10px #0B3954;

    &:hover {
        opacity: 0.8;
        transition: all 0.2s ease-in-out;
    }

    &:visited {
        color: #fff;
    }

`;