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
