import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    margin-top: 80px;
    padding: 30px;
    height: 400px;
    position: relative;
    z-index: 1;
    background-color: #0B3954;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    
`;



export const HeroTextContainer = styled.div`
    display: block;
    width: 50%;
`;

export const HeroH1 = styled.h1`
    font-size: 48px;
    color: #fff;
`;

export const HeroBody = styled.p`
    font-size: 36px;
    color: #fff;
    padding-top: 1rem;
`;

export const LinkOut = styled.a`
    font-weight: 800;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid #fff;

    &:visited {
        color: #fff;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #CFD6EA;
        border-bottom: 2px solid #CFD6EA;
    }
`;

export const HeroImageContainer = styled.div`
    display: block;
    width: 50%;
`;

export const HeroImage = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #fff;
    align-items: left;
    overflow: hidden;
    position: absolute;
    top: 25px;
    right: 10%;
`;