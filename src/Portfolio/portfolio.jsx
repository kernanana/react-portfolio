import React from 'react'
import './portfolio.css'
import Fade from 'react-reveal/Fade'
import FaceCard from './FaceCard.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import WorkExperience from './WorkExperience.jsx'
import Projects from './Projects.jsx'

class Portfolio extends React.Component{
    render() {
        return (
        <div className='portfolioContainer'>
            <div className='firstCard portfolioCard'>
                <FaceCard/>
            </div>
            <Fade top opposite distance='25%' duration='1200'>
                <div className='portfolioCard'>
                    <AboutMe/>
                </div>
                <div className='portfolioCard'>
                    <Skills/>
                </div>
                <div className='portfolioCard'>
                    <WorkExperience />
                </div>
                <div className='lastCard portfolioCard'>
                    <Projects />
                </div>
            </Fade>
            

        </div>)
    }
}

export default Portfolio