import React from 'react'
import './Skills.css'
import { BsPhone, BsWindow, BsPersonWorkspace, BsCast, BsTerminal} from "react-icons/bs";

class Skills extends React.Component {
    render (){
        return(
            <div className="skillsContainer">
                <h1 className='skillsHeader'>
                    Technical Skills
                </h1>
                <div className='skillMap'>These are technical skills that I have
                developed so far in computer science. Though I am not claiming to 
                be an expert in all of them, these are skills that I have experience using 
                in the workplace and academic settings and am looking to increase my
                 mastery in them when opportune.
                </div>
                <div className='skillStarMap'>Work Experience<span className='workStar'>* </span>  
                Project Experience<span className='projStar'>* </span> 
                School Experience<span className='schoolStar'>* </span>
                </div>
                <div className='skillBoxContainer'>
                    <div className='skillBox'>
                        <div className='skillIcon'>
                            <BsPhone></BsPhone>
                        </div>
                        <div className='skillInfo'>
                            <h3 className='boxHeader'>Languages</h3>
                            <div className='importantSkills skillDesc'>Python<span className='workStar'>* </span>,
                            Java<span className='schoolStar'>*</span>,
                            C#<span className='workStar'>*</span>,
                            Javascript<span className='projStar'>*</span>,
                            HTML/CSS<span className='workStar'>*</span>, 
                            SQL<span className='workStar'>*</span>,
                            C++<span className='schoolStar'>*</span>,
                            M<span className='workStar'>*</span>,
                            Scheme<span className='schoolStar'>*</span> </div>

                        </div>
                    </div>
                    <div className='skillBox'>
                        <div className='skillIcon'>
                            <BsWindow></BsWindow>
                        </div>
                        <div className='skillInfo'>
                            <h3 className='boxHeader'>Technologies</h3>
                            <div className='importantSkills skillDesc'>React.js<span className='projStar'>* </span>,
                            Microsoft Azure<span className='workStar'>*</span>,
                            AWS<span className='projStar'>*</span>,
                            Flask<span className='projStar'>*</span>, 
                            RESTful APIs<span className='workStar'>*</span>, 
                            Power BI<span className='workStar'>*</span>, 
                            Jira<span className='workStar'>*</span> 
                            </div>
                        </div>
                    </div>
                    <div className='skillBox'>
                        <div className='skillIcon'>
                            <BsPersonWorkspace></BsPersonWorkspace>
                        </div>
                        <div className='skillInfo'>
                            <h3 className='boxHeader'>Project Skills</h3>
                            <div className='importantSkills skillDesc'>Test-Driven Development<span className='schoolStar'>*</span>,
                            Agile<span className='workStar'>*</span>,
                            Extreme Programming<span className='projStar'>*</span> </div>
                        </div>
                    </div>

                    <div className='bottomSkill skillBox'>
                        <div className='skillIcon'>
                            <BsCast></BsCast>
                        </div>
                        <div className='skillInfo'>
                            <h3 className='boxHeader'>Core CS Classes</h3>
                            <div className='skillDesc'>OO Programming, Data Structures & Algorithms,
                            Web Programming, SQA, Requirements Engineering, Software Project Management, Software Design,
                            Software Architecture, Programming Language Concepts, Operating Systems, Comp Arch, Databases
                        </div>

                        </div>
                    </div>
                    <div className='bottomSkill skillBox'>
                        <div className='skillIcon'>
                            <BsTerminal></BsTerminal>
                        </div>
                        <div className='skillInfo'>
                            <h3 className='boxHeader'>CS Electives</h3>
                            <div className='skillDesc'>Biology-Inspired Artificial Intelligence. 
                            Will be taking later this year: Cryptography, Computer Security, Computer Networks
                            </div>
                        </div>
                    </div>
                    {/* <div className='bottomSkill skillBox'>
                        <div className='skillIcon'>
                            <BsPersonWorkspace></BsPersonWorkspace>
                        </div>
                        <div className='skillInfo'>
                            <h3 className='boxHeader'>Project Skills</h3>
                            <div className='skillDesc'></div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Skills