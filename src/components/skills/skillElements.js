import styled from "styled-components";

export const SkillsContainer = styled.div`
    background: #0B3954;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    position: relative;

    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fbackground.jpeg?alt=media&token=b0b70b2b-d222-4365-ac02-1aa9573a5ced);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

export const SkillsTextContainer = styled.div`
    width: 80%;
    padding: 30px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.7);
`;

export const SkillsTitle = styled.h1`
    color: #D36060;
    font-size: 48px;
    display: flex;
    justify-content: center;
`;

export const LanguageSkills = styled.div``;

export const SoftwareSkills = styled.div``;

export const Skillsh2 = styled.h2`
    color: #D36060;
    font-size: 24px;
    display: flex;
    justify-content: center;
`;

export const SkillList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
`;

export const ListItem = styled.li`
    color: #fff;
    display: inline-block;
    background: #D36060;
    padding: 10px;
    margin: 5px;
    border: 3px solid #fff;
    border-radius: 10px;
`;
