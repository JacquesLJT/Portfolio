import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    background: #CFD6EA;
    justify-content: center;
    width: 100%;
    position: relative;
    padding: 0 30px;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

export const ContactH1 = styled.h1`
    color: #D36060;
    font-size: 48px;
    with: 100%;
`;

export const ContactBody = styled.div`
    margin-top: 20px;
    padding: 0 5%;
    width: 100%;
    justify-content: center;
    display: flex;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const ContactItem = styled.a`
    display: flex;
    border: 5px solid #fff;
    border-radius: 10px;
    padding: 15px;
    margin: 0 20px;
    font-size: 25px;
    background: #D36060;
    color: #fff;

    &:hover {
        color: #CFD6EA;
        transition: 0.2s ease-in-out;
    }

    &:visited {
        color: #fff;
    }
`;