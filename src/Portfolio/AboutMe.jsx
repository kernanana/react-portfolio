import React from 'react'

class AboutMe extends React.Component{
    render (){
        return(
            <div className='aboutMeContainer'>
                <div className='aboutMeInfoContainer'>
                    <h1 className="aboutMeHeader">About Me</h1>
                    <div className="aboutMeLogoBar">
                        <div className='nonambBox'></div>
                        <div className='ambBox'>
                            <a href='https://www.rose-hulman.edu/academics/academic-departments/computer-science-software-engineering/index.html'>
                                <img className='aboutMeLogo' src={`${process.env.PUBLIC_URL}/images/rosehulmanlogo.png`} alt=''></img>
                            </a>
                        </div>
                        <div className='ambBox'>
                            <a href='https://www.rhventures.org/'>
                                <img className='aboutMeLogo' src={`${process.env.PUBLIC_URL}/images/rhvlogo.jpg`} alt=''></img>
                            </a>
                        </div>
                        <div className='ambBox'>
                            <a href='https://hexagon.com/company/divisions/manufacturing-intelligence'>
                                <img className='aboutMeLogo' src={`${process.env.PUBLIC_URL}/images/hexagonlogo.png`} alt=''></img>
                            </a>
                        </div>
                        <div className='nonambBox'></div>
                    </div>
                    <div className='aboutMeStatEduBar'>
                    RHIT May '24 | BS in Software Engineering | Domain Track: AI & Security | Minors: Art, Entrepreneurship
                    </div>
                    <div className='aboutMeDesc'>
                        I am a current senior student at Rose-Hulman Institute of Technology 
                        studying for a BS in Software Engineering. I originally started 
                        as a chemical engineer but pursuing my interests eventually  led me to CS! I am 
                        currently looking for a full-time offer for when I graduate!
                    </div>
                    <div className='aboutMeStatsBar'>
                        <div className='aboutMeStat'>
                            <h1 className='aboutMeStatHeader'>05-2024</h1>
                            <h2 className='aboutMeStatBody'>Graduation Date</h2>
                        </div>
                        <div className='aboutMeStat'>
                            <h1 className='aboutMeStatHeader'>3+</h1>
                            <h2 className='aboutMeStatBody'>Computer Science: Years as a Student</h2>
                        </div>
                        <div className='rightEnd aboutMeStat'>
                            <h1 className='aboutMeStatHeader'>10+</h1>
                            <h2 className='aboutMeStatBody'>Work Experience: Months in Industry</h2>
                        </div>
                    </div>
                    <div className='disableWarning'><span className='disableWarningColor'>Note:</span> Conway's Game of Life is running in the background.
                        There is an option to disable it in the navigation bar.</div>
                </div>
                <div className='aboutMeImageContainer'>
                    <img src={`${process.env.PUBLIC_URL}/images/kernSelfie.JPG`} className='aboutMeImage' alt=''></img>
                </div>
            </div>

        )
    }
}

export default AboutMe