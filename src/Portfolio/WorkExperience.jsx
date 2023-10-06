import React from 'react'
import './WorkExperience.css'

class WorkExperience extends React.Component {
    render() {
        return (
            <div className='expContainer'>
                <h1 className='expHeader'>Work Experience</h1>
                <div className='expInfoContainer'>
                    <div className='expImageBox'>
                        <img className="expImage" src="images/kern3.jpg" alt="" />
                    </div>
                    <div className='expInfoBox'>
                        <h2 className='firstSecHeader expInfoSectionHeader'>Experience - Computer Science</h2>
                        <h3 className='expInfoHeader'>DevOps Software Engineering Intern - Hexagon MI | Camarillo, CA</h3>
                        <h5 className='expInfoBodyDate'>May to August 2023</h5>
                        <div className='expInfoBody'>I spent my summer in DevOps - my responsiblities involved creating and 
                        maintaining pipelines in Microsoft Azure for various monitoring/automation 
                        purposes in CI. I also had the chance to write UI tests using TestComplete.</div>

                        <h3 className='expInfoHeader'>Software Engineering Intern - Rose-Hulman Ventures | Terre Haute, IN</h3>
                        <h5 className='expInfoBodyDate'>September 2022 to March 2023</h5>
                        <div className='expInfoBody'>I programmed in HTML/CSS, C#, and SQL for a full-stack mobile 
                        app project that serves the healthcare and criminal justice system with our client eRAMx.</div>

                        <h2 className='expInfoSectionHeader'>Experience - Teaching Assistant</h2>

                        <h3 className='expInfoHeader'>CS Teaching Assistant - Rose-Hulman Institute of Technology | Terre Haute, IN</h3>
                        <h5 className='expInfoBodyDate'>February to May 2023</h5>
                        <div className='expInfoBody'>I spent time as a grader/teaching assistant under
                         Dr. Mark Hays who is teaching Software Requirements Engineering for the 2023 
                         Spring quarter at Rose-Hulman Institute of Technology.</div>
                    </div>
                </div>
                
            </div>
        )
    }
} 

export default WorkExperience