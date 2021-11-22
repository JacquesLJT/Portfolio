import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    position: relative;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const AboutTextContainer = styled.div`
    width: 70%;
    position: relative;
    display: block;
    color: #fff;
    border-radius: 25px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 12px 12px 10px #0B3954;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
    }
`;

export const AboutH1 = styled.h1`
    color: #D36060;
    font-size: 48px;
    position: relative;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        dissplay: flex;
        justify-content: center;
        font-size: 36px;
    }
`;

export const AboutBody = styled.div`
    padding: 30px;

    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`;

export const AboutP = styled.p`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 1rem;
    color: #0B3954;

    @media screen and (max-width: 768px) {
        text-align: center;
        color: #0B3954;
        font-size: 24px;
`;