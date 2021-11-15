import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    margin-top: 80px;
    padding: 30px;
    position: relative;
    justify-content: center;
    align-items: center;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
`;

export const HeroTextContainer = styled.div`
    position: relative;
    width: 60%;
    padding: 30px;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 25px;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 0;
    }
`;

export const HeroH1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    color: #D36060;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        margin-bottom: 20px;
    }
`;

export const MobileImage = styled.img`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 200px;
        width: 200px;
        object-fit: cover;
        border-radius: 50%;
        border: 5px solid #fff;
        position: relative;
        margin: auto auto;
    }
`;

export const HeroBody = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const HeroP = styled.p`
    font-size: 36px;
    color: #D36060;
    width: 70%;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        width: 100%;
        text-align: center;
    }
`;

export const LinkOut = styled.a`
    font-weight: 800;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid #0B3954;
    color: #0B3954;

    &:visited {
        color: #0B3954;
    }

    &:hover {
        font-style: italic;
    }
`;

export const HeroImageContainer = styled.div`

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const HeroImage = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #fff;
    align-items: left;
    position: relative;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;