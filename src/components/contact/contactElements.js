import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    background: #CFD6EA;
    position: relative;
    padding: 30px;
    min-height: 100px;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

export const H1Wrapper = styled.div`
    display: block;
    width: 100%;
`;

export const ContactH1 = styled.h1`
    color: #D36060;
    font-size: 48px;
`;

export const ContactBody = styled.div`
    display: block;
    width: 100%;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const ContactItem = styled.a`
    border: 5px solid #fff;
    border-radius: 10px;
    padding: 15px;
    margin: 0 20px;
    font-size: 25px;
    background: #D36060;
    color: #fff;
    display: block;

    &:hover {
        color: #CFD6EA;
        transition: 0.2s ease-in-out;
    }

    &:visited {
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        margin-bottom: 1rem;
        font-size: 24px;
    }
`;