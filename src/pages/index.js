import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
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
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <span name="home" />
            <Hero name="home" />

            <span name="about" />
            <About id="about" />

            <span name="skills" />
            <Skills id="skills" />

            <span name="portfolio" />
            <Portfolio id="portfolio" />

            <span name="experience" />
            <Experience id="experience" />

            <span name="contact" />
            <Contact id="contact" />

            <Footer id="footer" />
        </div>
    )
}

export default Home