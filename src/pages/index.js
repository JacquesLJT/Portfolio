import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Experience from '../components/experience'
import Footer from '../components/footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <Hero id="home" />

            <About id="about" />

            <Skills id="skills" />

            <Portfolio id="portfolio" />

            <Experience id="experience" />

            <Footer id="footer" />
        </>
    )
}

export default Home