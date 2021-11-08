import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 30px;
    //height: 400px;
    position: relative;
    z-index: 1;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    @media screen and (max-width: 768px) {
        display: flex;
        padding: 0 24px;
    }
`;

export const AboutTextContainer = styled.div`
    width: 50%;
    position: relative;
    display: block;
    color: #fff;
    border-radius: 25px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.7);

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const AboutH1 = styled.h1`
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

export const AboutBody = styled.div`
    padding-top: 1rem;

    @media screen and (max-width: 768px) {
        padding-bottom: 4rem;
    }
`;

export const MobileAbout = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const AboutP = styled.p`
    color: #0B3954;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 1rem;
    color: #0B3954;
`;