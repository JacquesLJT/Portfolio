//import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <header>
        <Router>
            <Navbar />
        </Router>
    </header>
    <main id="main">
        <img id="profile" src="https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2Fprofile.jpeg?alt=media&token=6954e6cd-d7b3-4343-9e21-f5642105141d" alt="Picture of Landon Thibodeau" />
        <div id="introduction">
            <h1>Hey, I'm Landon!</h1>
            <p><br /> I'm a student studying at the <strong><a class="links" href="https://www.umaine.edu" target="_blank">University of Maine</a></strong>, in Orono. Pursuing
                a Bachelor's of science in Computer Science with minors in Computer Engineering and Economics.</p>
        </div>
        <div id="about">
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget finibus ex, quis molestie lacus. Nulla vitae dolor ut odio pretium condimentum.
                Nullam non dui euismod, vestibulum ex non, varius elit. Vestibulum id arcu lobortis, tempor risus nec, consectetur quam. Nulla malesuada eu est eu
                rhoncus. Sed non laoreet metus. Curabitur auctor at orci a fringilla. Vivamus rutrum nibh nec tincidunt venenatis. Etiam tristique turpis erat, quis
                sodales arcu laoreet quis. Pellentesque feugiat consequat tellus vitae commodo. Cras vitae ligula vitae diam euismod imperdiet non non orci. Vivamus
                egestas eget magna nec placerat. Pellentesque ut odio a tortor commodo blandit. Nunc placerat erat a orci egestas semper.</p>
        </div>
        <div id="skills">
            <h1>Skills</h1>
            <h2>Programming Languages</h2>
            <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Verilog</li>
            </ul>
            <h2>Software</h2>
            <ul>
                <li>VirtualBox</li>
                <li>VMware Workstation</li>
                <li>JetBrains suite of IDEs</li>
                <li>Eclipse</li>
                <li>VS Code</li>
                <li>Quartus</li>
            </ul>

        </div>
        <div id="portfolio">
            <h1>Portfolio</h1>
            <h2>Website</h2>

        </div>
        <div id="experience">
            <h1>Work Experience</h1>
            <div class="work">
            <h3>Estabrook's, Yarmouth, ME</h3>
            <h2>Greenhouse Retail Sales</h2>
            <h3>May 2021 - August 2021</h3>
            <ul>
                <li>Maintained the health of flora</li>
                <li>Kept the greenhouses stocked and clean</li>
                <li>Resolved questions from customers</li>
            </ul>
            </div>
            <div class="work">
            <h3>Target, Topsham, ME</h3>
            <h2>General Merchandise Team Member</h2>
            <h3>September 2017 - January 2021</h3>
            <ul>
                <li>Modified workflow depending on where help was needed</li>
                <li>Kept shelves stocked and organized to maintain a high standard of quality</li>
                <li></li>
            </ul>
            </div>
        </div>
        <div id="contact">
            <h1>Contact Me</h1>
            <ul>
                <li><a href="mailto:me@landonthibodeau.com">Email me!</a></li>
                <li><a target="_blank" href="https://williammarchesi.com/">Download my Resume</a></li>
            </ul>
        </div>
    </main>
    <footer>
        <p id="author">Site by Landon Thibodeau</p>
    </footer>
    </>
  );
}

function downloadResume() {
    window.location.href = "";
    return <p>Redirecting...</p>;
}

export default App;
