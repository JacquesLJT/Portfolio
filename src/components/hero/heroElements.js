import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 0 30px;
    height: 400px;
    position: relative;
    z-index: 1;
    background-color: #0B3954;
`;

export const HeroTextContainer = styled.div`
    width: 75%;
`;

export const HeroH1 = styled.h1`
    color: #fff;
`;

export const HeroBody = styled.p`
    font-size: 25px;
    color: #fff;
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
    height: 300px;
    width: 300px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin: auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const HeroImage = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
`;