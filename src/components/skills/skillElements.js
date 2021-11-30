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
        padding: 0;
    }
`;

export const SkillsTextContainer = styled.div`
    width: 70%;
    padding: 30px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.8);
    display: block;
    position: relative;
    box-shadow: 12px 12px 10px #0B3954;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 0;
        padding: 10px;
    }
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
    flex-wrap: wrap;
`;

export const ListItem = styled.li`
    color: #fff;
    display: inline-block;
    background: #D36060;
    padding: 10px;
    margin: 5px;
    border: 4px solid #0B3954;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
    //box-shadow: 12px 12px 10px #0B3954;
`;
