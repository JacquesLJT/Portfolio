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
    
`;

export const HeroTextContainer = styled.div`
    position: relative;
    width: 60%;
    padding: 30px;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 25px;
`;

export const HeroH1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    color: #D36060;
`;

export const HeroBody = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeroP = styled.p`
    font-size: 36px;
    color: #D36060;
    width: 70%;
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
`;

export const HeroImage = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #fff;
    align-items: left;
    position: relative;
`;