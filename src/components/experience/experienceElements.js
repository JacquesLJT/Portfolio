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
    
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const ExperienceTextContainer = styled.div`
    width: 70%;
    padding: 30px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 12px 12px 10px #0B3954;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 0;
        padding: 10px;
        box-shadow: none;
    }
`;

export const ExperienceElement = styled.div`
    display: flex;
    justify-content: center;
    min-width: 600px;
    border: 5px solid #0B3954;
    border-radius: 10px;
    background-color: #D36060;
    //box-shadow: 12px 12px 10px #0B3954;
    margin: 20px;
`;

export const ExperienceElementBody = styled.div`
    margin: 20px;
`;

export const ExperienceH1 = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: #D36060;
`;

export const ExperienceElementWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
    padding-top: 10px;
`;

export const ExperienceItems = styled.li`
    color: #fff;
`;