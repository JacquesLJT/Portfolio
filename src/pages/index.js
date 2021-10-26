import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Experience from '../components/experience'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar toggle={toggle}/>

            <span name="home"></span>
            <Hero name="home" id="home"/>

            <span name="about"></span>
            <About name="about" id="about"/>

            <span name="skills"></span>
            <Skills name="skills" id="skills"/>

            <span name="portfolio"></span>
            <Portfolio name="portfolio" id="portfolio"/>

            <span name="experience"></span>
            <Experience name="experience" id="experience"/>

            <span name="contact"></span>
            <Contact name="contact" id="contact"/>

            <Footer/>
        </div>
    )
}

export default Home