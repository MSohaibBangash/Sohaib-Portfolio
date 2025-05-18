import React from 'react'
import profileImage from "../../assets/images/profile.png"
import "./about.css"
const About = () => {
    return (
        <div className='section container'>
            <h2 className="title">About Me</h2>
            <p className="sub-title">My Introduction</p>
            <div className='about-container'>
                <div className='about-img'>
                    <svg className="home_blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <rect x="0" y="0" width="200" height="200" rx="20" ry="20" />
                        </mask>
                        <g mask="url(#mask0)">
                            <rect x="0" y="0" width="200" height="200" rx="20" ry="20" />
                            <image className="home_blob-img" x="-25" y="-100" href={profileImage} />
                        </g>
                    </svg>
                </div>
                <div className='about-content'>
                    <h5 className='about-title'>Hello! I'm M.Sohaib Khalid</h5>
                    <p className='about-para'>Diligent front-end web developer with a proven track record of around 3 years . Experienced in developing, deploying, testing, and troubleshooting web apps, ensuring high performance and seamless user interaction. Passionate about achieving professional development, enhancing my existing skills, and gaining exposure to new technologies with a focus on expanding my expertise in ASP.NET </p>
                    <span className='border-line'></span>
                    <div className="info-content">
                        <div className="info">
                            <span>Name:</span>
                            <p>M.Sohaib Khalid</p>
                        </div>
                        <div className="info">
                            <span>Email:</span>
                            <p><a>sohaibkhalid514@gmail.com</a></p>
                        </div>
                        <div className="info">
                            <span>Location:</span>
                            <p>Islamabad, Pakistan</p>
                        </div>
                        <div className="info">
                            <span>Availability:</span>
                            <p>Open for work</p>
                        </div>
                    </div>

                    <a href='/Sohaib Resume.pdf' download className="button">Download Cv
                        <i className="uil uil-download-alt"></i>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default About
