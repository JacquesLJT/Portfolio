import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: left;
    padding: 30px;
    position: relative;
    z-index: 1;
    background: #0B3954;

    @media screen and (max-width: 768px) {
        display: flex;
        padding: 0 24px;
    }
`;

export const ExperienceTextContainer = styled.div``;

export const ExperienceElement = styled.div`
    display: inline-block;
    padding: 20px;
    margin-top: 20px;
    margin-left: 20px;
    justify-content: center;
    border: 5px solid #fff;
    border-radius: 10px;
    background: #D36060;
`;

export const ExperienceH1 = styled.h1`
    font-size: 48px;
    color: #fff;
`;

export const ExperienceTitle = styled.h2`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

export const ExperienceLocation = styled.h3`
    font-size: 18px;
    color: #fff;
    margin: 0;
`;

export const ExperienceDates = styled.h3`
    font-size: 18px;
    color: #fff;
    margin: 0;
`;

export const ExperienceDescription = styled.ul`
    margin: 20px;
`;

export const ExperienceItems = styled.li`
    color: #fff;
`;