import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav>
                <navNameContainer>
                    <navName draggable="false" onmousedown="return false" src="gs://portfolio-fdf27.appspot.com/web_assets/profile.jpeg" alt="Picture of Landon Thibodeau"></navName>
                </navNameContainer>
                <navMenu>
                    <navItem>
                        <navLink to="home" offset={-70} smooth={true} duration={1000}>Home</navLink>
                    </navItem>
                    <navItem>
                        <navLink to="about" offset={-70} smooth={true} duration={1000}>About</navLink>
                    </navItem>
                    <navItem>
                        <navLink to="skills" offset={-70} smooth={true} duration={1000}>Skills</navLink>
                    </navItem>
                    <navItem>
                        <navLink to="portfolio" offset={-70} smooth={true} duration={1000}>Portfolio</navLink>
                    </navItem>
                    <navItem>
                        <navLink to="experience" offset={-70} smooth={true} duration={1000}>Experience</navLink>
                    </navItem>
                    <navItem>
                        <navLink to="contact" offset={-70} smooth={true} duration={1000}>Contact</navLink>
                    </navItem>
                </navMenu>
            </nav>
        </div>
    )
}

export default Navbar