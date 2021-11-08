import styled from "styled-components";

export const ContactContainer = styled.div`
    display: block;
    justify-content: space-between;
    background: #CFD6EA;
    padding: 30px;
    position: relative;
    z-index: 1;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    @media and screen (max-width: 768px) {
        display: block;
    }
`;

export const ContactTitle = styled.h1`
    margin: 0;
    font-size: 48px;
    color: #D36060;
    z-index: 1;
    width: 100%;
    text-align: left;
`;

export const ItemWrapper = styled.div`
    display: inline-block;
    padding: 20px;
    margin: 20px;

    @media and screen (max-width: 768px) {
        display: block;
    }
`;

export const ContactLink = styled.a`
    width: 50%;
    padding: 20px;
    border-radius: 10px;
    border: 5px solid #fff;
    background: #D36060;
    font-size: 24px;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
        transition: all 0.2s ease-in-out;
    }

    &:visited {
        color: #fff;
    }

`;