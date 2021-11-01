//import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <>
    <Router>
        <Home />
    </Router>
    <main id="main">
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
