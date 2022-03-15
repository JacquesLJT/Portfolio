import React from 'react'
import {
    SkillsContainer,
    SkillsTextContainer,
    SkillsTitle,
    LanguageSkills,
    SoftwareSkills,
    Skillsh2,
    SkillList,
    ListItem,
} from './skillElements'

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsTextContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <LanguageSkills>
                <Skillsh2>Programming Languages</Skillsh2>
                <SkillList>
                    <ListItem>Python</ListItem>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>React.js</ListItem>
                    <ListItem>Java</ListItem>
                    <ListItem>Kotlin</ListItem>
                    <ListItem>C</ListItem>
                    <ListItem>HTML</ListItem>
                    <ListItem>CSS</ListItem>
                    <ListItem>Verilog</ListItem>
                </SkillList>
            </LanguageSkills>
            <br></br>
            <SoftwareSkills>
                <Skillsh2>Software</Skillsh2>
                <SkillList>
                    <ListItem>Github</ListItem>
                    <ListItem>VirtualBox</ListItem>
                    <ListItem>VMware Workstation</ListItem>
                    <ListItem>JetBrains suite of IDEs</ListItem>
                    <ListItem>Visual Studio Code</ListItem>
                    <ListItem>Eclipse</ListItem>
                    <ListItem>Quartus</ListItem>
                    <ListItem>Google Firebase</ListItem>
                </SkillList>
            </SoftwareSkills>
            </SkillsTextContainer>
        </SkillsContainer>
    )
}

export default Skills
