import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 30px;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    
`;

export const ExperienceTextContainer = styled.div`
    width: 60%;
    padding: 30px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.7);
`;

export const ExperienceElementWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ExperienceElement = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
`;

export const ExperienceElementBody = styled.div`
    border: 3px solid #fff;
    border-radius: 10px;
    background-color: #D36060;
    padding: 30px;
    margin: 30px;
`;

export const ExperienceH1 = styled.h1`
    font-size: 48px;
    color: #D36060;
    display: flex;
    justify-content: center;
`;

export const ExperienceTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: #fff;
`;

export const ExperienceLocation = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #fff;
`;

export const ExperienceDates = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #fff;
`;

export const ExperienceDescription = styled.ul`
    display: block;
    justify-content: center;
    padding-top: 10px;
`;

export const ExperienceItems = styled.li`
    color: #fff;
`;