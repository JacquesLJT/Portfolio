import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 30px;
    height: 400px;
    position: relative;
    z-index: 1;
    background: #CFD6EA;

    @media screen and (max-width: 768px) {
        display: flex;
        padding: 0 24px;
    }
`;

export const AboutTextContainer = styled.div`
    width: 45%;
    position: relative;
    display: block;

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
    padding-bottom: 1rem;
`;