import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    background: #0B3954;

    @media screen and (max-width: 768px) {
        display: flex;
        padding: 0 24px;
    }
`;

export const ExperienceTextContainer = styled.div``;

export const ExperienceElement = styled.div``;

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
`;

export const ExperienceItems = styled.li`
    color: #fff;
`;