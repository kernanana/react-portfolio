import React, {useState} from 'react'
import './portfolio.css'
import Fade from 'react-reveal/Fade'
import FaceCard from './FaceCard.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import WorkExperience from './WorkExperience.jsx'
import Projects from './Projects.jsx'

function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    return (
    <div className={isModalOpen ? 'portfolioContainer fixedScroll': 'portfolioContainer '}>
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
                <Projects isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            </div>
        </Fade>
            

    </div>)
}

export default Portfolio